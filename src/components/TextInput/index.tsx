import * as React from "react"
import css from "@reglendo/cxs/component"
import Div from "../Div"
import * as Color from "color"

import IconEye from "@reglendo/mergado-ui-icons/lib/icons/IconEye"
import IconEyeSlash from "@reglendo/mergado-ui-icons/lib/icons/IconEyeSlash"
import PropTypes from "prop-types"
import {prefix,form} from "../../config"
import {Field, IField} from "../Field"
import Button from "../Button"
import InputContainer from "../Field/InputContainer"

export interface Props extends IField {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file" | "time"
    min?: number | string
    max?: number | string
    step?: number | string
}

interface State {
    passwordVisible: boolean
}

export class TextInput extends React.Component<Props, State> {

    protected readonly name = prefix + "textinput"

    state = {
        passwordVisible: false,
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.value !== nextProps.value ||
            this.props.error !== nextProps.error ||
            this.state.passwordVisible !== nextState.passwordVisible) {
            return true
        }
        return false
    }


    handleChange = (evt) => {
        if(this.props.setValue) {
            this.props.setValue(evt.target.value);
        }
        if(this.props.onChange) {
            this.props.onChange(evt.target.value);
        }
    }

    handleClear = () => {
        if(this.props.onClear) {
            this.props.onClear()
        } else
        if(this.props.setValue) {
            this.props.setValue("");
        } else
        if(this.props.onChange) {
            this.props.onChange("");
        }
    }

    showPassword = () => this.setState({ passwordVisible: true })
    hidePassword = () => this.setState({ passwordVisible: false })

    public render() {
        const { value, placeholder, children, style, className, ...props} = this.props
        const type = this.props.type ? this.props.type : "text"
        const isInvalid = props.invalid || props.error
        return (
            <Field {...props} className={`${this.name} ${className || ""}`} style={style} name={props.name}>
                <Div className="m-textinput-wrapper" position="relative">
                <CssInput
                    {...props}
                    value={value || ''}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                    type={type === "search" || (type === "password" && this.state.passwordVisible)
                                                ? "text" : type}
                    aria-invalid={isInvalid ? 1 : 0}
                    className={`m-textinput-input m-textinput-${type}`}
                    data-name={props.name}
                />
                {type === "password" && this.state.passwordVisible === false &&
                    <CssButtonEye className="m-openedeye" icon={<IconEye />}
                            type={"void"}  color="nocolor" size="tiny"
                            onClick={this.showPassword} />
                }
                {type === "password" && this.state.passwordVisible === true &&
                    <CssButtonEye className="m-closedeye" icon={<IconEyeSlash />}
                            type={"void"}  color="nocolor" size="tiny"
                            onClick={this.hidePassword} />
                }{(type === "search" || props.onClear) &&
                    <button className="react-select-item-clear" onClick={this.handleClear} />
                }
                </Div>
            </Field>
        )
    }
}

export const styles = {
    boxSizing: "border-box",
    backgroundColor: "#fff",
    display: "block",
    textAlign: "left",
    outline: "none",
    color: "#333",
    transition: "border-color 0.2s",
    willChange: "border-color",
    width: "100%",
}

export const stylesProps = (props) => {

    const theme = props.theme
    const type = (props.type === "file" || props.type === "time") ? {
            lineHeight: "initial",
            padding: "8px !important",
            height: "auto",
        } : {}

    const disabled = props.disabled ? {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
    } : {}

    const size = props.small ? {
        height: "28px !important",
        lineHeight: "25px !important",
        fontSize: "12px !important",
        padding: "0 8px !important",
    } : {
        height: "40px",
        lineHeight: "40px",
        fontSize: "14px",
        padding: "0 10px",
    }


    return {
        ...disabled,
        ...size,
        border: theme.input_border,
        borderWidth: props['aria-invalid'] ? "0px !important" : "1px",
        borderRadius: theme.radius,
        ...type,
        "&:active": {
            border: `${theme.input_border_active}`,
        },
        "&:focus": {
            border: `${theme.input_border_active}`,
        },
    }
}

const CssInput = css("input")(styles,stylesProps)

const CssButtonEye = css(Button)({
    right: "5px",
    bottom: 0,
    top: 0,
    position: "absolute",
    margin: "auto",
    height: "25px",
})

CssInput.propTypes = {
    onClear: PropTypes.any,
    setValue: PropTypes.any,
    items: PropTypes.any,
    error: PropTypes.any,
    invalid: PropTypes.any,
    small: PropTypes.any,
}

export default InputContainer(TextInput)

