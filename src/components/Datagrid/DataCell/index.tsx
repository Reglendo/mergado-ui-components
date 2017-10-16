import * as React from "react"
import cxs from "cxs/component"
import domOnlyProps from "../../../helpers/dom-only-props"
import {prefix} from "../../../config"

export interface Props {
    style?: any
    addClass?: string
    className?: string
    type?: "cell" | "header"
    onClick?: (event: any) => any
}
export interface State {
}

class DataCell extends React.Component<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: null,
        type: "cell",
        className: "",
    }
    private readonly name = prefix + "datagrid__cell";

    public render() {
        const { style, type, addClass, onClick, className } = this.props;
        return (type === "header")
            ?
                <Th {...domOnlyProps(this.props)} className={`${this.name} ${className} ${this.name}--header ${addClass}`}
                    style={style} onClick={onClick}>{this.props.children}</Th>
            :
                <Td {...domOnlyProps(this.props)} className={`${this.name} ${addClass} ${className} `} style={style}
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
        lineHeight: "initial",
    },
}

const Td = cxs("td")(Cell, (props: any) => {
return {
    padding: props.theme.table_cell_padding,
    borderBottom: props.theme.table_border_horizontal,
    borderRight: props.theme.table_border_vertical,
    fontSize: props.theme.table_cell_text_size,
}})

const Th = cxs("th")({
    ...Cell,
    borderColor: "transparent",
    whiteSpace: "nowrap",
    color: "#fff",
    fontWeight: "bold",
}, (props: any) => { return {
    padding: props.theme.table_cell_padding,
    borderBottom: props.theme.table_border_horizontal,
    fontSize: props.theme.table_header_text_size,
    textTransform: props.theme.table_header_text_transform,
}})

export default DataCell
