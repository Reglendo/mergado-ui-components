import * as React from 'react';
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
        return <Provider store={store}>
                    {this.props.children}
                </Provider>
    }
}
//# sourceMappingURL=Wrapper.js.map