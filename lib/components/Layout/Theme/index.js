import * as React from "react";
import theme from "../../../styled/themes/ryzlink";
const Theme = (props) => {
    return React.createElement("div", null, Object.keys(theme).map(t => {
        React.createElement("span", null,
            t,
            " : ",
            theme[t]);
    }));
};
export default theme;
