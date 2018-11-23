import * as React from 'react';
import App from "../components/App";
import ThemeProvider from "@reglendo/cxs/ThemeProvider";
import theme from "../styled/themes/ryzlink";
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { Reducer } from '../../node_modules/light-form/dist/es';
const rootReducer = combineReducers({
    form: Reducer('form'),
});
const w:any = window
const store = createStore(rootReducer, w.devToolsExtension && w.devToolsExtension());
export default class Wrapper extends React.PureComponent {
    render() {
        return (React.createElement("div", { id: "app" },
            React.createElement(Provider, { store: store },
                React.createElement(App, null,
                    React.createElement(ThemeProvider, { theme: theme }, this.props.children)))));
    }
}
//# sourceMappingURL=Wrapper.js.map