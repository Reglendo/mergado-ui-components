"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("../../config");
class Placeholder extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "placeholder";
    }
    render() {
        const { addClass, style, width, height } = this.props;
        let className = `${this.name} ${addClass ? addClass : ''}`;
        let object = Object;
        let styles = object.assign({}, style, { paddingBottom: `${(height * 100 / width)}%` });
        return (React.createElement("div", { className: className, style: styles },
            React.createElement("div", { className: `${this.name}__shadow` },
                React.createElement("div", { className: `${this.name}__wrapper` },
                    React.createElement("div", { className: `${this.name}__container` }, this.props.children)))));
    }
}
Placeholder.defaultProps = {
    width: 100,
    height: 100
};
exports.default = Placeholder;
//# sourceMappingURL=index.js.map