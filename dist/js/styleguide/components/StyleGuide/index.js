"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var StyleGuide_css_1 = require("./StyleGuide.css");
var StyleGuideRenderer = function (_a) {
    var title = _a.title, components = _a.components, toc = _a.toc, sidebar = _a.sidebar;
    return (React.createElement("div", { className: StyleGuide_css_1.default.root },
        React.createElement("main", { className: StyleGuide_css_1.default.content },
            React.createElement("h1", { className: StyleGuide_css_1.default.heading }, title),
            React.createElement("div", { className: StyleGuide_css_1.default.wrapper },
                React.createElement("div", { className: StyleGuide_css_1.default.components },
                    components,
                    React.createElement("footer", { className: StyleGuide_css_1.default.footer },
                        "Generated with ",
                        React.createElement("a", { className: StyleGuide_css_1.default.link, href: "https://github.com/styleguidist/react-styleguidist" }, "React Styleguidist"))),
                sidebar &&
                    React.createElement("div", { className: StyleGuide_css_1.default.sidebar }, toc)))));
};
StyleGuideRenderer.propTypes = {
    title: react_1.PropTypes.string.isRequired,
    components: react_1.PropTypes.object.isRequired,
    toc: react_1.PropTypes.node.isRequired,
    sidebar: react_1.PropTypes.bool,
};
exports.default = StyleGuideRenderer;
//# sourceMappingURL=index.js.map