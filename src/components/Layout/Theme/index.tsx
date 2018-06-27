import * as React from "react"

import theme from "../../../styled/themes/ryzlink"

const Theme = (props) => {
    return <div>
            {Object.keys(theme).map(t => {
                <span>{t} : {theme[t]}</span>
            })}
           </div>
}

export default theme