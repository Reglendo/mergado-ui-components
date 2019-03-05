import * as React from "react"
import css from "../../../css"
import Theme from "../../Theme"

const FieldError = ({error, className, style = {}}) => {
    if(error) {
        return (
            <Styled className={`${className}`} style={style}>
                {error}
            </Styled>
        )
    } else {
        return null
    }
}

export const Styled = css("div")({
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    padding: "1px 5px",
    position: "absolute",
    fontWeight: "normal",
    top: "100%",
    left: Theme.radius,
    background: Theme.red,
})

export default FieldError
