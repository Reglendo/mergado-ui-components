import * as React from "react"
import css from "css"

import Radio from "../Radio/input"
import Checkbox from "../../Checkbox"

import LittleStatus from "../../LittleStatus"
import Theme from "components/Theme"

interface IQueryItemProps {
    name: string
    option: any
    value: string
    onClick: (evt: any) => void
    checked: boolean
    singleChoice: boolean
    showInput: boolean
    className?: string
}

export const QueryItem: React.SFC<IQueryItemProps> = ({ name, option, onClick,
                                                          checked, className,
                                                          singleChoice, showInput,
                                                          ...props}) => {
    return (
        <Li className={`muk-inputgroupv__item ${checked ? `muk-inputgroupv__item--active` : ""}
                        ${option.disabled ? `muk-inputgroupv__item--disabled` : ""}
                        ${className || ""}
            `}
            data-subheader={option.subheader}
            disabled={option.disabled}
            checked={checked}
            key={option.value}
            data-link={option.link !== undefined}
            onClick={!option.subheader && !option.disabled ? onClick : undefined}>
            {showInput && !option.subheader && !option.disabled &&
                <>
                    {!singleChoice ?
                        <Checkbox
                                readOnly={true}
                                checked={checked}
                                onChange={undefined}
                                key="input"
                                data-name={name}
                                style={{ float: "left", margin: "10px", pointerEvents: "none", }}
                            />
                        :
                        <Radio
                                value=""
                                checked={checked}
                                readOnly={true}
                                label={""}
                                onChange={undefined}
                                key="input"
                                data-name={name}
                                style={{ float: "left", margin: "0px", marginRight: "-10px", pointerEvents: "none", }}
                            />
                    }
                </>
            }
            <label>
            <QueryItemLabel name={name} option={option} showInput={showInput}/>
            </label>
        </Li>
    )
}

interface IQueryItemLabelProps {
    name: string
    option: any
    showInput: boolean
    className?: string
}

export const QueryItemLabel: React.SFC<IQueryItemLabelProps> = ({ name, option,
                                                                    className, showInput, ...props}) => {
    let label = option.label

    if(option.link !== undefined) {
        label = <a href={option.link}>{label}</a>
    }

    return (
        <Label className={`muk-inputgroupv__label ${className || ""}`} key="label" disabled={option.disabled}>
            {label}
            {" "}
            <Count className={`muk-inputgroupv__count`}>
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
    lineHeight: "24px",
    width: "100%",
    " > label": {
        padding: "10px",
        display: "block",
        cursor: "pointer",
        lineHeight: "24px",
    },
}, (props: any) => {
    let checked = {}
    if(props.checked) {
        checked = {
            background: Theme.selected_background,
        }
    }

    let disabled = {}
    if(props.disabled) {
        disabled = {
            " > label": {
                cursor: "default",
            },
            ":hover": {
                background: "white",
            },
        }
    }

    let subheader = {}
    if(props["data-subheader"]) {
        subheader = {
            background: Theme.blue,
            color: "white",
            fontWeight: "bold",
            fontSize: "80%",
            pointerEvents: "none",
        }
    }
    return {
        cursor: props["data-link"] ? "default" : "pointer",
        ":hover": {
            background: Theme.hover_background,
        },
        ...checked,
        ...disabled,
        ...subheader,
    }
})

const Label = css("span")({
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
