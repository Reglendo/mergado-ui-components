import * as React from "react"
import styled, {css} from "styled-components"
import * as style from "styled"
import { darken } from "polished"
import domOnlyProps from "helpers/dom-only-props"
import {prefix,form} from "config"
import {Link as RouterLink} from "react-router"
/* <style> */
/* sizes */
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
    const darker = darken(0.1, color)
    return `
        background-color: ${color};
        border-color: ${color};

        &:hover {
            background-color: ${dark};
        }

        &:active,&:focus {
          background: ${darker};
          text-decoration: none;
        }

    `
}

const styling = css`
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

interface IHrefProps {
    name: string
    icon?: JSX.Element | string
    label?: string | JSX.Element
    title?: string
    link?: string
    className?: string
    [propName: string]: any
}

const Href: React.SFC<IHrefProps> = ({icon, label, link, name, title, className, children, ...props}) =>
        <a  {...domOnlyProps(props)}
            href={link}
            className={`${name}__item ${className ? className : ""}`}
            title={title}>
                {icon}{label}
        </a>

interface IButtonProps {
    name: string
    icon?: JSX.Element | string
    label?: string | JSX.Element
    title?: string
    className?: string
    input?: any
    [propName: string]: any
}

const Button: React.SFC<IButtonProps> = ({name, icon, label, title, className, input, children, ...props}) => {
    return (
        <button
            {...input}
            {...domOnlyProps(props)}
            className={`${name}__item ${className ? className : ""}`}
            title={title}>
                {icon}{label}
        </button>
    )
}

interface ILinkProps {
    name: string
    icon?: JSX.Element | string
    label?: string | JSX.Element
    title?: string
    className?: string
    link?: string
    [propName: string]: any
}

const Link: React.SFC<ILinkProps> = ({name, icon, label, title, className, link, children, ...props}) =>
        <RouterLink
            {...domOnlyProps(props)}
            to={link}
            className={`${name}__item ${className ? className : ""}`}
            title={title}>
                {icon}{label}
        </RouterLink>

interface ISubmitProps {
    name: string
    label?: string | JSX.Element
    title?: string
    className?: string
    input?: any
    [propName: string]: any
}

const Submit: React.SFC<ISubmitProps> = ({name, label, title, className, input, children, ...props}) =>
        <input type="submit"
                    {...input}
                    {...domOnlyProps(props)}
                    className={`${name}__item ${className ? className : ""}`}
                    value={label}
                    title={title}
                />

interface IVoidProps {
    name: string
    icon?: JSX.Element | string
    label?: string | JSX.Element
    title?: string
    className?: string
    [propName: string]: any
}
const Void: React.SFC<IVoidProps> = ({name, icon, label, title, className, children, ...props}) =>
        <span
            {...domOnlyProps(props)}
            className={`${name}__item ${className ? className : ""}`}
            title={title}>
                {icon}{label}
        </span>

const UniversalButtonComponent = ({...props}) => {
    const { name, type, link, labels, icon, input, to, children, ...others } = props
    if(type === "href") {
        return <Href
                    {...others}
                    name={name}
                    title={labels.title}
                    link={to ? to : link}
                    icon={icon}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "button") {
        return <Button
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    input={input}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "link") {
        return <Link
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    link={to ? to : link}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "submit") {
        return <Submit
                    {...others}
                    name={name}
                    title={labels.title}
                    input={input}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "void") {
        return <Void
                    {...others}
                    name={name}
                    icon={icon}
                    title={labels.title}
                    label={others.label ? others.label : labels.main}
                />
    } else {
        return <div/>
    }
}

export const UniversalButton = styled(UniversalButtonComponent)`
    ${styling}
`
