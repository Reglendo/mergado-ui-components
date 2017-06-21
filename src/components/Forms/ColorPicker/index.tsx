import * as React from "react"
import {prefix} from "config"
import ChromePicker from "react-color/lib/components/chrome/Chrome"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Color {
    r: number,
    g: number,
    b: number,
    a: number,
}

export interface Props extends MUK.Props {
    color?: Color
    hex?: string
}

export interface State {
    displayColorPicker: boolean
    color: Color
}

class ColorPicker extends MUK.InputComponent<Props, State> {

    public readonly props: Props
    public state: State
    protected readonly name = prefix + "colorpicker"

    public static defaultProps: Props = {
        ...MUK.defaultProps,
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
            <div className={`${this.name}__popover`}>
                <div className={`${this.name}__cover`} onClick={ this.handleClose }/>
                <ChromePicker
                    color={this.state.color}
                    onChange={this.handleChange.bind(this)}
                    onChangeComplete={this.handleChanged.bind(this)}
                />
            </div>
        )
    }

    protected renderInput(className, props) {
        const { color } = this.state
        const { input, meta } = this.props

        const background = `rgba(${color.r},${color.g},${color.b},${color.a})`

        return(
            <div className={`${this.name}__picker ${this.form}__input ${className}`}>
                <input  {...input}
                        type="hidden"
                        value={background} />
                <div className={`${this.name}__colorbox`}
                     style={{ background }} onClick={ this.handleClick } />
                {this.state.displayColorPicker && this.renderPicker()}
            </div>
        )
    }

}

export default ColorPicker
