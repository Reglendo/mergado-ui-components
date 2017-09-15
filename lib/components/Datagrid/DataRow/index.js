"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const config_1 = require("../../../config");
const DataCell_1 = require("../DataCell");
const Checkbox_1 = require("../../../components/Forms/Checkbox");
const Row = styled_components_1.default.tr `
    background: #fff;

    color: ${props => props.disabled ? "#ccc" : "#000"};

    .muk-icon--pause,.muk-icon--play {
        color: #333;
    }

    &:not(.no-hover):hover {
        .${config_1.prefix}datagrid__cell {
            background: #fcfaf4
        }
    }
`;
class DataRow extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__row";
    }
    render() {
        const { style, addClass, inactive, dataId, actions } = this.props;
        return (React.createElement(Row, { className: `${this.name} ${inactive && this.name + `--inactive`} ${addClass}`, disabled: inactive, "data-id": dataId, style: style },
            actions.length > 0 &&
                React.createElement(DataCell_1.default, null,
                    React.createElement(Checkbox_1.default, { input: { "onChange": evt => this.props.handleSelectRow(dataId),
                            "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                            "data-id": dataId,
                            "className": "bulk-action-item",
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
    selectedRows: [],
};
exports.default = DataRow;
//# sourceMappingURL=index.js.map