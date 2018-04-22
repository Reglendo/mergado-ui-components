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

export const Href: React.SFC<IHrefProps> = ({icon, label, link, name, title, style,
                                            meta, labels, group,
                                             className, children, ...props}) =>
        <a 
            className={`muk-button ${className ? className : ""}`}
            {...props}
            href={link}
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

export const Button: React.SFC<IButtonProps> = ({name, icon, label, title, className, style,
                                                 labels,group,meta,
                                                 input, children, ...props}) => {
    return (
        <button 
            {...input}
            {...props}
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

export const Submit: React.SFC<ISubmitProps> = ({name, label, title, className, style,
                                                input, children, group, meta, labels, ...props}) =>
        <input 
            className={`muk-button ${className ? className : ""}`}
            type="submit"
            {...input}
            {...props}
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
export const Void: React.SFC<IVoidProps> = ({name, icon, label, title, className, style,
                                            labels,group,meta,
                                             children, ...props}) =>
        <span
            className={`muk-button ${className ? className : ""}`}
            {...props}
            title={title}>
                {icon}{icon && " "}{label}{children}
        </span>
