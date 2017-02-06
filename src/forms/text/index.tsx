import * as React  from "react"
import InputProps from "../default_props"

export interface Props extends InputProps {
    labels: {
        main: string | JSX.Element
        placeholder: string 
        invalid: string | JSX.Element
        title: string
    }
    showTitle?: boolean
}

export interface State {}

const Styles = {
    group: {
        display: 'block',
        margin: '5px',
        width: '100%',
    },
    label: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: '10px',
        paddingBottom: '10px',
        display: 'inline-block',
        width: '30%',
        fontSize: '12pt',
    },
    input: {

    }
}

class TextInput extends React.Component<Props, State> {
    public static defaultProps: Props = {
        input: {
            checked: false,
            name: "",
            onBlur: (value) => {},
            onChange: (value) => {},
            onDragstart: (value) => {},
            onDrop: (value) => {},
            onFocus: (value) => {},
            value: ""
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
        labels: {
            main: "Text",
            placeholder: "Fill out here...",
            invalid: "Invalid input",
            title: ""
        },
        showTitle: false
    }

    renderInvalid() {
        return (
            <div className="form-validation-box">{this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""}</div>
        )
    }

    render() {
        const inputId = `${this.props.meta.form}-${this.props.input.name}`
        return (
            <div className="form-group" title={this.props.showTitle ? this.props.labels.title : ""}>
                {this.renderInvalid()}
                 <label className="form-label" htmlFor={inputId} >{this.props.labels.main }</label>
                 <input className={`form-control ${this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? 'invalid' : ''}`} id={inputId} type="text" 
                   {...this.props.input} />
            </div>
        )
    }
}

export default TextInput