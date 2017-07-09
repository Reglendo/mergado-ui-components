import * as React from "react"
import styled from "styled-components"

interface IInputProps {
    name: string
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    className?: string
}

const RadioInputComponent: React.SFC<IInputProps> = ({name, value, checked, label, onChange, ...props}) => {

    return <label className={`${name}__item ${props.className}`} key={value}>
                    <input
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        className={`${name}__input`}
                        type="radio"
                        />
                    &nbsp;{label}
            </label>
}

const RadioInput = styled(RadioInputComponent)`
    display: block;
    padding: 2px 0px;
`

export default RadioInput
