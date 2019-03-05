import * as React from "react"
import css from "../../css"
import Theme from "../Theme"

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
    private readonly name = "muk-datacell";

    public render() {
        const { type, onClick, className, ...props } = this.props;
        return (type === "header")
            ?
                <CssTh {...props} className={`${this.name} m-header ${className || ""}`}
                   onClick={onClick}>{this.props.children}</CssTh>
            :
                <CssTd {...props} className={`${this.name} ${className || ""}`}
                    onClick={onClick}>{this.props.children}</CssTd>
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

const CssTd = css("td")({...Cell,...{
    padding: Theme.table_cell_padding,
    borderTop: Theme.table_border_horizontal,
    borderRight: Theme.table_border_vertical,
    fontSize: Theme.table_cell_text_size,
    " a, a:visited, a:hover, a:active": {
        color: Theme.text,
    },
    "&:first-of-type": {
        borderLeft: Theme.table_border_vertical,
    },
}})

const CssTh = css("th")({
    ...Cell,
    borderColor: "transparent",
    whiteSpace: "nowrap",
    color: "#fff",
    padding: Theme.table_cell_padding,
    fontSize: Theme.table_header_text_size,
    textTransform: Theme.table_header_text_transform,
    fontWeight: "bold",
})


export default DataCell
