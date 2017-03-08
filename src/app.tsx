import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import {reducer as formReducer} from "redux-form"


import { createStore, combineReducers } from 'redux'



const rootReducer = combineReducers({
    form: formReducer
});

var store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())


import {Field, reduxForm} from "redux-form"
import {CheckboxContainer, TextInput} from "./index"

export interface Props {

}
export interface State {

}
class App extends React.Component<Props, State> {

    render() {
        return (
            <div>
                <div style={{width: "400px"}} >
                    <Field name={"queries"} component={CheckboxContainer} props={{availibleQueries: [{
                        id: 1,
                        name: "QueryName",
                        productCount: 50
                    },{
                        id: 2,
                        name: "♥ALLPRODUCTS♥",
                        productCount: 100
                    },{
                        id: 3,
                        name: "All a",
                        productCount: 100
                    }]}}/>

                    <Field name={"text"} component={TextInput} />
                </div>
            </div>
        )
    }
}

function validate(values: Object) {
    let errors = {
        text: ""
    }

    errors.text= "ERROR"

    console.log(errors)
    return errors
}

const Form = reduxForm({
    form: "SampleForm",
    validate,
    initialValues: {
        "queries": [1],
        "text": "Default"
    }
})(App)

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>
  , document.querySelector('.container'));
