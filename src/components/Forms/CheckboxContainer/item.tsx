import * as React from "react"
import {Link} from "react-router"
import css from "cxs/component"

import Radio from "../../../components/Forms/Radio"
import Checkbox from "../../../components/Forms/Checkbox"

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

export const QueryItem: React.SFC<IQueryItemProps> = ({ name, option, index, onClick,
                                                          checked, labels, className,
                                                          singleChoice, showInput,
                                                          ...props}) => {
    return (
        <Li className={`${name}__item ${index >= 0 ? `${name}__item--active` : ""}
                        ${option.disabled ? `${name}__item--disabled` : ""}
                        ${className}
            `}
            data-subheader={option.subheader}
            disabled={option.disabled}
            checked={checked}
            key={option.id}
            data-link={option.link !== undefined}
            onClick={!option.subheader && onClick}>
            {showInput &&
                <span>
                {singleChoice ?
                    <Radio
                        items={[
                            {value: option.id, label: ""}
                        ]}
                        input={{
                            value: checked ? option.id : null,
                            onChange: onClick,
                        }}
                        key="input"
                        style={{display: showInput ? "inline-block" : "none", pointerEvents: "none" }}
                    />
                :
                    <Checkbox
                        input={{
                            checked: checked,
                            onChange: onClick,
                        }}
                        key="input"
                        style={{display: showInput ? "inline-block" : "none", pointerEvents: "none", paddingRight: "5px" }}
                    />
                }
                </span>
            }
            <QueryItemLabel name={name} option={option} allProducts={labels.allProducts} showInput={showInput}/>
        </Li>
    )
}

interface IQueryItemLabelProps {
    name: string
    option: any
    allProducts: string | JSX.Element
    showInput: boolean
    className?: string
}

export const QueryItemLabel: React.SFC<IQueryItemLabelProps> = ({ name, option, allProducts,
                                                                    className, showInput, ...props}) => {
    let label = (option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name)

    if(option.link !== undefined) {
        label = <Link to={option.link}>{label}</Link>
    }

    return (
        <Label className={`${name}__label ${className}`} key="label" disabled={option.disabled}>
            {label}
            {" "}
            <Count className={`${name}__count`}>
                {typeof option.product_count !== "undefined" ? `(${option.product_count})` : "" }
            </Count>
            {option.active !== undefined &&
                <LittleStatus style={{float: showInput ? "right" : "left"}}
                              type={option.active ? "success" : "inactive"} />
            }
        </Label>
    )
}

export const Li = css("li")({
    display: "table",
    background: "white",
    fontWeight: "normal",
    width: "100%",
    padding: "10px",
}, (props: any) => {
    let checked = {}
    if(props.checked) {
        checked = {
            background: props.theme.selected_background,
            ":hover": {
                // background: Color(props.theme.selected_background).fade(0.2).string(),
            },
        }
    }

    let disabled = {}
    if(props.disabled) {
        disabled = {
            cursor: "default",
            // ":hover": {
            //     background: "white",
            // },
        }
    }

    let subheader = {}
    if(props["data-subheader"]) {
        subheader = {
            background: props.theme.decoration,
            color: "white",
            padding: "5px",
            fontWeight: "bold",
            pointerEvents: "none",
        }
    }
    return {
        ...checked,
        ...disabled,
        ...subheader,
        cursor: props["data-link"] ? "default" : "pointer",
        ":hover": {
            background: props.theme.hover_background,
        },
    }
})

const Label = css("label")({
    cursor: "pointer",
    margin: "0 5px",
    " a": {
        verticalAlign: "middle",
    },
}, (props: any) => {
    return props.disabled ?
    {
            cursor: "default",
            fontStyle: "italic",
            color: "#888",
    }
    : {}
})

const Count = css("span")({
    color: "#888",
    fontSize: "0.8em",
})

const StyledInput = css("input")({
    margin: 0,
    marginRight: "10px",
    verticalAlign: "text-bottom",
})
