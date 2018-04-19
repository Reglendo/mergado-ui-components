import * as React from "react"
import cxs from "@reglendo/cxs/component"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {UniversalButton} from "./button"

export interface Props extends IFieldProps {
    type?: "button" | "submit" | "void" | "href"
    link?: string
    to?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor" | "yellow" | "orange" | "transparent" | "decoration"
    size?: "small" | "tiny" | ""
    disabled?: boolean
    onClick?: (evt: any) => any
    secondary?: boolean
    keepColors?: boolean
}

export class Button extends React.Component<Props, {}> {
    protected readonly name = prefix + "button";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        type: "button",
        icon: null,
        color: "blue",
        disabled: false,
        size: "",
        secondary: false,
    }

    public render() {
        const { meta, input, labels, group } = this.props
        const { children, ...props } = this.props
        if(props.type !== "submit") {
            return <UniversalButton {...this.props} name={this.name} />
        }
        return (
            <StyledField className={`${this.name}--${props.color}
                                        ${!labels.main ? this.name+`--notext`:``}
                                        ${props.size ? this.name+`--`+props.size:``}
                                        ${this.name}--${props.type}
                                        ${props.disabled ? this.name+`--disabled`:``}
                `}
                {...this.props} name={this.name} label="" labels={{...labels,main: ""}}
                s={{ marginBottom: 0, ...group.style }}
                >
                    <UniversalButton {...this.props} name={this.name} />
            </StyledField>
        )
    }
}

const StyledField = cxs(Field)({
    display: "inline-block",
    verticalAlign: "top",
}, props => ({
    ...props.s,
}))

export default Button
