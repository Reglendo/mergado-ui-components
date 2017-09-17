import * as React from "react"
import glamorous from "glamorous"

import {prefix} from "../../../config"

export interface Props {
    style?: any
    addClass?: string
    type?: "cell" | "header"
    onClick?: (event: any) => any
}
export interface State {
}

class DataCell extends React.PureComponent<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: null,
        type: "cell",
    }
    private readonly name = prefix + "datagrid__cell";

    public render() {
        const { style, type, addClass, onClick } = this.props;
        return (type === "header")
            ?
                <Th className={`${this.name} ${this.name}--header ${addClass}`}
                    style={style} onClick={onClick}>{this.props.children}</Th>
            :
                <Td className={`${this.name} ${addClass}`} style={style}
                    onClick={onClick}>{this.props.children}</Td>
    }
}

const Td = glamorous.td({
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
}, (props: any) => { return {
    padding: props.theme.table_cell_padding,
    borderBottom: props.theme.table_border_horizontal,
    borderRight: props.theme.table_border_vertical,
    fontSize: props.theme.table_cell_text_size,
}})

const Th = glamorous(Td)({
    borderColor: "transparent",
    whiteSpace: "nowrap",
    color: "#fff",
    fontWeight: "bold",
}, (props: any) => { return {
    fontSize: props.theme.table_header_text_size,
    textTransform: props.theme.table_header_text_transform,
}}).withComponent("th")

export default DataCell
