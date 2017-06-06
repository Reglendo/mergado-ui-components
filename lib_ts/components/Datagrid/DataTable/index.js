"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Button_1 = require("components/Forms/Button");
const Input_1 = require("components/Forms/Input");
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "datagrid";
        this.state = {
            checkedAll: false,
        };
    }
    toggleCheckedAll() {
        this.setState({
            checkedAll: !this.state.checkedAll,
        });
    }
    renderChildren() {
        const children = this.props.children;
        return children.map(obj => {
            return React.cloneElement(obj, {
                actions: this.props.bulkActions,
                checkedAll: this.state.checkedAll,
                checkAll: this.toggleCheckedAll.bind(this),
                labels: this.props.labels,
            });
        });
    }
    renderBulkActionbar() {
        const { labels } = this.props;
        return (React.createElement("div", { className: `${this.name}__actions_bar` },
            React.createElement(Input_1.InputLabel, { name: "actionbar" }, labels.actionsBar),
            React.createElement("div", { className: `${this.name}__actions_icons` }, this.renderBulkActions())));
    }
    renderBulkActions() {
        const ButtonEl = Button_1.default;
        return this.props.bulkActions.map(obj => {
            return (React.createElement(ButtonEl, { onClick: obj.action, icon: obj.icon, color: "nocolor", size: "tiny", disabled: !!obj.disabled }));
        });
    }
    render() {
        const { addClass, style } = this.props;
        const className = `${this.name}__table ${this.props.addClass}`;
        return (React.createElement("div", { className: `${this.name}` },
            this.props.bulkActions.length > 0 && this.renderBulkActionbar(),
            React.createElement("table", { className: className, style: style }, this.renderChildren())));
    }
}
DataTable.defaultProps = {
    bulkActions: [],
    style: {},
    addClass: "",
    labels: {
        actionsBar: "",
        actionsHeader: "",
    },
};
exports.default = DataTable;
//# sourceMappingURL=index.js.map