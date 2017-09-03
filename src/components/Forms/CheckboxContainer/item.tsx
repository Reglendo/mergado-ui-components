import * as React from "react"
import {Link} from "react-router"
import styled, {css} from "styled-components"
import LittleStatus from "../../../components/LittleStatus"

interface IQueryItemProps {
    name: string
    option: any
    index: number
    onClick: (evt: any) => void
    checked: boolean
    labels: any
    singleChoice: boolean
    showInput: boolean
    className?: string
}

const StyledInput = styled.input`
    margin: 0;
    margin-right: 10px;
    vertical-align: text-bottom;
`

const QueryItemComponent: React.SFC<IQueryItemProps> = ({ name, option, index, onClick,
                                                          checked, labels, className,
                                                          singleChoice, showInput,
                                                          ...props}) => {
    return (
        <li className={`${name}__item ${index >= 0 ? `${name}__item--active` : ""}
                        ${option.disabled ? `${name}__item--disabled` : ""}
                        ${className}
            `}
            key={option.id}
            onClick={!option.subheader && onClick}>
                <StyledInput
                    type={singleChoice ? "radio" : "checkbox"}
                    className={`${name}__checkbox`}
                    checked={checked}
                    onChange={onClick}
                    key="input"
                    style={{display: showInput ? "inline-block":"none", pointerEvents: "none"}}
                />
                <QueryItemLabel name={name} option={option} allProducts={labels.allProducts}/>
        </li>
    )
}

export const QueryItem = styled(QueryItemComponent)`
    display: table;
    border-bottom: 1px solid #dbcba3;
    width: 100%;
    background: ${props => props.checked ? "#fbeea5" : "white"};
    padding: 10px;
    font-size: 0.9em;
    cursor: pointer;
    font-weight: ${props => props.checked ? "bold" : "normal"};
    &:hover {
        background: #fdf7d2;
    }
    ${props => props.option.disabled && css`
        cursor: default;
        &:hover {
            background: white;
        }
    `}
    ${props => props.option.subheader && css`
        background: #888;
        color: white;
        padding: 5px 10px;
        font-weight: bold;
        font-size: 0.9em;
        cursor: default;
        &:hover {
            background: #888;
        }
    `}
`

interface IQueryItemLabelProps {
    name: string
    option: any
    allProducts: string | JSX.Element
    className?: string
}

const Count = styled.span`
    color: #888;
    font-size: 0.8em;
`

const QueryItemLabelComponent: React.SFC<IQueryItemLabelProps> = ({ name, option, allProducts,
                                                                    className, ...props}) => {
    let label = (option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name)

    if(option.link !== undefined) {
        label = <Link to={option.link}>{label}</Link>
    }

    if(option.active !== undefined) {
        label = <LittleStatus type={option.active ? "success" : "inactive"}>{label}</LittleStatus>
    }
    return (
        <label className={`${name}__label ${className}`} key="label">
            {label}
            {" "}
            <Count className={`${name}__count`}>
                {typeof option.product_count !== "undefined" ? `(${option.product_count})` : "" }
            </Count>
        </label>
    )
}

const QueryItemLabel = styled(QueryItemLabelComponent)`
    cursor: pointer;
    ${props => props.option.disabled && css`
        cursor: default;
        font-style: italic;
        color: #888;
    `}
`
