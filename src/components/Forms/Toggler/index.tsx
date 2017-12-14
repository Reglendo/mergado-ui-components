import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import css from "cxs/component"
import {Span} from "../../../components/Layout"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {Input as LightInput} from "light-form/dist/es"

export interface Props extends IFieldProps {
    offLabel: string | JSX.Element
    reverse?: boolean
}

class Toggler extends React.Component<Props, {}> {
    protected readonly name = prefix + "input-toggler"

    public static defaultProps: Props = {
        ...defaultFieldProps,
        offLabel: "",
        reverse: false,
    }

    protected renderLabel() {
        const { input, labels, reverse, ...props } = this.props
        const label = this.props.label ? this.props.label : labels.main
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)
        const Element = props.name ? StyledLightInput : Input

        const offLabel = <Span fontSize={"16px"}>
                            {props.offLabel}{props.offLabel && " "}
                        </Span>

        const onLabel = <Span fontSize={"16px"}>
                            {label && " " }{label}
                        </Span>

        return <Label  className={`${isInvalid ? `${form}__group--invalid` : ""}`}>
                    {reverse ? onLabel : offLabel}
                    <div style={{ position: "relative", display: "inline-block", verticalAlign: "middle" }}>
                        <Element
                            {...props}
                            {...(!props.name && { checked: input.value })}
                            {...(!props.name && input)}
                            reverse={reverse}
                            type="checkbox"
                            className={`${this.name}__item ${input.className}`}
                            style={{display: "none"}}
                            />
                        <StyledInput reverse={reverse} label={label} className={"muk-checkbox-input"}
                            />
                        <Point className={"toggler-point"} reverse={reverse} />
                    </div>
                    {reverse ? offLabel : onLabel}
                </Label>
    }

    public render() {
        return <StyledField {...this.props} style={{ margin: 0, padding: 0, ...this.props.style }}
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
    "> .muk-form__group--invalid": {
        border: "none !important",
    },

    " svg": {
        // verticalAlign: "initial",
    },
})

const Point = css("span")({
    display: "inline-block",
    width: "14px",
    height: "14px",
    borderRadius: "999em",
    background: "white",
    position: "absolute",
    left: "11px",
    top: "2px",
    transition: "transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)",
    willChange: "transform",
},props => ({
    transform: props.reverse ? "translate3d(20px,0,0)" : "translate3d(0,0,0)",
}))

const styles = {
}

const stylesProps =  (props) => {

    return {
        ":checked + span + span.toggler-point": {
            transform: props.reverse ? "translate3d(0,0,0)" : "translate3d(20px,0,0)",
        },
        " + span": {
            borderColor: `${props.theme.inactive}`,
            background: `${props.theme.inactive}`,
            transition: "border-color 0.2s, background-color 0.2s",
            willChange: "background-color",
        },
        ":checked + span": {
            borderColor: `${props.theme.green}`,
            background: `${props.theme.green}`,
        },
    }
}

const Input = css("input")(styles , stylesProps)
const StyledLightInput = css(LightInput)(styles , stylesProps)

const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    width: "36px",
    height: "18px",
    position: "relative",
    transition: "border-color 0.1s",

}, (props: any) => { return {
    marginRight: props.label ? "10px" : "0px",
    marginLeft: props.label ? "10px" : "0px",
    borderRadius: `999em`,
    border: `1px solid ${props.theme.decoration}`,
    ":hover": {
        borderColor: `${props.theme.blue}`,
    },
}})

export default Toggler
