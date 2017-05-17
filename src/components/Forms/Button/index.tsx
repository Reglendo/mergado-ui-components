import * as React  from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"
import {Link} from "react-router"

export interface Props extends InputProps {
    type?: "button" | "link" | "submit" | "void" | "href"
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
        addClass: "",
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
        if(this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (
                <div className={`${this.form}__validation`}>
                    {this.props.labels.invalid}
                </div>
            )
        }
    }

    renderHref() {
        const { link, labels, icon, onClick } = this.props
        return (<a href={link} className={`${this.name}__item`} onClick={onClick} title={labels.title}>{icon}{labels.main}</a>)
    }
    renderButton() {
        const { input, labels, icon, onClick } = this.props
        return (<button className={`${this.name}__item`} onClick={onClick} name={input.name} title={labels.title} {...this.props.addProps}>{icon}{labels.main}</button>)
    }
    renderLink() {
        const { link, labels, icon, onClick } = this.props
        return (<Link to={link} className={`${this.name}__item`} onClick={onClick} title={labels.title}>{icon}{labels.main}</Link>)
    }
    renderSubmit() {
        const { meta, input, labels, onClick } = this.props
        const inputId = `${meta.form}-${input.name}`
        return (<input type="submit" className={`${this.name}__item`} value={`${labels.main}`} id={inputId} name={input.name} title={labels.title} onClick={onClick} {...this.props.addProps} />)
    }
    renderVoid() {
        const { input, labels, icon, onClick } = this.props
        return (<span className={`${this.name}__item`} onClick={onClick} name={input.name} title={labels.title}>{icon}{labels.main}</span>)
    }

    render() {
        const { type,color,state, size, addClass, meta } = this.props
        return (
            <div className={`${this.name} ${this.name}--${color}
                             ${!this.props.labels.main?this.name+`--notext`:``}
                             ${size?this.name+`--`+size:``}
                             ${state?this.name+`--`+state:``}
                             ${addClass?addClass:``}
                             ${type ==='submit'? `{this.form}__group`: ''}
                             ${type ==='submit' && meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}
                         `} title={this.props.labels.title} style={this.props.style}>
                {type === 'submit' && this.renderInvalid()}
                {type === 'button' && this.renderButton()}
                {type === 'link' && this.renderLink()}
                {type === 'submit' && this.renderSubmit()}
                {type === 'void' && this.renderVoid()}
                {type === 'href' && this.renderHref()}
            </div>
        )
    }
}

export default Button