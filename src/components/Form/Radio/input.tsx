import * as React from "react"
import css from "css"
import Span from "components/Span"
import {IField} from "../Field"
import Theme from "components/Theme"

interface IInput extends IField {
}

const RadioInput: React.SFC<IInput> = ({ value, checked, label,
                                             onChange, readOnly, ...props}) => {

    return <CssLabel style={props.style} className={`muk-radio ${props.className || ""}`} key={value}>
                    <CssElement
                        value={value}
                        onChange={onChange}
                        checked={checked}
                        type="radio"
                        readOnly={readOnly}
                        data-name={props['data-name']}
                        className={`m-input`}
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
    ":hover .m-radio-input": {
        borderColor: Theme.blue,
    },
})


const CssElement = css("input")({
    display: "none",
    "&:checked + .m-button .m-radio-input": {
        border: `6px solid ` + Theme.blue,
    }
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
    border: `1px solid ${Theme.decoration}`,
    ":focus": {
        outline: "none",
    },
    ":active": {
        outline: "none",
    },
})

export default RadioInput
