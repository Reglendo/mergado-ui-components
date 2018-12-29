import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import css from "@reglendo/cxs/component"
import Span from "../Span"

import {prefix,form} from "../../config"
import {Field, IField, } from "../Field"
import InputContainer from "../Field/InputContainer"
import Div from "../Div"
import PropTypes from "prop-types"

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
        } else
        if(this.props.onChange) {
            this.props.onChange(value ? 1 : 0)
        }
    }

    protected renderLabel() {
        const { label, dataId, invalid, value, checked, setValue, ...props } = this.props
        const isInvalid = invalid
        return <Label className={`m-label ${isInvalid ? `m-invalid` : ""}`}>
                    <Div className="m-element-wrapper" lineHeight={"16px"} position="relative" display="inline-block" verticalAlign="middle">
                        <Input
                            className={`m-item`}
                            {...props}
                            data-id={dataId}
                            onChange={this.handleChange}
                            checked={checked !== undefined ? checked : !!value}
                            type="checkbox"
                            s={{display: "none !important"}}
                            />
                        <StyledInput className={"muk-checkbox-input"} label={label} />
                        <IconCheck className="m-check" size={14} />
                    </Div>
                    <Span className="m-label-wrapper" fontSize={"16px"} fontWeight={"normal"}>
                    {label && " " }{label}
                    </Span>
                </Label>
    }

    public render() {
        console.log('render checkbox',this.props.name)
        return <Field className={"muk-checkbox"} {...this.props} s={{ marginBottom: 0, padding: 0, ...this.props.style }}
                label={this.renderLabel()} />
    }
}

const Label = css("div")({
    cursor: "pointer",
}, (props: any) => {
    const theme: any = props.theme
    return {
        "&:hover .muk-checkbox-input": {
            borderColor: theme.blue,
        },
    }
})

const styles = {
    ":checked + .muk-checkbox-input + .muk-icon--check": {
        display: "inline-block",
        verticalAlign: "middle",
        height: "18px",
    },
}

const stylesProps =  (props) => {
    return {
        ":checked + .muk-checkbox-input": {
            borderColor: `${props.theme.blue}`,
            background: `${props.theme.blue}`,
        },
        ...props.s,
    }
}

const Input = css("input")(styles , stylesProps)

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

}, (props: any) => { return {
    marginRight: props.label ? "5px" : "0px",
    borderRadius: `${props.theme.radius}`,
    border: `1px solid ${props.theme.decoration}`,
    ":hover": {
        borderColor: `${props.theme.blue}`,
    },
}})

StyledInput.propTypes = {
    label: PropTypes.any,
    group: PropTypes.any,
    meta: PropTypes.any,
    s: PropTypes.any,
}
Input.propTypes = {
    label: PropTypes.any,
    group: PropTypes.any,
    meta: PropTypes.any,
    s: PropTypes.any,
}

export default InputContainer(Checkbox)
