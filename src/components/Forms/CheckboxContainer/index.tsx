import * as React from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"
import LittleStatus from "components/LittleStatus"
import {Link} from "react-router"
import uniqueId from "helpers/unique_id"
import {Input, InputLabel, InputError} from "components/Forms/Input"

export interface Query {
    id: number
    name: string
    product_count?: number
    active?: boolean
    link?: Link | JSX.Element
}

export interface Props extends InputProps {
    availableQueries?: Query[] | any
    labels?: {
        main?: string,
        placeholder?: string,
        allProducts?: string,
        invalid?: string,
    }
    singleChoice?: boolean
    withoutFilter?: boolean
    /** Height of box with queries (in px) */
    height?: number | string
    /** Show small label instead of bigger header  */
    showLabel?: boolean
    /** Show radio input if singleChoice is active. Otherwise show only link */
    showRadio?: boolean
    style?: any
}

export interface State {
    filter: string
}

class CheckboxContainer extends React.Component<Props, State> {

    private readonly name = prefix + "checkbox_container";
    private readonly form = prefix + "form";

    public static defaultProps: Props = {
        input: {
            checked: false,
            name: "",
            onBlur: (value) => {
            },
            onChange: (value) => {
            },
            onDragStart: (value) => {
            },
            onDrop: (value) => {
            },
            onFocus: (value) => {
            },
            value: "",
        },
        meta: {
            active: false,
            asyncValidating: false,
            autofilled: false,
            dirty: false,
            dispatch: Function,
            error: "",
            form: "",
            invalid: false,
            pristine: true,
            submitting: false,
            submitFailed: false,
            touched: false,
            valid: true,
            visited: false,
            warning: "",
        },
        availableQueries: [],
        labels: {
            main: "Apply on queries",
            allProducts: "All products",
            placeholder: "Filter",
            invalid: "Invalid input",
        },
        singleChoice: false,
        withoutFilter: false,
        height: 300,
        showRadio: false,
        showLabel: false,
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            filter: "",
        }
    }

    protected renderOptions(options) {
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
                        if (this.props.singleChoice === false) {
                            this.props.input.onChange(queries.concat(option.id));
                        } else {
                            this.props.input.onChange(option.id);
                        }
                    } else {
                        const copy = [...queries]; // make copy to not mutate value
                        copy.splice(index, 1); // remove item at index
                        this.props.input.onChange(copy);
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
                                {...this.props.input} />
                            :
                            <input
                                type="radio"
                                className={`${this.name}__checkbox`}
                                checked={queries.indexOf(option.id) >= 0}
                                onChange={handler}
                                style={{display: this.props.showRadio?"inline-block":"none", pointerEvents: "none"}}
                                {...this.props.input} />

                        }
                        {this.renderLabel(option)}
                    </li>
                )
            })
    }

    protected renderLabel(option) {
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
            return render(options)
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

    public render() {
        const { meta } = this.props
        const props: any = this.props

        return (
            <Input name={this.name} {...props}>
                <InputLabel name={this.name}>
                    {this.props.showLabel ? this.props.labels.main
                     :
                        <h3 className={`${this.name}__header`}
                            title={this.props.meta.invalid ? this.props.labels.invalid : ""}>
                                {this.props.labels.main}
                        </h3>
                    }
                </InputLabel>
                <InputError {...props}/>
                <div className={`${this.name}__queries`}>
                    {this.props.withoutFilter === false ? (
                            <div className={`${this.name}__filter`}>
                                <input className={`${this.name}__filter_input ${this.form}__input--text`} type="text"
                                       id="filter" name="filter"
                                       value={this.state.filter} placeholder={this.props.labels.placeholder}
                                       onChange={(evt) => { this.setState({ filter: evt.target.value }) } } />
                            </div>
                        ) : null}
                    <ul className={`${this.name}__list`} style={{height: this.props.height }}>
                        {this.renderBoxes()}
                    </ul>
                </div>
            </Input>
        )
    }
}

export default CheckboxContainer
