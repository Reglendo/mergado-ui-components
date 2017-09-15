import * as React from "react"
import ChromePicker from "react-color/lib/components/chrome/Chrome"
import * as InputColor from "react-input-color"
import glamorous from "glamorous"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"

export interface Color {
    r: number
    g: number
    b: number
    a: number
}

export interface Props extends IFieldProps {
    color?: Color
    hex?: string
}

export interface State {
    displayColorPicker: boolean
    color: Color
}

class ColorPicker extends React.Component<Props, State> {

    protected readonly name = prefix + "colorpicker"

    public static defaultProps: Props = {
        ...defaultFieldProps,
        color: { r: 0, g: 0, b: 0, a: 1 },
    }

    constructor(props) {
        super(props)
        this.state = {
            displayColorPicker: false,
            color: props.color,
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    protected handleClick(evt) {
        evt.preventDefault()
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    }

    protected handleClose(evt) {
        evt.preventDefault()
        this.setState({displayColorPicker: false})
    }

    protected handleChange(evt) {
        return false
    }

    protected handleChanged(evt) {
        this.setState({color: evt.rgb})
        return this.props.input.onChange(evt.rgb)
    }

    protected renderPicker() {

        return (
            <Popover className={`${this.name}__popover`}>
                <Cover className={`${this.name}__cover`} onClick={ this.handleClose }/>
            </Popover>
        )
    }

    public render() {
        const { color } = this.state
        const { input, meta } = this.props
        const { children, ...props} = this.props
        const background = `rgba(${color.r},${color.g},${color.b},${color.a})`

        return(
            <StyledField {...props} name={this.name}>
                <input {...input} type="hidden" value={background} />
                <InputColor
                  value={"#000000"}
                  defaultValue="#345678"
                  onChange={this.handleChange.bind(this)} // change state.color in handleChange
                />
            </StyledField>
        )
    }

}

const StyledField = glamorous(Field)({
    display: "inline-block",
    width: "100%",
    "& .m-input-color": {
      position: "relative",
      display: "inline-block",
      width: "49px",
      height: "24px",
      padding: "4px",
      paddingRight: "15px",
      backgroundColor: "#ffffff",
      border: "1px solid #bebebe",
      borderRadius: "3px",
      userSelect: "none",
    }


}, props => {
    const theme: any = props.theme
    return {
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
