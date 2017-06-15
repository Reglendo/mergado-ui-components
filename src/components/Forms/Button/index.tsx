import * as React from "react"
import {prefix} from "config"
import {Link} from "react-router"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
    type?: "button" | "link" | "submit" | "void" | "href"
    link?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor"
    size?: "small" | "tiny" | ""
    disabled?: boolean
    onClick?: () => any
}

export interface State {
}

class Button extends MUK.InputComponent<Props, State> {
    public readonly props: Props;
    public state: State;
    protected readonly name = prefix + "button";

    public static defaultProps: Props = {
        ...MUK.defaultProps,
        type: "button",
        icon: null,
        color: "blue",
        disabled: false,
        size: "",
    }

    protected renderHref(className, props) {
        const { link, labels, icon, input } = this.props
        return (
            <a
                {...input}
                onClick={this.props.onClick}
                href={link}
                className={`${this.name}__item`}
                title={labels.title}>
                    {icon}{labels.main}
            </a>)
    }
    protected renderButton(className, props) {
        const { input, labels, icon } = this.props
        return (
            <button
                {...input}
                onClick={this.props.onClick}
                className={`${this.name}__item ${className ? className : ""}`}
                title={labels.title}>
                    {icon}{labels.main}
            </button>)
    }
    protected renderLink(className, props) {
        const { link, labels, icon, input } = this.props
        return (
            <Link
                onClick={this.props.onClick}
                to={link}
                className={`${this.name}__item ${className ? className : ""}`}
                title={labels.title}>
                    {icon}{labels.main}
            </Link>)
    }
    protected renderSubmit(className, props) {
        const { meta, input, labels } = this.props
        return (
            <input
                {...input}
                onClick={this.props.onClick}
                type="submit"
                className={`${this.name}__item ${className ? className : ""}`}
                value={`${labels.main}`}
                title={labels.title}
            />)
    }
    protected renderVoid(className, props) {
        const { input, labels, icon } = this.props
        return (
            <span
                {...input}
                onClick={this.props.onClick}
                className={`${this.name}__item ${className ? className : ""}`}
                title={labels.title}>
                    {icon}{labels.main}
            </span>)
    }

    protected renderLabel() {
        return <span/>
    }

    protected renderInput(className, props) {
        const { type,color,disabled, size, meta } = this.props
        return (
            <div className={`${this.name}--${color} \
${!this.props.labels.main?this.name+`--notext`:``} \
${size ? this.name+`--`+size:``} \
${this.name}--${type} \
${disabled ? this.name+`--disabled`:``} \
`}>
                {type === "button" && this.renderButton(className, props)}
                {type === "link" && this.renderLink(className, props)}
                {type === "submit" && this.renderSubmit(className, props)}
                {type === "void" && this.renderVoid(className, props)}
                {type === "href" && this.renderHref(className, props)}
            </div>
        )
    }
}

export default Button
