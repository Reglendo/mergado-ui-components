import * as React from "react"
import cxs from "@reglendo/cxs/component"

import {prefix,form} from "../../config"
import {Field, IField} from "../Field"
import { CssUniversalButton } from "./button"

export interface Props extends IField {
    type?: "button" | "submit" | "void" | "href"
    link?: string
    to?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor" | "yellow" | "orange" | "transparent" | "decoration"
    size?: "small" | "smaller" | "tiny" | ""
    disabled?: boolean
    onClick?: (evt: any) => any
    secondary?: boolean
    keepColors?: boolean
}

export class Button extends React.PureComponent<Props, {}> {
    protected readonly name = prefix + "button";

    public static defaultProps: Props = {
        type: "button",
        icon: null,
        color: "blue",
        disabled: false,
        size: "",
        secondary: false,
    }

    public render() {
        const { label, children, style, ...props } = this.props
        if(props.type !== "submit") {
            return <CssUniversalButton {...this.props} s={style} name={this.name} />
        }
        console.log("render button")
        return (
            <CssField className={`m-field  m-${props.color} ${!label ? `m-notext`:``} ${props.size ? `m-${props.size}` : ``} ${this.name}--${props.type} ${props.disabled ? `m-disabled`:``}`}
                {...this.props} name={this.name}
                s={{ marginBottom: 0, ...style }}
                >
                    <CssUniversalButton {...this.props} s={style} name={this.name} />
            </CssField>
        )
    }
}

const CssField = cxs(Field)({
    display: "inline-block",
    verticalAlign: "top",
}, props => ({
    ...props.s,
}))

export default Button
