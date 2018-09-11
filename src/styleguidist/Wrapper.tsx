import * as React from 'react'
import App from "../components/App"
import ThemeProvider from "@reglendo/cxs/ThemeProvider"
import theme from "../styled/themes/ryzlink"
import {Provider} from "react-redux"
import { createStore, combineReducers } from 'redux'
import { Reducer } from '../../node_modules/light-form/dist/es'

const rootReducer = combineReducers({
    form: Reducer('form'),
});
const store = createStore(rootReducer)

export default class Wrapper extends React.PureComponent {
  render() {
    return (
        <div id="app">
        <Provider store={store}>
            <App>
                <ThemeProvider theme={theme}>
                    {this.props.children}
                </ThemeProvider>
            </App>
        </Provider>
        </div>
    )
  }
}
