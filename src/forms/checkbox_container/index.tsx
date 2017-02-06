import * as React from "react"
import InputProps from "../default_props"


export interface Query {
    id: number
    name: string
    productCount: number
}

export interface Props extends InputProps {
    availibleQueries: Array<Query>
    labels: {
        main: string
        placeholder: string
        allProducts: string
        invalid: string
    }
}

export interface State {
    filter: string
}

class CheckboxContainer extends React.Component<Props, State> {

    public static defaultProps: Props = {
        input: {
            checked: false,
            name: "",
            onBlur: (value) => {},
            onChange: (value) => {},
            onDragstart: (value) => {},
            onDrop: (value) => {},
            onFocus: (value) => {},
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
        availibleQueries: [],
        labels: {
            main: "Apply on queries",
            allProducts: "All products",
            placeholder: "Filter",
            invalid: "Invalid input"
        }
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            filter: ''
        }
    }

    renderBoxes() {
        let options = this.props.availibleQueries;

        if (typeof options === "object") {
            let arr = Object.keys(options).map((key: any) => options[key])
            options = arr
        }

        let queries = this.props.input.value

        if(! (typeof queries === "array" || typeof queries === "object") ) {
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
                        this.props.input.onChange(queries.concat(option.id));
                    } else {
                        const copy = [...queries]; // make copy to not mutate value
                        copy.splice(index, 1); // remove item at index
                        this.props.input.onChange(copy);
                    }
                }
                
                return (
                    <li className={`checkbox-container-item ${index < 0 ? 'active' : ''}`} key={option.id} onClick={handler} style={{cursor: "pointer"}}>
                        <input
                            type="checkbox"
                            checked={queries.indexOf(option.id) >= 0}
                            onChange={handler} />
                        <label>{option.name === "♥ALLPRODUCTS♥" ? this.props.labels.allProducts : option.name }
                            {" "}<span className="query-info-count">{typeof option.productCount !== "undefined" ? `(${option.productCount})` : "" }</span>
                        </label>
                    </li>
                )
            })
    }

    render() {

        const queries = this.props.input.value
        return (
            <div>
                <h3 title={this.props.meta.invalid ? this.props.labels.invalid :
                    ''}>{this.props.labels.main}</h3>
                <div id="queries" className={`queries-list ${this.props.meta.dirty && this.props.meta.invalid ?
                    'invalid' : ''}`}>
                    <div style={{ paddingRight: 0 }}>
                        <div className="quick-filter" style={{ display: 'block' }}>
                            <input className="string form-control" type="text" name="filter" id="quick-filter"
                                placeholder={this.props.labels.placeholder}
                                value={this.state.filter}
                                onChange={(evt) => { this.setState({ filter: evt.target.value }) } }></input>
                        </div>

                        <ul className={`query-list-control`}>
                            {this.renderBoxes()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckboxContainer