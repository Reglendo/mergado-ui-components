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
import {CheckboxContainer, TextInput, LittleStatus, TopNav, NavLink, Paginator} from "./index"

export interface Props {

}
export interface State {
	activePage: number;
}
class App extends React.Component<Props, State> {

    constructor(props: any){
        super(props);
        this.state = { activePage: 1 };
    }


	handlePageClicked(page: any): void {
		this.setState({ activePage: page });
	}
	

    render() {
        return (
            <div>
				<h2>Done</h2>
				<h3>paginator:</h3>
				<Paginator currentPage={this.state.activePage} lastPage={10}  onPageChange={this.handlePageClicked.bind(this)} />

				<h3>little_status:</h3>
				<LittleStatus type="inactive" title="inactive" text="inactive" />  &nbsp; 
				<LittleStatus type="success" title="success" text="success" />  &nbsp; 
				<LittleStatus type="error" title="error"  text="error" />  &nbsp; 
				<LittleStatus type="warning" title="warning" text="warning" />
				<br/>No text: <LittleStatus type="success" title="no text" />

				<hr className="separator" />
				<h2>Undone</h2>




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
