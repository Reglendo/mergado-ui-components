import * as React from 'react';
import App from "../components/App";
import ThemeProvider from "@reglendo/cxs/ThemeProvider";
import { ThemeProvider as Theme } from 'emotion-theming'

import theme from "../styled/themes/ryzlink";
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { Reducer } from '@reglendo/light-form/dist/es';

const rootReducer = combineReducers({
    form: Reducer('form'),
});
const w:any = window
const store = createStore(rootReducer, w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__());

export default class Wrapper extends React.PureComponent {
    render() {
        return <ThemeProvider theme={theme}>
                <Theme theme={theme}>
                    <Provider store={store}>
                        {this.props.children}
                    </Provider>
                </Theme>
                </ThemeProvider>
    }
}
//# sourceMappingURL=Wrapper.js.map