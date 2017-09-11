import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import glamorous from "glamorous"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"

export interface Props extends IFieldProps {
}

class Checkbox extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-checkbox"

    public static defaultProps: Props = {
        ...defaultFieldProps,
    }

    protected renderLabel() {
        const { input, labels } = this.props
        const label = this.props.label ? this.props.label : labels.main
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)

        return <glamorous.Div className={`${isInvalid ? `${form}__group--invalid` : ""}`}>
                    <div style={{ position: "relative", display: "inline-block", verticalAlign: "middle" }}>
                        <StyledInput
                            checked={input.value}
                            {...input}
                            type="checkbox"
                            className={`${this.name}__item ${input.className}`}
                            />
                        <IconCheck size={14} style={{position: "absolute"}} />
                    </div>
                    {label && " " }{label}
                </glamorous.Div>
    }

    public render() {
        return <StyledField {...this.props} name={this.name} label={this.renderLabel()} />
    }

}

const StyledField = glamorous(Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
})

const StyledInput = glamorous.input({
    marginRight: "5px",
    appearance: "none",
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
    ":checked + span.muk-icon--check": {
        display: "inline-block",
    },
}, (props: any) => { return {
    borderRadius: `${props.theme.radius}`,
    border: `1px solid ${props.theme.decoration}`,
    ":checked": {
        borderColor: `${props.theme.blue}`,
        background: `${props.theme.blue}`,
    },
    ":hover": {
        borderColor: `${props.theme.blue}`,
    },
}})

export default Checkbox
