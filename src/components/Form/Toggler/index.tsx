import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import IconClose from "@reglendo/mergado-ui-icons/lib/icons/IconClose"
import css from "../../../css"
import Span from "../../Span"
import Div from "../../Div"
import {Field, IField} from "../Field"
import InputContainer from "../Field/InputContainer"
import FieldLabel from "../FieldLabel"
import FieldError from "../FieldError"
import Theme from "../../Theme"

export interface Props extends IField {
    onLabel: string | JSX.Element
    offLabel: string | JSX.Element
    reverse?: boolean
    boolean?: boolean
    big?: boolean
    width?: number
}

export class Toggler extends React.Component<Props, {}> {
    protected readonly name = "muk-input-toggler"

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.error !== nextProps.error ||
            this.props.value !== nextProps.value
        ) {
            return true
        }
        return false
    }


    public static defaultProps: Props = {
        onLabel: "",
        offLabel: "",
        reverse: false,
    }

    handleChange = (e) => {
        if(this.props.setValue) {
            this.props.setValue(e.target.checked ? 1 : 0)
        }
        if(this.props.onChange) {
            this.props.onChange(e.target.checked ? 1 : 0)
        }
    }

    protected renderLabel() {
        const { setValue, label, reverse, name, ...props } = this.props
        const isInvalid = this.props.invalid || this.props.error

        const offLabel = !props.big && <Span className={"m-offlabel"} fontSize={"16px"} margin="0 3px" verticalAlign="top">
                            {props.offLabel}{props.offLabel && ""}
                        </Span>

        const onLabel = !props.big && <Span className={"m-onlabel"} fontSize={"16px"} margin="0 3px" verticalAlign="top">
                            {props.onLabel}{props.onLabel && ""}
                        </Span>

        return <>
                <Label className={`m-isinvalid ${isInvalid ? `m-invalid` : ""}`}>
                    {!!label && <><FieldLabel>{label}</FieldLabel><br/></>}
                    {reverse ? onLabel : offLabel}
                    <Div className={`m-wrapper`} position="relative" display="inline-block" verticalAlign="middle">
                        <CssElement
                            {...props}
                            onChange={this.handleChange}
                            reverse={reverse}
                            checked={this.props.value}
                            type="checkbox"
                            data-name={name}
                            className={`m-input ${props.className || ""}`}
                            />
                        <StyledInput className={"m-checkbox"} big={props.big} boolean={props.boolean}
                                     width={props.width} reverse={reverse} onLabel={label} offLabel={props.offLabel} label={label}
                            />
                        <Point className={"m-toggler-point"}  big={props.big} boolean={props.boolean} width={props.width} reverse={reverse} />
                        {props.big && props.boolean &&
                            <Yes className={"m-icon-yes"} size={15} color="rgb(245, 236, 213)" />
                        }
                        {props.big && props.boolean &&
                            <No className={"m-icon-no"} size={15} color="#888" />
                        }

                    </Div>
                    {reverse ? offLabel : onLabel}
                </Label>
                <FieldError error={this.props.error} className={`muk-form__validation`} />

            </>
    }

    public render() {
        return <StyledField {...this.props} invalid={false} error={null} style={this.props.style}
                label={this.renderLabel()} />
    }
}


const Yes = css(IconCheck)({
    position: "absolute",
    left: "5px",
    top: "0px",
    bottom: "0px",
    margin: 'auto 0',
    " svg": {
        verticalAlign: "middle"
    }
})

const No = css(IconClose)({
    position: "absolute",
    right: "5px",
    top: "0px",
    bottom: "0px",
    margin: 'auto 0',
    " svg": {
        verticalAlign: "middle"
    }
})

const Label = css("div")({
    cursor: "pointer",
    ":hover .m-checkbox": {
        borderColor: Theme.blue,
    },
})

const StyledField = css(Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
})

const bigHeight = 20
const bigBoolWidth = 45

const Point = css("span")({
    display: "inline-block",
    borderRadius: "999em",
    background: "white",
    position: "absolute",
    left: "2px",
    top: "2px",
    zIndex: 5,
    transition: "all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)",
},props => ({
    width: props.big ? `${bigHeight}px` : "14px",
    height: props.big ? `${bigHeight}px` : "14px",

    transform: props.reverse ? "translate3d("+(props.big ? (props.boolean ? `${bigBoolWidth - bigHeight - 4}px` : (props.width-bigHeight-4) + "px") : "18px")+",0,0)" : "translate3d(0,0,0)",
}))

const styles = {
    display: "none !important",
}

const stylesProps =  (props) => {

    return {
        ":checked + span + .m-toggler-point": {
            transform: props.reverse ? "translate3d(0,0,0)" : "translate3d("+(props.big ? (props.boolean ? `${bigBoolWidth - bigHeight - 4}px` : (props.width-bigHeight-4) + "px") : "18px")+",0,0)",
        },
        " + span": {
            borderColor: `#aaa`,
            background: `${Theme.inactive}`,
            transition: "border-color 0.2s, background-color 0.2s",
            willChange: "background-color",

            ":before" :{
                opacity: 0,
                position: "absolute",
                left: props.reverse ? "initial" : "2px",
                right: props.reverse ?  "2px" : "initial",
            },
            ":after" :{
                opacity: 1,
                position: "absolute",
                right: props.reverseb ? "initial" : "2px",
                left: props.reverse ?  "2px" : "initial",
            },

        },
        ":checked + span": {
            borderColor: `${Theme.green}`,
            background: `${Theme.green}`,
            ":before" :{
                opacity: 1,
            },
            ":after" :{
                opacity: 0,
        },

        },
    }
}

const CssElement = css("input")(styles , stylesProps)


const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    position: "relative",
    transition: "border-color 0.1s",

}, (props: any) => {
    const content = props.big && !props.boolean ? {
        "&:before": {
            content: props.onLabel || '""',
            transition: "opacity 0.1s",
            lineHeight: `${bigHeight+4}px`,
            color: "white",
            padding: "0 3px",
        },
        "&:after": {
            content: props.offLabel || '""',
            transition: "opacity 0.1s",
            lineHeight: `${bigHeight+4}px`,
            padding: "0 3px",
            color: "#888",
        },
    } : {}

    return {
    ...content,
    width: props.big ? (props.boolean ?  `${bigBoolWidth}px` : (props.width + "px")) : "36px",
    height: props.big ? `${bigHeight+4}px` : "18px",

    borderRadius: `999em`,
    border: `1px solid transparent`,
    ":hover": {
        borderColor: `${Theme.blue}`,
    },
}})

export default InputContainer(Toggler)
