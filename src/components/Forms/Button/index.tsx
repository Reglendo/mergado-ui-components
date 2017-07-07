import * as React from "react"
import {prefix,form} from "config"
import {Link} from "react-router"
import domOnlyProps from "helpers/dom-only-props"
import {Field, IFieldProps, defaultFieldProps} from "components/Forms/Field"
import {UniversalButton} from "./types"
import styled from "styled-components"

export interface Props extends IFieldProps {
    type?: "button" | "link" | "submit" | "void" | "href"
    link?: string
    to?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor"
    size?: "small" | "tiny" | ""
    disabled?: boolean
    onClick?: (evt: any) => any
}

const StyledField = styled(Field)`
    display: inline-block;
    vertical-align: top;
`

class Button extends React.Component<Props, {}> {
    protected readonly name = prefix + "button";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        type: "href",
        icon: null,
        color: "blue",
        disabled: false,
        size: "",
    }

    public render() {
        const { meta, input, labels, group, ...props } = this.props
        return (
            <StyledField label="" className={`${this.name}--${props.color}
                                        ${!labels.main ? this.name+`--notext`:``}
                                        ${props.size ? this.name+`--`+props.size:``}
                                        ${this.name}--${props.type}
                                        ${props.disabled ? this.name+`--disabled`:``}
                `}>
                    <UniversalButton {...this.props} name={this.name} />
            </StyledField>
        )
    }
}

export default Button
