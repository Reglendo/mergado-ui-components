import * as React from "react"
import glamorous from "glamorous"
import Button from "../../../components/Forms/Button"

interface IInputProps {
    name: string
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    bigButtons: boolean
    className?: string
}

const RadioInput: React.SFC<IInputProps> = ({name, value, checked, label, onChange, bigButtons, ...props}) => {
    if(bigButtons) {

        return <Label className={`${name}__item ${props.className}`} key={value}>
                <Button secondary={checked ? false : true}
                        color={checked ? "blue" : "decoration"}
                        type="void" input={{onClick: () => false }}>
                    <Input
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        type="radio"
                        className={`${this.name}__item`}
                        style={{display: "none"}}
                        data-big={bigButtons}
                        />
                    <StyledInput
                        />
                    &nbsp;{label}
               </Button>
               </Label>
    }

    return <glamorous.Label display="block" className={`${name}__item ${props.className}`} key={value}>
                    <Input
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        type="radio"
                        className={`${this.name}__item`}
                        style={{display: "none"}}
                        data-big={bigButtons}
                        />
                    <StyledInput
                        />
                    &nbsp;{label}
        </glamorous.Label>
}

const Label = glamorous.label({
    display: "inline-block",
    marginRight: "5px",
    "& .muk-button__item": {
        borderRadius: 0,
        margin: "0 0 0 -7px"
    },
}, (props) => {
    const theme: any = props.theme
    return {
        ":first-of-type .muk-button__item": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .muk-button__item": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        }
    }
})

const Input = glamorous.input({
}, (props: any) => {
    if(props["data-big"]) {
        return {
            ":checked + span": {
                border: `6px solid white`,
            },
        }
    } else {
        return {
            ":checked + span": {
                border: `6px solid ${props.theme.blue}`,
            },
        }
    }
})

const StyledInput = glamorous.span({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "text-top !important",
    transition: "border-color 0.2s",
    borderRadius: "100%",
    cursor: "pointer",
    ":focus,:active": {
        outline: "none",
    }
}, (props: any) => {

    if(props["data-big"]) {
        return {
            border: `1px solid ${props.theme.decoration}`,
        }
    } else {
        return {
            border: `1px solid ${props.theme.decoration}`,
            ":hover": {
                borderColor: `${props.theme.blue}`,
            },
        }
    }
})

export default RadioInput
