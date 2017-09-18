import * as React from "react"
import ChromePicker from "react-color/lib/components/chrome/Chrome"
import * as InputColor from "react-input-color"
import glamorous from "glamorous"
import debounce from "lodash/debounce"
import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"

export interface Color {
    r: number
    g: number
    b: number
    a: number
}

export interface Props extends IFieldProps {
    color?: string | Color
}

export interface State {
    displayColorPicker: boolean
    color: string
}

class ColorPicker extends React.Component<Props, State> {

    protected readonly name = prefix + "colorpicker"

    public static defaultProps: Props = {
        ...defaultFieldProps,
        color: "#000000",
    }

    constructor(props) {
        super(props)
        const color = (typeof props.color == 'string' || props.color instanceof String)
                            ? props.color
                            : `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`
        this.state = {
            displayColorPicker: false,
            color,
        }

        this.handleChanged = debounce(this.handleChanged.bind(this),200)
    }


    protected handleChanged(evt) {
        this.setState({color: evt})
        return this.props.input.onChange(evt)
    }

    public render() {
        const { color } = this.state
        const { input, meta } = this.props
        const { children, ...props} = this.props
        const background = `${color}`
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        return(
            <StyledField {...props} name={this.name} aria-invalid={isInvalid ? 1 : 0}>
                <input {...input} type="hidden" value={background} />
                <InputColor
                    value={color}
                    defaultValue="#345678"
                    onChange={this.handleChanged}
                />
            </StyledField>
        )
    }
}

const StyledField = glamorous(Field)({
    display: "inline-block",
    width: "100%",
    "& .muk-form__group--invalid": {
        fontSize: "0",
    },
    "& .m-input-color": {
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "40px",
        padding: "5px",
        backgroundColor: "#ffffff",
        userSelect: "none",
        transition: "border-color 0.2s",
        willChange: "border-color",
    }


}, props => {
    const theme: any = props.theme
    return {
        "& .m-input-color": {
            borderRadius: theme.radius,
            borderColor: theme.decoration,
            border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
            ":active,:focus": {
                border: `${theme.input_border_active} !important`,
            }
        },
        "& .muk-form__group--invalid .muk-colorpicker__colorbox": {
            borderColor: `${theme.red} !important`,
        }
    }
})

const ColorBox = glamorous.div({
    cursor: "pointer",
    background: "white",
    padding: "5px",
}, props => {
    const theme: any = props.theme
    return {
        border: `1px solid ${theme.decoration}`,
        borderRadius: theme.radius,
    }
})

const Popover = glamorous.div({
    position: "absolute",
    zIndex: 200,
})

const Cover = glamorous.div({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
})

export default ColorPicker
