import * as React from "react";
import cxs from "cxs/component";
import { prefix } from "../../../config";
import { DataCell } from "../DataCell";
import { Checkbox } from "../../../components/Forms/Checkbox";
export class DataRow extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "datagrid__row";
    }
    render() {
        const { style, addClass, inactive, dataId, actions, selectedRows, className } = this.props;
        const isSelected = selectedRows ? selectedRows.indexOf(dataId) > -1 : false;
        return (React.createElement(Tr, { className: `${this.name} ${inactive && this.name + `--inactive`} ${addClass} ${className}`, disabled: inactive, selected: isSelected, "data-id": dataId, style: style },
            actions.length > 0 &&
                React.createElement(DataCell, null,
                    React.createElement(Checkbox, { input: { "onChange": evt => this.props.handleSelectRow(dataId),
                            "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                            "data-id": dataId,
                            "className": "bulk-action-item",
                        } })),
            this.props.children));
    }
}
DataRow.defaultProps = {
    addClass: "",
    className: "",
    style: {},
    inactive: false,
    dataId: "",
    actions: [],
    selectedRows: [],
};
const Tr = cxs("tr")({}, (props) => {
    return {
        background: props.selected ? props.theme.selected_background : "#fff",
        ":hover td": {
            background: props.theme.hover_background,
        },
        color: props.disabled ? "#ccc" : "initial",
        " *, path": {
            color: props.disabled && "#ccc !important",
            fill: props.disabled && "#ccc !important",
        },
        " .muk-icon--pause *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        },
        "& .muk-icon--play *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        },
    };
});
