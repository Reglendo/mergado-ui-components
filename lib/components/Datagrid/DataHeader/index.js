import * as React from "react";
import glamorous, { Div } from "glamorous";
import { prefix } from "../../../config";
import DataCell from "../DataCell";
import Checkbox from "../../../components/Forms/Checkbox";
import Button from "../../../components/Forms/Button";
class DataHeader extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.name = prefix + "datagrid__row";
    }
    renderBulkActions() {
        return this.props.actions.map(obj => {
            return (React.createElement(Button, { onClick: obj.action, key: obj.type, icon: obj.icon, color: "nocolor", size: "small" }));
        });
    }
    render() {
        const { actions, addClass, selectedRows, style } = this.props;
        const kids = [...this.props.children];
        const lastKid = kids.pop();
        return (React.createElement("thead", null,
            React.createElement(Header, { className: `${this.name} ${this.name}--header ${addClass}`, selected: selectedRows.length > 0, style: style },
                actions.length > 0 &&
                    React.createElement(DataCell, { type: "header", style: { width: "1%" } },
                        React.createElement(Checkbox, { input: { onChange: this.props.handleSelectAll, checked: this.props.selectedAll } })),
                kids,
                selectedRows.length > 0 ?
                    React.createElement(DataCell, { type: "header" },
                        React.createElement(Div, { display: "inline-block", verticalAlign: "bottom", className: `${this.name}__actions_bar` },
                            React.createElement(ActionsIcons, { className: `${this.name}__actions_icons` }, this.renderBulkActions())))
                    :
                        lastKid)));
    }
}
DataHeader.defaultProps = {
    addClass: "",
    style: {},
    actions: [],
    handleSelectAll: () => { },
    selectedAll: false,
};
export const ActionsIcons = glamorous.div({
    whiteSpace: "nowrap",
    "& path": {
        fill: "white !important",
    },
});
const Header = glamorous.tr({}, (props) => {
    return {
        background: props.selected ? props.theme.blue : "#333",
    };
});
export default DataHeader;
