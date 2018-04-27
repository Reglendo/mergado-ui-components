import * as React from "react"
import css from "@reglendo/cxs/component"
import Button from "../../../components/Forms/Button"
import Span from "../../../components/Layout/Span"

import {Input as LightInput} from "light-form/dist/es"

interface IInputProps {
    name: string
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    bigButtons: boolean
    className?: string
    hideInput?: boolean
}

const RadioInput: React.SFC<IInputProps> = ({name, value, checked, label,
                                             onChange, bigButtons, hideInput, ...props}) => {
    const Element = name ? CssElementLightInput : CssElement
    if(bigButtons) {
        return <CssBigLabel className={`muk-radio ${props.className || ""}`} key={value}>
                <Element
                    name={name}
                    value={value}
                    type="radio"
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
                        <Span className="m-input-wrapper">
                            <CssCheckbox className="m-checkbox-input"
                                />
                        </Span>
                    }
                    <Span className="m-label-wrapper">
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
                        <CssCheckbox className="m-checkbox-input"
                            />
                        &nbsp;{label}
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
        ":hover .m-checkbox-input": {
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

}, (props) => {
    const theme: any = props.theme
    return {
        ":hover .m-checkbox-input": {
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
            "&:checked + .m-button .m-checkbox-input": {
                border: `6px solid white`,
            },
            "&:checked + .m-button": {
                background: props.theme.blue,
                color: "white",
            },
            "&:checked + .m-button *": {
                color: "white !importat",
                fill: "white !important",
            },
        }
    } else {
        return {
            "&:checked + .m-button .m-checkbox-input": {
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
