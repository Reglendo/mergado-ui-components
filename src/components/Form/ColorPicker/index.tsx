import * as React from "react"
import css from "../../../css"
import InputContainer from "../Field/InputContainer"
import {Field, IField,} from "../Field"
import TextInput from "../TextInput"
import { SketchPicker as InputColor } from "react-color"
import Color from "color"
import Theme from "../../Theme"

interface Props extends IField {
}

interface State {
    displayColorPicker: boolean
}

export class ColorPicker extends React.Component<Props, State> {

    protected readonly name = "muk-colorpicker"

    constructor(props) {
        super(props)
        this.state = {
            displayColorPicker: false,
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.value !== nextProps.value ||
            this.props.error !== nextProps.error ||
            this.state.displayColorPicker !== nextState.displayColorPicker
        ) {
            return true
        }
        return false
    }

    handleClick = () => this.setState({ displayColorPicker: !this.state.displayColorPicker })

    handleClose = () => this.setState({ displayColorPicker: false })

    handleChange = (evt) => {
        const value = evt.target ? evt.target.value : evt.hex
        // if(value.length === 7 && value[0] === "#") {
        //     this.setState({color: Color(value)})
        // }
        if(this.props.setValue) {
            this.props.setValue(value)
        }
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }

    public render() {
        const { displayColorPicker } = this.state
        const { label, name, error, invalid, ...props} = this.props
        const background = this.props.value || "#ffffff"
        let textColor = "#333"
        try {
            textColor = Color(background).contrast(Color('#fff')) > 2.2 ? "#ffffff" : "#333"
        } catch(e) {
        }
        return(
            <StyledField {...props} name={this.name}>
                    <div onClick={this.handleClick}>
                        <TextInput {...props}
                            label={label}
                            error={error}
                            invalid={invalid}
                            data-name={name}
                            onChange={this.handleChange}
                            style={{" .m-textinput-input": {background: background, color: textColor }}} />
                    </div>
                    {displayColorPicker &&
                    <Popover>
                            <Cover onClick={ this.handleClose } />
                            <InputColor
                                color={background}
                                onChangeComplete={this.handleChange}
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
    " .m-input-color:focus": {
        border: `${Theme.input_border_active} !important`,
    },
    " .m-input-color:active": {
        border: `${Theme.input_border_active} !important`,
    },
    " .muk-form__group--invalid .muk-colorpicker__colorbox": {
        borderColor: `${Theme.red} !important`,
    },
}, props => {
    return {
        " .m-input-color": {
            borderRadius: Theme.radius,
            borderColor: Theme.decoration,
            border: props["aria-invalid"] ? Theme.input_border_error : Theme.input_border,
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


export default InputContainer(ColorPicker)
