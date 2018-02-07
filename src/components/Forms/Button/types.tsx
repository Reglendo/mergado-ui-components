import * as React from "react"
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

export const Href: React.SFC<IHrefProps> = ({icon, label, link, name, title,
                                             styleClass, className, children, ...props}) =>
        <a {...domOnlyProps(props)}
            href={link}
            className={`${name}__item ${className ? className : ""} ${styleClass}`}
            title={title}>
                {icon}{icon && " "}{label}{children}
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

export const Button: React.SFC<IButtonProps> = ({name, icon, label, title, className,
                                                 styleClass, input, children, ...props}) => {
    return (
        <button
            {...input}
            {...domOnlyProps(props)}
            className={`${name}__item ${className ? className : ""} ${styleClass}`}
            title={title}>
                {icon}{icon && " "}{label}{children}
        </button>
    )
}

interface ISubmitProps {
    name: string
    label?: string | JSX.Element
    title?: string
    className?: string
    input?: any
    [propName: string]: any
}

export const Submit: React.SFC<ISubmitProps> = ({name, label, title, className,
                                                 styleClass, input, children, ...props}) =>
        <input type="submit"
                    {...input}
                    {...domOnlyProps(props)}
                    className={`${name}__item ${className ? className : ""} ${styleClass}`}
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
export const Void: React.SFC<IVoidProps> = ({name, icon, label, title, className,
                                             styleClass, children, ...props}) =>
        <span
            {...domOnlyProps(props)}
            className={`${name}__item ${className ? className : ""} ${styleClass}`}
            title={title}>
                {icon}{icon && " "}{label}{children}
        </span>
