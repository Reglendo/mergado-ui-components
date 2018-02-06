import * as React from "react"
import css from "cxs/component"
import {Button} from "../../../components/Forms/Button"
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

export const RadioInput: React.SFC<IInputProps> = ({name, value, checked, label,
                                             onChange, bigButtons, hideInput, ...props}) => {
    const Element = name ? StyledLightInput : Input
    if(bigButtons) {
        return <BigLabel className={`${name}__item ${props.className}`} key={value}>
                <Element
                    name={name}
                    value={value}
                    type="radio"
                    className={`${this.name}__item`}
                    style={{display: "none"}}
                    data-big={true}
                    />
                <Button
                    secondary={true}
                    style={{display: "block"}}
                    type="void" input={{onClick: () => false }}>
                    {!hideInput ?
                        <span style={{verticalAlign: "middle"}}>
                            <StyledInput className="muk-checkbox-input"
                                />&nbsp;
                        </span>
                    :
                        <span />
                    }
                    <span style={{verticalAlign: "middle"}}>
                        {label}
                    </span>
               </Button>
               </BigLabel>
    }

    return <Label className={`${name}__item ${props.className}`} key={value}>
                    <Element
                        name={name}
                        value={value}
                        type="radio"
                        className={`${this.name}__item`}
                        style={{display: "none"}}
                        data-big={false}
                        />
                    <span className="muk-button__item">
                        <StyledInput className="muk-checkbox-input"
                            />
                        &nbsp;{label}
                    </span>
        </Label>
}

const Label = css("label")({
    cursor: "pointer",
    display: "block",
    padding: "5px 0",
}, (props) => {
    const theme: any = props.theme
    return {
        ":hover span span": {
            borderColor: theme.blue,
        },
    }

})

const BigLabel = css("label")({
    display: "table-cell",
    marginRight: "5px",
    verticalAlign: "top",
    " .muk-popup_hint__trigger": {
        lineHeight: "16px",
    },
    " .muk-button__item": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
        lineHeight: "16px",
        padding: "16px",
    },
    " span span": {
        fontWeight: "normal",
    },
}, (props) => {
    const theme: any = props.theme
    return {
        ":hover span span": {
            borderColor: `${theme.blue}`,
        },
        ":first-of-type .muk-button__item": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .muk-button__item": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        },
    }
})

const styledProps = (props: any) => {
    const styledInput = {
    }
    if(props["data-big"]) {
        return {
            "&:checked + .muk-button__item .muk-checkbox-input": {
                border: `6px solid white`,
            },
            "&:checked + .muk-button__item": {
                background: props.theme.blue,
                color: "white",
            },
            "&:checked + .muk-button__item *": {
                color: "white !importat",
                fill: "white !important",
            },
        }
    } else {
        return {
            "&:checked + .muk-button__item .muk-checkbox-input": {
                border: `6px solid` + props.theme.blue,
            },
        }
    }
}

const Input = css("input")(styledProps)
const StyledLightInput = css(LightInput)(styledProps)

const StyledInput = css("span")({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "middle !important",
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
