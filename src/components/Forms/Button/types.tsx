import * as React from "react"
import glamorous from "glamorous"
import {Link as RouterLink} from "react-router"

import domOnlyProps from "../../../helpers/dom-only-props"
import {prefix,form} from "../../../config"

interface IHrefProps {
    name: string
    icon?: JSX.Element | string
    label?: string | JSX.Element
    title?: string
    link?: string
    className?: string
    [propName: string]: any
}

export const Href: React.SFC<IHrefProps> = ({icon, label, link, name, title, className, children, ...props}) =>
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

export const Button: React.SFC<IButtonProps> = ({name, icon, label, title, className, input, children, ...props}) => {
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

export const Link: React.SFC<ILinkProps> = ({name, icon, label, title, className, link, children, ...props}) =>
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

export const Submit: React.SFC<ISubmitProps> = ({name, label, title, className, input, children, ...props}) =>
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
export const Void: React.SFC<IVoidProps> = ({name, icon, label, title, className, children, ...props}) =>
        <span
            {...domOnlyProps(props)}
            className={`${name}__item ${className ? className : ""}`}
            title={title}>
                {icon}{label}{children}
        </span>
