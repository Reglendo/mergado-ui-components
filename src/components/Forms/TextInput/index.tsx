import * as React from "react"
import * as ReactDOM from "react-dom"
import glamorous from "glamorous"
import IconEye from "@reglendo/mergado-ui-icons/lib/icons/IconEye"
import IconClose from "@reglendo/mergado-ui-icons/lib/icons/IconClose"

import IconEyeSlash from "@reglendo/mergado-ui-icons/lib/icons/IconEyeSlash"
import * as Color from "color"

import {prefix,form} from "../../../config"
import uniqueId from "../../../helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import Button from "../../../components/Forms/Button"

export interface Props extends IFieldProps {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file"
}

interface State {
    passwordVisible: boolean
}


class TextInput extends React.Component<Props, State> {
    protected _inputRef = null
    protected readonly name = prefix + "input-text"
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
        const { type, meta, input } = this.props
        const {children, ...props} = this.props
        const inputProps: any = this.props.input
        if(type === "file") {
            delete inputProps.value
        }
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        return (
            <Field {...props} name={this.name}>
                <glamorous.Div position="relative">
                <StyledInput
                    {...props}
                    {...inputProps}
                    placeholder={this.props.labels.placeholder}
                    ref={"input"}
                    innerRef={r => (this._inputRef = r)}
                    type={type === "search" || (type === "password" && this.state.passwordVisible) ? "text" : props.type}
                    aria-invalid={isInvalid ? 1 : 0}
                    className={`${this.name}__input \
                                ${form}__input--text \
                                ${form}__input--${type} \
                                ${inputProps.className} \
                                `}
                />
                {type === "password" && this.state.passwordVisible === false &&
                    <ButtonEye icon={<IconEye />} color="nocolor" size="tiny"
                            onClick={() => this.setState({ passwordVisible: true })} />
                }
                {type === "password" && this.state.passwordVisible === true &&
                    <ButtonEye icon={<IconEyeSlash />} color="nocolor" size="tiny"
                               onClick={() => this.setState({ passwordVisible: false })} />
                }{type === "search" &&
                    <ButtonClose icon={<IconClose />} color={"nocolor"} size="tiny"
                                 onClick={() => {
                                            this._inputRef.value = "";
                                            inputProps.value = '';
                                            this.props.change ? this.props.change(inputProps.name, "") : true;
                                 }}
                    />
                }
                </glamorous.Div>
            </Field>
        )
    }
}


export const StyledInput = glamorous.input({
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "#fff",

    display: "block",
    textAlign: "left",
    outline: "none",
    padding: "0 10px",
    color: "#333",
    height: "40px",
    lineHeight: "40px",

    transition: "border-color 0.2s",
    willChange: "border-color",

},(props: any) => {
    const styles = []
    const theme = props.theme
    if(props.type === "file"){
        styles.push({
            lineHeight: "initial",
            padding: "8px",
            height: "auto",
        })
    }
    if(props.disabled) {
        styles.push({
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5),
        })
    }
    return [...styles, {

        border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        borderRadius: theme.radius,
        width: props.type === "search" ? "calc(100%)" : "100%",
        ":active,:focus": {
            border: `${theme.input_border_active} !important`,
        }

    }]
})

const ButtonEye = glamorous(Button)({
    right: "5px",
    bottom: "8px",
    position: "absolute",
})

const ButtonClose = glamorous(Button)({
    right: "5px",
    bottom: "8px",
    position: "absolute",
})


export default TextInput
