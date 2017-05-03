import * as React  from "react"
import InputProps from "../default_props"
import {prefix} from "../../../config"

export interface Props extends InputProps {
    type?: "button" | "link" | "submit" | "void"
    link?: string
    icon?: JSX.Element
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor"
    size?: "small" | "tiny" | ""
    state?: "disabled" | ""
    onClick?: (event: any) => any
    style?: any
    addClass?: string
    labels?: {
        main?: string | JSX.Element
        invalid?: string | JSX.Element
        title?: string
    }
}

export interface State {
}

class Button extends React.Component<Props, State> {

    readonly name = prefix + "button";
    readonly form = prefix + "form";

    public static defaultProps: Props = {
        type: "button",
        onClick: (event) => {
            return true;
        },
        icon: null,
        color: "blue",
        state: "",
        size: "",
        style: null,
        addClass: null,
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
            main: null,
            invalid: "Invalid input",
            title: ""
        }
    }

    renderInvalid() {
        return (
            <div
                className="form-validation-box">{this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""}</div>
        )
    }

    renderButton() {
        const { input, labels, icon, onClick } = this.props
        return (<button className={`${this.name}__item`} onClick={onClick} name={input.name} title={labels.title}>{icon}{labels.main}</button>)
    }
    renderLink() {
        const { link, labels, icon, onClick } = this.props
        return (<a href={link} className={`${this.name}__item`} onClick={onClick} title={labels.title}>{icon}{labels.main}</a>)
    }
    renderSubmit() {
        const { meta, input, labels, onClick } = this.props
        const inputId = `${meta.form}-${input.name}`
        return (<input type="submit" className={`${this.name}__item`} value={`${labels.main}`} id={inputId} name={input.name} title={labels.title} onClick={onClick} />)
    }
    renderVoid() {
        const { input, labels, icon, onClick } = this.props
        return (<span className={`${this.name}__item`} onClick={onClick} name={input.name} title={labels.title}>{icon}{labels.main}</span>)
    }

    render() {
        const { type,color,state, size, addClass } = this.props
        return (
            <div className={`${this.name} ${this.name}--${color} ${!this.props.labels.main?this.name+`--notext`:``} ${size?this.name+`--`+size:``} ${state?this.name+`--`+state:``} ${addClass?addClass:``} ${this.form}__group `} title={this.props.labels.title} style={this.props.style}>
                {type == 'submit' && this.renderInvalid()}
                {type == 'button' && this.renderButton()}
                {type == 'link' && this.renderLink()}
                {type == 'submit' && this.renderSubmit()}
                {type == 'void' && this.renderVoid()}
            </div>
        )
    }
}

export default Button