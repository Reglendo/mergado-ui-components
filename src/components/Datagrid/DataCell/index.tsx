import * as React from "react"
import cxs from "@reglendo/cxs/component"
import domOnlyProps from "../../../helpers/dom-only-props"
import {prefix} from "../../../config"
import PropTypes from "prop-types"

export interface Props {
    style?: any
    className?: string
    type?: "cell" | "header"
    onClick?: (event: any) => any
}
export interface State {
}

class DataCell extends React.PureComponent<Props, State> {

    public static defaultProps: Props = {
        style: {},
        type: "cell",
        className: "",
    }
    private readonly name = prefix + "datacell";

    public render() {
        const { style, type, onClick, className, ...props } = this.props;
        return (type === "header")
            ?
                <Th {...props} className={`${this.name} m-header ${className}`}
                    s={style} onClick={onClick}>{this.props.children}</Th>
            :
                <Td {...props} className={`${this.name} ${className}`} s={style}
                    onClick={onClick}>{this.props.children}</Td>
    }
}

const Cell = {
    textAlign: "left",
    fontWeight: "normal",
    "& .muk-form__group": {
        margin: 0,
    },
    "& .muk-form__label": {
        padding: 0,
    },
    "& .muk-button__item": {
        padding: "0 5px",
        verticalAlign: "middle",
        height: "auto",
    },
}

const Td = cxs("td")(Cell, (props: any) => {
return {
    padding: props.theme.table_cell_padding,
    borderTop: props.theme.table_border_horizontal,
    borderRight: props.theme.table_border_vertical,
    fontSize: props.theme.table_cell_text_size,
    " a, a:visited, a:hover, a:active": {
        color: props.theme.text,
    },
    "&:first-child": {
        borderLeft: props.theme.table_border_vertical,
    },
    ...props.s,
}})

const Th = cxs("th")({
    ...Cell,
    borderColor: "transparent",
    whiteSpace: "nowrap",
    color: "#fff",
    fontWeight: "bold",
}, (props: any) => { return {
    padding: props.theme.table_cell_padding,
    fontSize: props.theme.table_header_text_size,
    textTransform: props.theme.table_header_text_transform,
    ...props.s,
}})

Th.propTypes = {
    s: PropTypes.any,
}

Td.propTypes = {
    s: PropTypes.any,
}
export default DataCell
