import * as React from "react";
import css from "@reglendo/cxs/component";
const Grid = (props) => {
    const { children } = props;
    return (React.createElement(GridStyle, Object.assign({}, props), children));
};
const GridStyle = css("div")({}, (props) => {
    return {
        display: props.inline ? "inline-grid" : "grid",
        gridTemplateColumns: props.cols ? props.cols : "auto",
        gridTemplateRows: props.rows ? props.rows : "auto",
        gridGap: `${props.rowgap ? props.rowgap : props.gap} ${props.colgap ? props.colgap : props.gap}`,
        justifyItems: props.align ? props.align : "stretch",
        alignItems: props.valign ? props.valign : "stretch",
        gridAutoFlow: props.autoFlow ? props.autoFlow : "row",
    };
});
export default Grid;
