import * as React from "react"
import css from "@reglendo/cxs/component"
import Div from "../Div"
import * as Color from "color"

import IconEye from "@reglendo/mergado-ui-icons/lib/icons/IconEye"
import IconClose from "@reglendo/mergado-ui-icons/lib/icons/IconClose"
import IconEyeSlash from "@reglendo/mergado-ui-icons/lib/icons/IconEyeSlash"
import {Input} from "@reglendo/light-form/dist/es"
import PropTypes from "prop-types"
import {prefix,form} from "../../config"
import {Field, IFieldProps, defaultFieldProps} from "../Field"
import Button from "../Button"

export interface Props extends IFieldProps {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file" | "time"
    onClear?: Function
    change?: Function
}

interface State {
    passwordVisible: boolean
}

class TextInput extends React.PureComponent<Props, State> {
    protected _inputRef = null
    protected readonly name = prefix + "textinput"
    public static defaultProps: Props = {
        ...defaultFieldProps,
        type: "text",
    }

    public constructor(props) {
        super(props)

        this.state = {
            passwordVisible: false,
        }
    }

    public render() {
        const { type, meta, input, ...p } = this.props
        const {children, style, className, ...props} = this.props
        const inputProps: any = this.props.input
        if(type === "file") {
            delete inputProps.value
        }
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        const Element = props.name ? CssLightInput : CssInput
        const elProps = {...props}
        delete elProps.input
        delete elProps.meta
        delete elProps.group
        delete elProps.labels
        return (
            <Field {...props} className={`${this.name} ${className || ""}`} s={style} name={props.name}>
                <Div className="m-textinput-wrapper" position="relative">
                <Element
                    {...(!props.name && inputProps)}
                    {...elProps}
                    value={elProps.value || ''}
                    placeholder={this.props.labels.placeholder || this.props.placeholder}
                    ref={"input"}
                    type={type === "search" || (type === "password" && this.state.passwordVisible)
                                                ? "text" : props.type}
                    aria-invalid={isInvalid ? 1 : 0}
                    className={`m-textinput-input m-textinput-${type}`}
                />
                {type === "password" && this.state.passwordVisible === false &&
                    <CssButtonEye className="m-openedeye" icon={<IconEye />}
                            type={"void"}  color="nocolor" size="tiny"
                            onClick={() => this.setState({ passwordVisible: true })} />
                }
                {type === "password" && this.state.passwordVisible === true &&
                    <CssButtonEye className="m-closedeye" icon={<IconEyeSlash />}
                            type={"void"}  color="nocolor" size="tiny"
                            onClick={() => this.setState({ passwordVisible: false })} />
                }{type === "search" &&
                    <CssButtonClose className="m-clear" icon={<IconClose />}
                                type={"void"} color={"nocolor"} size="tiny"
                                onClick={() => {
                                            const input: any = this.refs.input
                                            this.props.onClear && this.props.onClear()
                                            if(input && input.getDOMNode !== undefined ) {
                                                input.getDOMNode().value = ""
                                            }
                                            inputProps.value = ""
                                            this.props.change ? this.props.change(inputProps.name, "") : true

                                 }}
                    />
                }
                </Div>
            </Field>
        )
    }
}

export const styles = {
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    display: "block",
    textAlign: "left",
    outline: "none",
    padding: "0 10px",
    color: "#333",
    lineHeight: "40px",
    transition: "border-color 0.2s",
    willChange: "border-color",
    width: "100%",
}

export const stylesProps = (props) => {

    const theme = props.theme
    let type = {}
    if(props.type === "file" || props.type === "time") {
        type = {
            lineHeight: "initial",
            padding: "8px !important",
            height: "auto",
        }
    }
    let disabled = {}
    if(props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
        }
    }
    return {
        ...disabled,
        height: props.height ? props.height + "px" : "40px",
        border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        borderRadius: theme.radius,
        ...type,
        "&:active": {
            border: `${theme.input_border_active} !important`,
        },
        "&:focus": {
            border: `${theme.input_border_active} !important`,
        },
    }
}

const CssInput = css("input")(styles,stylesProps)
const CssLightInput = css(Input)(styles,stylesProps)

const CssButtonEye = css(Button)({
    right: "5px",
    bottom: "8px",
    position: "absolute",
})

const CssButtonClose = css(Button)({
    right: "5px",
    bottom: "8px",
    position: "absolute",
})

CssButtonClose.propTypes = {
    onClear: PropTypes.any,
}

CssInput.propTypes = {
    onClear: PropTypes.any,
    setValue: PropTypes.any,
}

export default TextInput
