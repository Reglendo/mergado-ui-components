import * as React from "react"
import LittleStatus from "components/LittleStatus"

const Item = props => {
    let label = (props.option.name === "♥ALLPRODUCTS♥" ? props.labels.allProducts : props.option.name)

    if(props.option.active !== undefined) {
        label = <LittleStatus type={props.option.active ? "success" : "inactive"}>{label}</LittleStatus>
    }

    return (
        <li className={`${props.name}__item ${props.active ? `${props.name}__item--active` : ""}
                        ${props.disabled ? `${props.name}__item--disabled` : ""}` }
            key={props.option.id}
            onClick={props.onClick}>
            {props.singleChoice === false ?
                <input
                    type="checkbox"
                    className={`${props.name}__checkbox`}
                    checked={props.active}
                    onChange={props.onClick}
                    style={{pointerEvents: "none"}}
                />
            :
                <input
                    type="radio"
                    className={`${props.name}__checkbox`}
                    checked={props.active}
                    onChange={props.onClick}
                    style={{display: props.showRadio?"inline-block":"none", pointerEvents: "none"}}
                />
            }
            <label className={`${props.name}__label`}>
                {label}
                {" "}
                <span className={`${props.name}__count`}>
                    {typeof props.option.product_count !== "undefined" ? `(${props.option.product_count})` : "" }
                </span>
            </label>
        </li>
    )
}

export default Item
