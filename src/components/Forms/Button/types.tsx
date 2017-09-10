import * as React from "react"
import styled, {css} from "styled-components"
import {Link as RouterLink} from "react-router"

import * as style from "../../../styled"
import theme from "../../../styled/theme"
import domOnlyProps from "../../../helpers/dom-only-props"
import {prefix,form} from "../../../config"

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
    if(props.color === "nocolor") {
        return css`
            background: transparent;
            padding: 0;
            border: none;
            color: ${theme.blue};
            &:active,&:focus {
              border: none;
              outline: none;
              background: rgba(200,200,200,0.2);
            }
            path {
                fill: ${theme.blue};
            }
        `
    }
    const color = theme[props.color === "gray" ? "grey" : props.color]

    if(props.secondary === true) {
        return css`
            background: transparent;
            border: 2px solid ${color};
            color: ${color};
            path {
                ${color};
            }
            &:hover {
                background-color: ${color.fade(0.9)};
                text-decoration: none;
            }
            &:active,&:focus {
              background: ${color.fade(0.6)};
              text-decoration: none;
            }
        `
    }
    return css`
        background-color: ${color};
        border-color: ${color};
        color: white;
        &:hover {
            background-color: ${color.darken(0.1)};
        }
        &:active,&:focus {
          background: ${color.darken(0.2)};
          text-decoration: none;
        }
    `
}

const styling = css`
    box-sizing: border-box;
    border-radius: ${theme.radius};
    display: inline-block;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-transform: ${theme.button_text_transform};
    font-size: ${theme.button_text_size};
    font-weight: ${theme.button_text_weight};
    user-select: none;
    padding: 0px 20px;
    height: 42px;
    line-height: 39px;
    border-width: 2px;
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
      margin: 0 5;
      position: relative;
      top: -1px;
    }
    a {
        color: white;
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
                {icon}{label}{children}
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
                {icon}{label}{children}
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
                {icon}{label}{children}
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
                {icon}{label}{children}
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
                    children={children}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "button") {
        return <Button
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    input={input}
                    children={children}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "link") {
        return <Link
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    children={children}
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
                    children={children}
                    label={others.label ? others.label : labels.main}
                />
    } else {
        return <div/>
    }
}

export const UniversalButton = styled(UniversalButtonComponent)`
    ${styling}
`
