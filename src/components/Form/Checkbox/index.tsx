import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import css from "css"
import Span from "components/Span"
import {prefix,form} from "config"
import {Field, IField, } from "../Field"
import InputContainer from "../Field/InputContainer"
import Div from "components/Div"
import FieldError from "../FieldError"
import Theme from "components/Theme"

export interface Props extends IField {
    checked?: boolean
    halfway?: boolean
    dataId?: string | number
}

export class Checkbox extends React.Component<Props, {}> {
    protected readonly name = prefix + "input-checkbox"

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.value !== nextProps.value ||
            this.props.error !== nextProps.error ||
            this.props.checked !== nextProps.checked
        ) {
            return true
        }
        return false
    }

    handleChange = (evt) => {
        const value = evt.target ? evt.target.checked : evt
        if(this.props.setValue) {
            this.props.setValue(value ? 1 : 0)
        }
        if(this.props.onChange) {
            this.props.onChange(value ? 1 : 0)
        }
    }

    protected renderLabel() {
        const { label, dataId, value, checked, setValue, ...props } = this.props
        return <>
                <Label>
                    <Div className="m-element-wrapper" lineHeight={"16px"} position="relative" display="inline-block" verticalAlign="middle">
                        <Input
                            className={`m-item`}
                            {...props}
                            data-id={dataId}
                            data-name={name}
                            onChange={this.handleChange}
                            checked={checked !== undefined ? checked : !!value}
                            type="checkbox"
                            style={{display: "none !important"}}
                            />
                        <StyledInput className={"muk-checkbox-input"} label={label} />
                        <IconCheck className="m-check" size={14} />
                    </Div>
                    <Span className={`m-label-wrapper`} fontSize={"16px"} fontWeight={"normal"}>
                        {label && " " }{label}
                    </Span>
                </Label>
                <FieldError error={this.props.error} className={`${form}__validation`} style={{marginTop: "-1px"}} />
            </>

    }

    renderError = () => <FieldError error={this.props.error} className={`${form}__validation`} />

    public render() {
        return <Field className={`muk-checkbox`} {...this.props} invalid={false} error={null} label={this.renderLabel()} />
    }
}

const Label = css("div")({
    cursor: "pointer",
    "&:hover .muk-checkbox-input": {
        borderColor: Theme.blue,
    },
})

const styles = {
    ":checked + .muk-checkbox-input + .muk-icon--check": {
        display: "inline-block",
        verticalAlign: "middle",
        height: "18px",
    },
    ":checked + .muk-checkbox-input": {
        borderColor: `${Theme.blue}`,
        background: `${Theme.blue}`,
    },
}


const Input = css("input")(styles)

export const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    transition: "border-color 0.2s",
    "& + .muk-icon--check": {
        display: "none",
        position: "absolute",
        left: "2px",
        top: "0px",
    },
    "& + .muk-icon--check path": {
        fill: "white !important",
    },
    borderRadius: `${Theme.radius}`,
    border: `1px solid ${Theme.decoration}`,
    ":hover": {
        borderColor: `${Theme.blue}`,
    },
}, (props: any) => ({
    marginRight: props.label ? "5px" : "0px",
}))

export default InputContainer(Checkbox)
