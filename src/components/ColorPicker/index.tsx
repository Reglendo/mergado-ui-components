import * as React from "react"
import css from "@reglendo/cxs/component"
import debounce from "lodash/debounce"

import {prefix} from "../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../components/Field"
import TextInput from "../TextInput"
import { SketchPicker as InputColor } from 'react-color';

export interface Color {
    r: number
    g: number
    b: number
    a: number
}

export interface Props extends IFieldProps {
}

export interface State {
    displayColorPicker: boolean
    color: any
}

class ColorPicker extends React.PureComponent<Props, State> {

    protected readonly name = prefix + "colorpicker"

    public static defaultProps: Props = {
        ...defaultFieldProps,
    }

    constructor(props) {
        super(props)
        const color = (typeof props.value == 'string' || props.value instanceof String)
                            ? {hex: props.value}
                            : {hex : `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`}
        this.state = {
            displayColorPicker: false,
            color,
        }

    }
    handleClick = () => this.setState({ displayColorPicker: !this.state.displayColorPicker })

    handleClose = () => this.setState({ displayColorPicker: false })

    handleChanged = (evt) => {
        this.setState({color: evt})
        return this.props.input.onChange(evt.hex)
    }

    public render() {
        const { color, displayColorPicker } = this.state
        const { input, meta } = this.props
        const { children, ...props} = this.props
        const background = `${color.hex}`
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        return(
            <StyledField {...props} name={this.name} aria-invalid={isInvalid ? 1 : 0}>
                    <div onClick={this.handleClick}>
                        <TextInput {...props}
                            value={background}
                            {...(!props.name && input)}
                            label={null}
                            style={{" .m-textinput-input": {background: background, color: color.hsl && color.hsl.l > 0.45 ? "#333" : "#fff"}}} />
                    </div>
                    {displayColorPicker &&
                    <Popover>
                            <Cover onClick={ this.handleClose } />
                            <InputColor
                                color={background}
                                onChangeComplete={this.handleChanged}
                            />
                    </Popover>
                    }
            </StyledField>
        )
    }
}

const StyledField = css(Field)({
    display: "inline-block",
    width: "100%",
    " .muk-form__group--invalid": {
        fontSize: "0",
    },
    " .m-input-color": {
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "40px",
        padding: "5px",
        backgroundColor: "#ffffff",
        userSelect: "none",
        transition: "border-color 0.2s",
        willChange: "border-color",
    },
}, props => {
    const theme: any = props.theme
    return {
        " .m-input-color": {
            borderRadius: theme.radius,
            borderColor: theme.decoration,
            border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        },
        " .m-input-color:focus": {
            border: `${theme.input_border_active} !important`,
        },
        " .m-input-color:active": {
            border: `${theme.input_border_active} !important`,
        },
        " .muk-form__group--invalid .muk-colorpicker__colorbox": {
            borderColor: `${theme.red} !important`,
        },
    }
})

const Popover = css("div")({
    position: "absolute",
    zIndex: 200,
})

const Cover = css("div")({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
})

export default ColorPicker
