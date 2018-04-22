import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import css from "@reglendo/cxs/component"
import {Span} from "../../../components/Layout/Span"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {Input as LightInput} from "light-form/dist/es"
import {Div} from "../../Layout/Div"
import PropTypes from "prop-types"

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
        const { input, labels,...props } = this.props
        const label = this.props.label ? this.props.label : labels.main
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)
        const Element = props.name ? StyledLightInput : Input
        return <Label  className={`${isInvalid ? `m-invalid` : ""}`}>
                    <Div className="m-element-wrapper" position="relative" display="inline-block" verticalAlign="middle">
                        <Element
                            className={`m-item`}
                            {...props}
                            {...(!props.name && { checked: input.value })}
                            {...(!props.name && input)}
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
        return <StyledField {...this.props} s={{ marginBottom: 0, padding: 0, ...this.props.style }}
                label={this.renderLabel()} />
    }
}

const Label = css("div")({
    cursor: "pointer",
}, (props: any) => {
    const theme: any = props.theme
    return {
        ":hover .muk-checkbox-input": {
            borderColor: theme.blue,
        },
    }
})

const StyledField = css(Field)({
    "> .m-invalid": {
        border: "none !important",
    },

}, props => ({
    ...props.s,
}))

const styles = {
    ":checked + .muk-checkbox-input + .m--check": {
        display: "inline-block",
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
const StyledLightInput = css(LightInput)(styles , stylesProps)

const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    transition: "border-color 0.2s",
    " + .m--check": {
        display: "none",
        position: "absolute",
        left: "2px",
        top: "0px",
    },
    " + .m--check path": {
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
    label: PropTypes.string,
    group: PropTypes.string,
    meta: PropTypes.string,
    s: PropTypes.string,
}
Input.propTypes = StyledInput.propTypes
StyledLightInput.propTypes = StyledInput.propTypes

export default Checkbox
