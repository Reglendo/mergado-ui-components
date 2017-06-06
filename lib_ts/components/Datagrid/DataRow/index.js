"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const DataCell_1 = require("../DataCell");
const Checkbox_1 = require("components/Forms/Checkbox");
const unique_id_1 = require("helpers/unique_id");
class DataRow extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "datagrid__row";
        this.state = {
            checked: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.checkedAll !== nextProps.checkedAll) {
            this.setState({
                checked: nextProps.checkedAll,
            });
        }
    }
    render() {
        const { style, addClass, inactive, dataId, actions } = this.props;
        return (React.createElement("tr", { className: `${this.name} ${inactive && this.name + `--inactive`} ${addClass}`, key: unique_id_1.default(), "data-id": dataId, style: style },
            actions.length > 0 &&
                React.createElement(DataCell_1.default, null,
                    React.createElement(Checkbox_1.default, { checked: this.state.checked, input: { className: "bulk-action-item" }, "data-id": dataId, onChange: (evt) => {
                            this.setState({ checked: !this.state.checked });
                        } })),
            this.props.children));
    }
}
DataRow.defaultProps = {
    addClass: "",
    style: {},
    inactive: false,
    dataId: "",
    actions: [],
};
exports.default = DataRow;
//# sourceMappingURL=index.js.map