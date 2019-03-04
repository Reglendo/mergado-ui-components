import * as React from "react"
import css from "css"
import Button from "../../Button"
import Span from "../../Span"
import Theme from "components/Theme"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import {StyledInput as StyledCheckbox} from "../../Checkbox"

interface IInputProps {
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    className?: string
    hideInput?: boolean
    singleChoice?: boolean
    name?: string
}

const RadioInput: React.SFC<IInputProps> = ({ value, checked, label, singleChoice,
                                             onChange, hideInput, name, ...props}) => {


    return <CssBigLabel className={`muk-radio ${props.className || ""}`} key={value}>
                <CssElement
                    checked={checked}
                    value={value}
                    data-name={name}
                    onChange={onChange}
                    type={singleChoice ?  "radio" : "checkbox"}
                    className={`m-input`}
                    />
                <Button
                    secondary={true}
                    className={"m-button"}
                    type="void">
                    {!hideInput &&
                        <Span className="m-input-wrapper" display={"inline-block"} verticalAlign={"middle"} height={"18px"} position={"relative"}>
                            {!singleChoice ?
                            <>
                                <StyledCheckbox className={"m-checkbox-input"} label={label} />
                                <IconCheck className="m-check" size={14} />
                            </>
                            :
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

const CssBigLabel = css("label")({
    verticalAlign: "top",
    " .muk-popuphint": {
        lineHeight: "16px",
    },
    " .m-button": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
        lineHeight: "16px",
        padding: "16px",
        display: "block",
    },
    " .m-label-wrapper": {
        fontWeight: "normal",
    },

    " .m-label-wrapper .m-image": {
        verticalAlign: "initial !important",
    }

})

const CssElement = css("input")({
        display: "none",
        "&:checked + .m-button .m-radio-input": {
            border: `6px solid white`,
        },
        "&:checked + .m-button .m-checkbox-input": {
            border: `1px solid white`,
        },
        "&:checked + .m-button": {
            background: Theme.blue,
            color: "white",
        },
        "&:checked + .m-button *": {
            color: "white !importat",
            fill: "white !important",
        },
        "&:checked + .m-button .muk-icon--check": {
            display: "inline-block",
        },
})

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
    border: `1px solid ${Theme.decoration}`,
})

export default RadioInput
