import * as React from "react"
import glamorous from "glamorous"

interface IInputProps {
    name: string
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    className?: string
}

const RadioInput: React.SFC<IInputProps> = ({name, value, checked, label, onChange, ...props}) => {

    return <glamorous.Label display="block" className={`${name}__item ${props.className}`} key={value}>
                    <Input
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        className={`${name}__input`}
                        type="radio"
                        />
                    &nbsp;{label}
            </glamorous.Label>
}

const Input = glamorous.input({
    marginRight: "5px",
    appearance: "none",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "middle !important",
    transition: "border-color 0.2s",
    borderRadius: "100%",
    ":focus,:active": {
        outline: "none",
    }
}, (props: any) => { return {
    border: `1px solid ${props.theme.decoration}`,
    ":checked": {
        border: `6px solid ${props.theme.blue}`,
    },
    ":hover": {
        borderColor: `${props.theme.blue}`,
    },
}})

export default RadioInput
