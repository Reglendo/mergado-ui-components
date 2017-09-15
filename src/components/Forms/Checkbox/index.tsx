import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import IconMinus from "@reglendo/mergado-ui-icons/lib/icons/IconMinus"
import glamorous from "glamorous"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"

export interface Props extends IFieldProps {
    halfway?: boolean
}

class Checkbox extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-checkbox"

    public static defaultProps: Props = {
        ...defaultFieldProps,
        halfway: false,
    }

    protected renderLabel() {
        const { input, labels } = this.props
        const label = this.props.label ? this.props.label : labels.main
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)

        return <glamorous.Div className={`${isInvalid ? `${form}__group--invalid` : ""}`}>
                    <div style={{ position: "relative", display: "inline-block", verticalAlign: "middle" }}>
                        <Input
                            checked={input.value}
                            {...input}
                            type="checkbox"
                            className={`${this.name}__item ${input.className}`}
                            style={{display: "none"}}
                            />
                        <StyledInput label={label}
                            />
                        <IconCheck size={14} style={{position: "absolute"}} />
                    </div>
                    {label && " " }{label}
                </glamorous.Div>
    }

    public render() {
        return <StyledField {...this.props} style={{ margin: 0, padding: 0, ...this.props.style }} label={this.renderLabel()} />
    }

}

const StyledField = glamorous(Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
})

const Input = glamorous.input({
    ":checked + span + span.muk-icon--check": {
        display: "inline-block",
    },
}, (props: any) => { return {
    ":checked + span": {
        borderColor: `${props.theme.blue}`,
        background: `${props.theme.blue}`,
    },
}})

const StyledInput = glamorous.span({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "top !important",
    transition: "border-color 0.2s",
    "& + span.muk-icon--check": {
        display: "none",
        position: "absolute",
        left: "2px",
        top: "2px",
    },
    "& + span.muk-icon--check path": {
        fill: "white !important",
    },

}, (props: any) => { return {
    marginRight: props.label ? "5px" : "0px",
    borderRadius: `${props.theme.radius}`,
    border: `1px solid ${props.theme.decoration}`,
    ":hover": {
        borderColor: `${props.theme.blue}`,
    },
}})

export default Checkbox
