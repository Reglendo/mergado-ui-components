import * as React from "react"
import {prefix} from "config"
import LittleStatus from "components/LittleStatus"
import {Link} from "react-router"
import uniqueId from "helpers/unique_id"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Query {
    id: number
    name: string
    product_count?: number
    active?: boolean
    link?: Link | JSX.Element
}

export interface Props extends MUK.Props {

    availableQueries?: Query[] | any

    /** If singleChoice is enabled radios will be used instead of checkboxes */
    singleChoice?: boolean
    /** Show radio input if singleChoice is active. Otherwise show only link */
    showRadio?: boolean
    /** Do not show queries filter */
    withoutFilter?: boolean
    /** Height of box with queries (in px) */
    height?: number | string
    /** Show small label instead of bigger header  */
    showLabel?: boolean

    labels?: {
        allProducts?: string,
        main?: string,
        placeholder?: string,
        invalid?: string,
    }
}

export interface State {
    filter: string
}

class CheckboxContainer extends MUK.InputComponent<Props,State> {

    protected readonly name = prefix + "checkbox_container";
    public readonly props: Props;
    public state: State;

    public static defaultProps: Props = {
        ...MUK.defaultProps,
        availableQueries: [],
        singleChoice: false,
        withoutFilter: false,
        height: 300,
        showRadio: false,
        showLabel: false,
        labels: {
            main: "",
            allProducts: "All products",
            placeholder: "",
            invalid: "",
        },
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            filter: "",
        }

    }

    protected sortOptions(props) {
      if(!props.meta.initial) {
        return
      }
      const queries = props.meta.initial

      return (a,b) => {
        const activeA = queries.indexOf(a.id) >= 0
        const activeB = queries.indexOf(b.id) >= 0

        if (activeA < activeB) {
          return 1
        }
        if (activeA > activeB) {
          return -1
        }
        return 0
      }
    }

    protected renderOptions(options) {

        const { input } = this.props

        if (typeof options === "object") {
            const arr = Object.keys(options).map((key: any) => options[key])
            options = arr
        }

        let queries = this.props.input.value

        if (!(queries instanceof Array) && !(queries instanceof Object)) {
            queries = [queries]
        }

        let allProductsOption: any = null;
        const isAllProducts = options.map( (option,key) => {
            if(option.name === "♥ALLPRODUCTS♥") {
                const object: any = Object
                allProductsOption = object.assign({}, option, { key })
            }
            return (option.name === "♥ALLPRODUCTS♥" && queries.indexOf(option.id))
        })

        return options
            .filter((option) => {
                const regex = new RegExp(this.state.filter, "i");
                return regex.test(option.name);
            })

            .map(option => {
                const index = queries.indexOf(option.id);
                const handler = () => {
                    if (index < 0) { // wasn't selected
                        if(allProductsOption &&
                            isAllProducts[allProductsOption.key] !== false &&
                            isAllProducts[allProductsOption.key] > -1) {
                                // 'All products' option is already selected, remove it
                                queries.splice(queries.indexOf(allProductsOption.id), 1)
                        }
                        if(input) {
                            if (this.props.singleChoice === false) {
                                input.onChange(queries.concat(option.id));
                            } else {
                                input.onChange(option.id);
                            }
                        }
                    } else {
                        const copy = [...queries] // make copy to not mutate value
                        copy.splice(index, 1) // remove item at index
                        if(input) {
                            input.onChange(copy)
                        }
                    }
                }

                return (
                    <li className={`${this.name}__item ${index >= 0 ? `${this.name}__item--active` : ""}
                                    ${option.disabled ? `${this.name}__item--disabled` : ""}` }
                        key={uniqueId()}
                        onClick={handler}>
                        {this.props.singleChoice === false ?
                            <input
                                type="checkbox"
                                className={`${this.name}__checkbox`}
                                checked={queries.indexOf(option.id) >= 0}
                                onChange={handler}
                                style={{pointerEvents: "none"}}
                            />
                        :
                            <input
                                type="radio"
                                className={`${this.name}__checkbox`}
                                checked={queries.indexOf(option.id) >= 0}
                                onChange={handler}
                                style={{display: this.props.showRadio?"inline-block":"none", pointerEvents: "none"}}
                            />
                        }
                        {this.renderItemLabel(option)}
                    </li>
                )
            })
    }

    protected renderItemLabel(option) {
        let label = (option.name === "♥ALLPRODUCTS♥" ? this.props.labels.allProducts : option.name)

        if(option.link !== undefined) {
            label = <Link to={option.link}>{label}</Link>
        }

        if(option.active !== undefined) {
            label = <LittleStatus type={option.active ? "success" : "inactive"}>{label}</LittleStatus>
        }
        return (
            <label className={`${this.name}__label`}>
                {label}
                {" "}
                <span className={`${this.name}__count`}>
                    {typeof option.product_count !== "undefined" ? `(${option.product_count})` : "" }
                </span>
            </label>
        )
    }

    protected renderBoxes() {
        const options = this.props.availableQueries
        const render = (items) => this.renderOptions(items)
        const className = this.name+`__group`
        if(options.constructor === Array) {
            return render(options.sort(this.sortOptions(this.props)))
        } else {
            return Object.keys(options).map(key => {
                if(key === "") {
                    return render(options[key])
                } else {
                    return (
                        <div key={`size_${key}_${uniqueId()}`}>
                            <li key={`option_${key}_${uniqueId()}`} className={className}>
                                {key}
                            </li>
                            {render(options[key])}
                        </div>)
                }
            })
        }
    }

    protected renderLabel(className, props) {
        const { showLabel, labels, meta} = this.props

        return (
            <InputLabel name={this.name}>
                {showLabel
                    ? labels.main
                    : <h3 className={`${this.name}__header`}>
                            {labels.main}
                    </h3>
                }
            </InputLabel>
        )
    }

    protected renderFilter() {
        return (
            <div className={`${this.name}__filter`}>
                <input className={`${this.name}__filter_input ${this.form}__input--text`} type="text"
                       id="filter" name="filter"
                       value={this.state.filter} placeholder={this.props.labels.placeholder}
                       onChange={(evt) => { this.setState({ filter: evt.target.value }) } } />
            </div>
        )
    }

    protected renderInput(className, props) {
        const { withoutFilter, height, showLabel, labels, meta} = this.props

        return (
            <div className={`${this.name}__queries`}>
                {withoutFilter === false && this.renderFilter()}
                <ul className={`${this.name}__list`} style={{ height }}>
                    {this.renderBoxes()}
                </ul>
            </div>
        )

    }

}

export default CheckboxContainer
