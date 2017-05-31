import * as React from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"
import ChromePicker from "react-color/lib/components/chrome/Chrome"
import {Input, InputLabel, InputError} from "components/Forms/Input"

export interface Props extends InputProps {
    disabled?: boolean
    required?: boolean
    style?: any
    addClass?: string
    color?: any
    labels?: {
        main?: string | JSX.Element,
        invalid?: string | JSX.Element,
        title?: string,
    }
}

export interface State {
    displayColorPicker: boolean
    color: any
}

class ColorPicker extends React.Component<Props, State> {

    private readonly name = prefix + "colorpicker";
    private readonly form = prefix + "form";

    public static defaultProps: Props = {
        disabled: false,
        required: false,
        style: null,
        addClass: "",
        color: { r: 0, g: 0, b: 0, a: 1 },
        input: {
            checked: false,
            name: "",
            onBlur: (value) => {
            },
            onChange: (value) => {
            },
            onDragStart: (value) => {
            },
            onDrop: (value) => {
            },
            onFocus: (value) => {
            },
            value: "",
        },
        meta: {
            active: false,
            asyncValidating: false,
            autofilled: false,
            dirty: false,
            dispatch: Function,
            error: "",
            form: "",
            invalid: false,
            pristine: true,
            submitting: false,
            submitFailed: false,
            touched: false,
            valid: true,
            visited: false,
            warning: "",
        },
        labels: {
            main: null,
            invalid: "Invalid input",
            title: "",
        },
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
        return this.props.input.onChange(evt)
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

    protected renderItem() {
        const { color } = this.state
        const { input } = this.props

        const background = typeof color === "string"
                            ? "#" + color.substring(0, 6)
                            : `rgba(${color.r},${color.g},${color.b},${color.a})`
        const inputId = `${this.props.meta.form}-${input.name}`

        return(
            <div className={`${this.name}__picker ${this.form}__input`}>
                <input id={inputId} type="hidden" name={input.name} value={background} />
                <div className={`${this.name}__colorbox`}
                     style={{ background }} onClick={ this.handleClick } />
                {this.state.displayColorPicker && this.renderPicker()}
            </div>
        )
    }

    public render() {
        const { disabled, required, addClass, style, labels, meta } = this.props
        const props: any = this.props
        return (
            <Input name={this.name} {...props}>
                <InputError {...props} />
                <InputLabel name={this.name}>{labels.main}</InputLabel>
                {this.renderItem()}
            </Input>
        )
    }
}

export default ColorPicker
