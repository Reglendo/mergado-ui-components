import * as React from "react";
import cxs from "@reglendo/cxs/component";
import { prefix } from "../../../config";
import DataCell from "../DataCell";
import Checkbox from "../../../components/Forms/Checkbox";
import PropTypes from 'prop-types';
class DataRow extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "datarow";
    }
    render() {
        const { style, inactive, dataId, actions, selectedRows, className } = this.props;
        const isSelected = selectedRows ? selectedRows.indexOf(dataId) > -1 : false;
        return (React.createElement(CssTr, { className: `${this.name} ${inactive && `inactive`} ${className}`, disabled: inactive, selected: isSelected, "data-id": dataId, s: style },
            actions.length > 0 &&
                React.createElement(DataCell, { className: "m-actions-cell" },
                    React.createElement(Checkbox, { className: "m-actions-checkbox", input: { "onChange": evt => this.props.handleSelectRow(dataId),
                            "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                            "data-id": dataId,
                            "className": "m-bulk-action-item",
                        } })),
            this.props.children));
    }
}
DataRow.defaultProps = {
    className: "",
    style: {},
    inactive: false,
    dataId: "",
    actions: [],
    selectedRows: [],
};
const CssTr = cxs("tr")({}, (props) => {
    return Object.assign({ background: props.selected ? props.theme.selected_background : "#fff", ":hover td": {
            background: props.theme.hover_background,
        }, color: props.disabled ? "#ccc" : "initial", " *, path": {
            color: props.disabled && "#ccc !important",
            fill: props.disabled && "#ccc !important",
        }, " .muk-icon--pause *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        }, "& .muk-icon--play *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        } }, props.s);
});
CssTr.propTypes = {
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    s: PropTypes.any,
};
export default DataRow;
