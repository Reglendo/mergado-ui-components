import * as React from "react"
import {prefix} from "../../../config"
import styled from "styled-components"
import theme from "../../../styled/theme"

export interface Props {
    style?: any
    addClass?: string
    type?: "cell" | "header"
    onClick?: (event: any) => any
}
export interface State {
}

const Cell = styled.td`
    padding: ${theme.table_cell_padding};
    text-align: left;
    border-bottom: ${theme.table_border_horizontal};
    border-right: ${theme.table_border_vertical};
    font-weight: normal;
    font-size: ${theme.table_cell_text_size};
    .muk-form__group {
        margin: 0;
    }
    .muk-form__label {
        padding: 0;
    }
    .muk-button__item {
        padding: 0 5px;
        vertical-align: middle;
        height: auto;
        line-height: initial;
    }
`

const Header = Cell.withComponent("th").extend`
    border-color: transparent;
    white-space: nowrap;
    color: #fff;
    font-weight: bold;
    font-size: ${theme.table_header_text_size};
    text-transform: ${theme.table_header_text_transform};
`

class DataCell extends React.Component<Props, State> {

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
                <Header className={`${this.name} ${this.name}--header ${addClass}`}
                    style={style} onClick={onClick}>{this.props.children}</Header>
            :
                <Cell className={`${this.name} ${addClass}`} style={style}
                    onClick={onClick}>{this.props.children}</Cell>
    }
}

export default DataCell
