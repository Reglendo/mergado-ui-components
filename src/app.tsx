import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import {reducer as formReducer} from "redux-form"


import { createStore, combineReducers } from 'redux'



const rootReducer = combineReducers({
    form: formReducer
});

var store = createStore(rootReducer)


import {Field, reduxForm} from "redux-form"
import {CheckboxContainer, TextInput, LittleStatus, TopNav, NavLink} from "./index"

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
				
				<div style={{marginTop: "10px", padding: "10px"}}>
					<h3>Top Nav:</h3>
					<TopNav links={[
						React.createElement(NavLink, { key: 1, active: true, link: (<a href='#1'>First</a>) }),
						React.createElement(NavLink, { key: 2, active: false, link: (<a href='#2'>Second</a>) }),
						React.createElement(NavLink, { key: 3, active: false, link: (<a href='#3'>Third</a>) }),
					]} />

					<h3>Little Status:</h3>
					<LittleStatus type="inactive" title="Inactive" /> Inactive  &nbsp; 
					<LittleStatus type="ok" title="Ok" /> Ok  &nbsp; 
					<LittleStatus type="failed" title="Failed" /> Failed  &nbsp; 
					<LittleStatus type="warning" title="Warning" /> Warning
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
