import * as React from "react"
import {prefix} from "config"
import styled from "styled-components"

export interface Props {
    style?: any
    addClass?: string
    type?: "cell" | "header"
    onClick?: (event: any) => any
}
export interface State {
}

const Cell = styled.td`
    padding: 8px 10px;
    text-align: left;
    border-bottom: 1px solid #dbcba3;
    font-weight: normal;
    border-right: #dbcba3 1px dotted;
    font-size: 13px;
    .muk-form__group {
        margin: 0;
    }
    .muk-form__label {
        padding: 0;
    }
`

const Header = Cell.withComponent("th").extend`
    background: #333;
    padding: 0 10px;
    border-color: transparent;
    font-weight: bold;
    white-space: nowrap;
    height: 30px;
    line-height: 30px;
    color: #fff;
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
