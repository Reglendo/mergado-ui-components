import * as React from "react";
import { Div } from "../../../components/Layout/Div";
import cxs from "@reglendo/cxs/component";
import { prefix } from "../../../config";
import DataCell from "../DataCell";
import Checkbox from "../../../components/Forms/Checkbox";
import Button from "../../../components/Forms/Button";
class DataHeader extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.name = prefix + "datarow";
    }
    renderBulkActions() {
        return this.props.actions.map(obj => {
            return (React.createElement(Button, { className: "m-bulk", onClick: obj.action, key: obj.type, icon: obj.icon, color: "nocolor", size: "small" }));
        });
    }
    render() {
        const { actions, className, selectedRows, style } = this.props;
        const kids = [...this.props.children];
        const lastKid = kids.pop();
        return (React.createElement("thead", { className: `${this.name} ${className}` },
            React.createElement(CssHeader, { className: "m-row", selected: selectedRows && selectedRows.length > 0, s: style },
                actions.length > 0 &&
                    React.createElement(DataCell, { type: "header", style: { width: "1%" } },
                        React.createElement(Checkbox, { input: { onChange: this.props.handleSelectAll, checked: this.props.selectedAll } })),
                kids,
                selectedRows && selectedRows.length > 0 ?
                    React.createElement(DataCell, { type: "header" },
                        React.createElement(Div, { className: `m-actions`, display: "inline-block", verticalAlign: "bottom" },
                            React.createElement(CssActionsIcons, { className: `m-icons` }, this.renderBulkActions())))
                    :
                        lastKid)));
    }
}
DataHeader.defaultProps = {
    className: "",
    style: {},
    actions: [],
    handleSelectAll: () => { },
    selectedAll: false,
};
export const CssActionsIcons = cxs("div")({
    marginTop: "-3px",
    whiteSpace: "nowrap",
    " svg g path": {
        fill: "white !important",
    },
});
const CssHeader = cxs("tr")((props) => {
    return Object.assign({ background: props.selected ? props.theme.blue : "#333" }, props.s);
});
export default DataHeader;
