import * as React from "react"
import css from "@reglendo/cxs/component"
import Button from "../Button"
import Span from "../Span"

import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import {Input as LightInput} from "light-form/dist/es"
import {StyledInput as StyledCheckbox} from "../Checkbox"
interface IInputProps {
    name: string
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    bigButtons: boolean
    className?: string
    hideInput?: boolean
    checkboxes?: boolean
}

const RadioInput: React.SFC<IInputProps> = ({name, value, checked, label, checkboxes,
                                             onChange, bigButtons, hideInput, ...props}) => {
    const Element = name ? CssElementLightInput : CssElement
    const formName = checkboxes ? (name+"."+value) : name
    if(bigButtons) {
        return <CssBigLabel className={`muk-radio ${props.className || ""}`} key={value}>
                <Element
                    name={formName}
                    value={value}
                    type={checkboxes ? "checkbox" : "radio"}
                    className={`m-input`}
                    style={{display: "none"}}
                    data-big={true}
                    />
                <Button
                    secondary={true}
                    style={{display: "block"}}
                    className={"m-button"}
                    type="void">
                    {!hideInput &&
                        <Span className="m-input-wrapper" display={"inline-block"} verticalAlign={"middle"} height={"18px"} position={"relative"}>
                            {checkboxes &&
                            <StyledCheckbox className={"m-checkbox-input"} label={label} />
                            }
                            {checkboxes &&
                            <IconCheck className="m-check" size={14} />
                            }
                            {!checkboxes &&
                                <CssCheckbox className="m-radio-input"/>
                            }
                        </Span>
                    }
                    <Span className="m-label-wrapper" verticalAlign={"middle"}>
                        {label}
                    </Span>
               </Button>
               </CssBigLabel>
    }

    return <CssLabel className={`muk-radio ${props.className || ""}`} key={value}>
                    <Element
                        name={name}
                        value={value}
                        type="radio"
                        className={`m-input`}
                        style={{display: "none"}}
                        data-big={false}
                        />
                    <span className="m-button">
                        <CssCheckbox className="m-radio-input"
                            />
                        <Span className="m-label-wrapper" verticalAlign={"middle"}>&nbsp;{label}
                        </Span>
                    </span>
        </CssLabel>
}

const CssLabel = css("label")({
    cursor: "pointer",
    display: "block",
    padding: "5px 0",
}, (props) => {
    const theme: any = props.theme
    return {
        ":hover .m-radio-input": {
            borderColor: theme.blue,
        },
    }

})

const CssBigLabel = css("label")({
    display: "table-cell",
    marginRight: "5px",
    verticalAlign: "top",
    " .muk-popuphint": {
        lineHeight: "16px",
    },
    " .m-button": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
        lineHeight: "16px",
        padding: "16px",
    },
    " .m-label-wrapper": {
        fontWeight: "normal",
    },

    " .m-label-wrapper .m-image": {
        verticalAlign: "initial !important",
    }

}, (props) => {
    const theme: any = props.theme
    return {
        ":hover .m-radio-input, &:hover .m-checkbox-input": {
            borderColor: `${theme.blue}`,
        },
        ":first-of-type .m-button": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .m-button": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        },
    }
})

const styledProps = (props: any) => {
    const styledInput = {
    }
    if(props["data-big"]) {
        return {
            "&:checked + .m-button .m-radio-input": {
                border: `6px solid white`,
            },
            "&:checked + .m-button .m-checkbox-input": {
                border: `1px solid white`,
            },
            "&:checked + .m-button": {
                background: props.theme.blue,
                color: "white",
            },
            "&:checked + .m-button *": {
                color: "white !importat",
                fill: "white !important",
            },
            "&:checked + .m-button .muk-icon--check": {
                display: "inline-block",
            },

    }
    } else {
        return {
            "&:checked + .m-button .m-radio-input": {
                border: `6px solid` + props.theme.blue,
            },
        }
    }
}

const CssElement = css("input")(styledProps)
const CssElementLightInput = css(LightInput)(styledProps)

const CssCheckbox = css("span")({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "middle",
    transition: "border-color 0.2s",
    borderRadius: "100%",
    ":focus": {
        outline: "none",
    },
    ":active": {
        outline: "none",
    },
}, (props: any) => {

    if(props["data-big"]) {
        return {
            border: `1px solid ${props.theme.decoration}`,
        }
    } else {
        return {
            border: `1px solid ${props.theme.decoration}`,

        }
    }
})

export default RadioInput
