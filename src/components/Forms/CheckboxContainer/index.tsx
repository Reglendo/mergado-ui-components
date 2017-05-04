import * as React from "react"
import InputProps from "../default_props"
import {prefix} from "../../../config"

export interface Query {
    id: number
    name: string
    product_count?: number
}

export interface Props extends InputProps {
    availableQueries?: Array<Query>
    labels?: {
        main?: string
        placeholder?: string
        allProducts?: string
        invalid?: string
    }
    singleChoice?: boolean
    withoutFilter?: boolean
    /** Height of box with queries (in px) */
    height?: string|number
    style?: any
}

export interface State {
    filter: string
}

class CheckboxContainer extends React.Component<Props, State> {

    readonly name = prefix + "checkbox_container";
    readonly form = prefix + "form";

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
            value: []
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
            warning: ""
        },
        availableQueries: [],
        labels: {
            main: "Apply on queries",
            allProducts: "All products",
            placeholder: "Filter",
            invalid: "Invalid input"
        },
        singleChoice: false,
        withoutFilter: false,
        height: 300
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            filter: ''
        }
    }

    renderInvalid() {
        if(this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (
                <div className={`${this.form}__validation`}>
                    {this.props.labels.invalid}
                </div>
            )
        }
    }

    renderOptions(options) {
        if (typeof options === "object") {
            let arr = Object.keys(options).map((key: any) => options[key])
            options = arr
        }

        let queries = this.props.input.value

        if (!(queries instanceof Array) && !(queries instanceof Object)) {
            queries = []
        }
        return options
            .filter((option) => {
                var regex = new RegExp(this.state.filter, 'i');
                return regex.test(option.name);
            })
            .map(option => {
                const index = queries.indexOf(option.id);

                let handler = () => {
                    if (index < 0) { // wasn't selected
                        if (this.props.singleChoice === false) {
                            this.props.input.onChange(queries.concat(option.id));
                        } else {
                            this.props.input.onChange([option.id]);
                        }
                    } else {
                        const copy = [...queries]; // make copy to not mutate value
                        copy.splice(index, 1); // remove item at index
                        this.props.input.onChange(copy);
                    }
                }

                return (
                    <li className={`${this.name}__item ${index >= 0 ? `${this.name}__item--active` : ''}`}
                        key={option.id} onClick={handler}>
                        {this.props.singleChoice == false ? (
                                <input
                                    type="checkbox"
                                    className={`${this.name}__checkbox`}
                                    checked={queries.indexOf(option.id) >= 0}
                                    onChange={handler}/>
                            ) : null}
                        <label
                            className={`${this.name}__label`}>{option.name === "♥ALLPRODUCTS♥" ? this.props.labels.allProducts : option.name }
                            {" "}<span
                                className={`${this.name}__count`}>{typeof option.product_count !== "undefined" ? `(${option.product_count})` : "" }</span>
                        </label>
                    </li>
                )
            })
    }

    renderBoxes() {
        let options = this.props.availableQueries
        const render = (options) => this.renderOptions(options)
        const className = this.name+`__group`
        if(options.constructor === Array) {
            return render(options)
        } else {
            return Object.keys(options).map(function(key) {
                return (<div><li className={className}>{key}</li>{render(options[key])}</div>)
            })
        }
    }


    render() {

        return (
            <div className={this.name} style={this.props.style}>

                <h3 className={`${this.name}__header`} title={this.props.meta.invalid ? this.props.labels.invalid :
                    ''}>{this.props.labels.main}</h3>
                <div className={`${this.name}__queries
                                 ${this.form}__group
                                 ${this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? `${this.form}__group--invalid` : ''}
                             `}>
                    {this.renderInvalid()}
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
            </div>
        )
    }
}

export default CheckboxContainer