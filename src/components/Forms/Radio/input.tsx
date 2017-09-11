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

        return <glamorous.Label display="inline-block" marginRight="5px" className={`${name}__item ${props.className}`} key={value}>
                <Button secondary={checked ? false : true} color={checked ? "blue" : "decoration"} type="void" input={{onClick: () => false }}>
                    <Input
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        className={`${name}__input`}
                        type="radio"
                        data-big={bigButtons}
                        />
                    &nbsp;{label}
               </Button>
               </glamorous.Label>
    }

    return <glamorous.Label display="block" className={`${name}__item ${props.className}`} key={value}>
                    <Input
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        className={`${name}__input`}
                        type="radio"
                        data-big={bigButtons}
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
            ":checked": {
                border: `6px solid white`,
            },
        }
    } else {
        return {
            border: `1px solid ${props.theme.decoration}`,
            ":checked": {
                border: `6px solid ${props.theme.blue}`,
            },
            ":hover": {
                borderColor: `${props.theme.blue}`,
            },
        }
    }
})

export default RadioInput
