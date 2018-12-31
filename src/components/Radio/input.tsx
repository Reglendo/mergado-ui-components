import * as React from "react"
import css from "@reglendo/cxs/component"
import Button from "../Button"
import Span from "../Span"

import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import {StyledInput as StyledCheckbox} from "../Checkbox"

interface IInputProps {
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    className?: string
    style?: any
}

const RadioInput: React.SFC<IInputProps> = ({ value, checked, label,
                                             onChange, ...props}) => {

    return <CssLabel s={props.style} className={`muk-radio ${props.className || ""}`} key={value}>
                    <CssElement
                        value={value}
                        onChange={onChange}
                        checked={checked}
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
        ...props.s,
        ":hover .m-radio-input": {
            borderColor: theme.blue,
        },
    }

})

const styledProps = (props: any) => {
    return {
        "&:checked + .m-button .m-radio-input": {
            border: `6px solid` + props.theme.blue,
        },
    }
}

const CssElement = css("input")(styledProps)

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
    return {
        border: `1px solid ${props.theme.decoration}`,
    }
})

export default RadioInput
