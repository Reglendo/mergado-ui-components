import * as React from "react"
import {prefix} from "config"
import {Link} from "react-router"
import * as MUK from "components/Forms/input"
import styled, {css} from "styled-components"
import * as style from "styled"
import { darken } from "polished"
import { InputLabel, Input } from "components/Forms/Input"
import domOnlyProps from "helpers/dom-only-props"

export interface Props extends MUK.Props {
    type?: "button" | "link" | "submit" | "void" | "href"
    link?: string
    to?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor"
    size?: "small" | "tiny" | ""
    disabled?: boolean
    onClick?: (evt: any) => any
}

export interface State {
}

/* <style> */
const Small = css`
    padding: 0 10px;
    height: 32px;
    line-height: 30px;
`
const Tiny = css`
    padding: 0 5px;
    height: 20px;
    line-height: 18px;
`
const Disabled = css`
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
`

/* colors */
const colorize = () => (props) =>  {
    let color
    if(props.color === "nocolor") {
        return `
            background: transparent;
            padding: 0;
            border: none;
            color: #333;
            path {
                fill: #333;
            }
        `
    }
    switch(props.color) {
        case "green":
            color = style.GREEN; break
        case "grey":
        case "gray":
            color = style.GREY; break
        case "red":
            color = style.RED; break
        case "blue":
        default:
            color = style.BLUE; break
    }
    const dark = darken(0.05, color)
    return `
        background-color: ${color};
        background: linear-gradient(to bottom, ${color} 5%, ${dark} 100%);
        border-color: ${dark};

        &:active {
          background: ${dark};
        }

        &:hover {
          background-color: ${dark};
          background: linear-gradient(to bottom, ${dark} 5%, ${color} 100%);
        }
    `
}

const StyledLink = styled(Link)`
    box-sizing: border-box;
    border-radius: 0px;
    display: inline-block;
    font-family: Trebuchet MS,Geneva CE,lucida,sans-serif;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    user-select: none;
    color: white;
    padding: 0px 20px;
    height: 42px;
    line-height: 41px;
    border-width: 1px;
    border-style: solid;
    ${(props: any) => props.size === "tiny" && Tiny }
    ${(props: any) => props.size === "small" && Small }
    ${(props: any) => props.disabled && Disabled }

    ${colorize()}

    &:hover {
      text-decoration: none
    }
    &:last-child {
        margin-right: 0
    }

    .${prefix}icon {
      margin: 0 5px;
      position: relative;
      top: -1px;
    }
`

const StyledInput = styled(Input)`
    display: inline-block;
`

const StyledHref = StyledLink.withComponent("a")
const StyledButton = StyledLink.withComponent("button")
const StyledSubmit = StyledLink.withComponent("input")
const StyledVoid = StyledLink.withComponent("span")

/* </style> */
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
        const { link, labels, icon, input, to } = this.props
        const l = to ? to : link
        return (
            <StyledHref
                {...props}
                {...input}
                color={this.props.color}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                href={l}
                className={`${this.name}__item`}
                title={labels.title}>
                    {icon}{labels.main}
            </StyledHref>)
    }
    protected renderButton(className, props) {
        const { input, labels, icon } = this.props
        return (
            <StyledButton
                {...props}
                {...input}
                color={this.props.color}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={`${this.name}__item ${className ? className : ""}`}
                title={labels.title}>
                    {icon}{labels.main}
            </StyledButton>)
    }
    protected renderLink(className, props) {
        const { link, labels, icon, input, to } = this.props
        const l = to ? to : link
        return (
            <StyledLink
                {...props}
                color={this.props.color}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                to={l}
                className={`${this.name}__item ${className ? className : ""}`}
                title={labels.title}>
                    {icon}{labels.main}
            </StyledLink>)
    }
    protected renderSubmit(className, props) {
        const { meta, input, labels } = this.props
        return (
            <StyledSubmit
                {...props}
                {...input}
                color={this.props.color}
                disabled={this.props.disabled}
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
            <StyledVoid
                {...props}
                {...input}
                color={this.props.color}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={`${this.name}__item ${className ? className : ""}`}
                title={labels.title}>
                    {icon}{labels.main}
            </StyledVoid>)
    }

    protected renderLabel(className: string, props: any) {
        return null
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

    public render() {
        const props: any = this.props
        const { meta, input, labels, group, ...others } = props
        const inputProps: Props = domOnlyProps({
                                    id: this.props.meta.form ? `${this.props.meta.form}-${input.name}` : "",
                                    ...others })
        return (
            <StyledInput name={this.name} {...props}>
                {this.renderError()}
                <InputLabel name={this.name}>
                    {this.renderLabel(input.className ? input.className : "", inputProps)}
                </InputLabel>
                {this.renderInput(input.className ? input.className : "", inputProps)}
            </StyledInput>
        )
    }
}

export default Button
