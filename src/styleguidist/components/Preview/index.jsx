// Based on https://github.com/joelburget/react-live-editor/blob/master/live-compile.jsx

import React, { PureComponent, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { transform } from 'buble';
import PlaygroundError from 'rsg-components/PlaygroundError';
import Wrapper from 'rsg-components/Wrapper';
import ThemeProvider from '@reglendo/cxs/ThemeProvider';

import defaultTheme from '/src/styled/themes/default.ts';
import ryzlinkTheme from '/src/styled/themes/ryzlink.ts';
import cookie from 'react-cookie';

import Editor from 'rsg-components/Editor';
const s = require('../Playground/Playground.css');

import { Provider } from 'react-redux'
import {reducer as formReducer} from "redux-form"

import { createStore, combineReducers } from 'redux'
import {Field, reduxForm} from "redux-form"

const compileCode = code => transform(code, {
	objectAssign: 'Object.assign',
}).code;


function validate(values: Object) {
    let errors = {
        text: ""
    }

    errors.text= "ERROR"
    return errors
}

const rootReducer = combineReducers({
    form: formReducer
});

var store = createStore(rootReducer)

export default class Preview extends PureComponent {
	static propTypes = {
		code: PropTypes.string.isRequired,
		evalInContext: PropTypes.func.isRequired,
        innerHtml: PropTypes.string,
        config: PropTypes.object,
	};

	constructor() {
		super();
		this.state = {
			error: null,
            innerHtml: '',
            code: null,
            preserved: null,
			theme: cookie.load('theme') || "ryzlink",
		};
		this.componentState = {};
	}

    componentWillUpdate(nextProps, nextState) {
        if(nextState.error !== null) {
            // preserve code to disable update when error occured
            this.state.preserved = this.state.code
        } else {
            this.state.code = this.props.code
        }
    }

	componentDidMount() {
        this.state.preserved = this.props.code
        // try {
          this.executeCode(this.props.code);
        // } catch (err) {
        //     console.log(err)
        //     this.setState({
        //         error: err.toString(),
        //     });
        // }

	}

	componentDidUpdate(prevProps) {
		if (this.props.code !== prevProps.code || this.props.showHtml !== prevProps.showHtml) {
            this.setState({
    			error: null,
    		});

            let source = this.props.code;
            // try {
                this.executeCode(source);
                this.state.preserved = source
            // } catch (err) {
             //    console.log(err)
    		// 	this.setState({
    		// 		error: err.toString(),
    		// 	});
             //    source = this.state.preserved
             //    this.executeCode(source)
    		// }


		}
	}

	executeCode(code) {
		ReactDOM.unmountComponentAtNode(this.mountNode);

		if (!code) {
			return;
		}

			const compiledCode = compileCode(code);

			// Initiate state and set with the callback in the bottom component;
			// Workaround for https://github.com/styleguidist/react-styleguidist/issues/155 - missed props on first render
			// when using initialState
			const initCode = `
				var React = {};  // React.createElement will throw on first load
				var initialState = {};
				try {
					${compiledCode}
				}
				catch (e) {
					// Ignoring
				}
				finally {
					__initialStateCB(initialState);
				}
			`;

			// evalInContext returns a function which takes state, setState and a callback to handle the
			// initial state and returns the evaluated code
			const initial = this.props.evalInContext(initCode);

			// 1) setup initialState so that we don't get an error;
			// 2) use require data or make other setup for the example component;
			// 3) return the example component
			const exampleComponentCode = `
				var initialState = {};
				return eval(${JSON.stringify(compiledCode)});
			`;

			const exampleComponent = this.props.evalInContext(exampleComponentCode);

			// Wrap everything in a react component to leverage the state management of this component
			class PreviewComponent extends PureComponent { // eslint-disable-line react/no-multi-comp
				constructor() {
					super();

					const state = {};
					const initialStateCB = (initialState) => {
						Object.assign(state, initialState);
					};
					const setStateError = (partialState) => {
						const err = 'Calling setState to setup the initial state is deprecated. Use\ninitialState = ';
						Object.assign(state, { error: err + JSON.stringify(partialState) + ';' });
					};

					initial({}, setStateError, initialStateCB);
					this.state = state;
				}

				render() {
					const { error } = this.state;
					if (error) {
						return <PlaygroundError message={error} />;
					}
					return exampleComponent(this.state, this.setState.bind(this), null);
				}
			}

            const Form = reduxForm({
                form: "SampleForm",
                validate,
                initialValues: {
                    checkbox1: 1,
                    firstname: '!!!Hello world!!!!',
                    favcolor: "blue",
                    superpower1: 1,
                    video: "Video",
					queries: [1001,1000],
                }
            })(PreviewComponent)

			const theme = this.state.theme === "ryzlink" ? ryzlinkTheme : defaultTheme
			const wrappedComponent = (
                    <Provider store={store}>
                        <ThemeProvider theme={theme}>
                            <Wrapper>
                                <Form />
                            </Wrapper>
                        </ThemeProvider>
                    </Provider>
			);

			ReactDOM.render(wrappedComponent, this.mountNode);
            if(this.props.showHtml) {
                var htmlcode = this.formatXml(ReactDOMServer.renderToStaticMarkup(wrappedComponent))
                this.props.changeHtml(htmlcode)
            }

    }

    shouldComponentUpdate() {
	    return false
    }

	render() {
		const { error } = this.state;
		return (
			<div>
				{error && <PlaygroundError message={error} />}
				<div className={s.liveExample} ref={ref => (this.mountNode = ref)}></div>
			</div>
		);
	}

    formatXml(xml) {
        var reg = /(>)\s*(<)(\/*)/g; // updated Mar 30, 2015
        var wsexp = / *(.*) +\n/g;
        var contexp = /(<.+>)(.+\n)/g;
        xml = xml.replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
        var pad = 0;
        var formatted = '';
        var lines = xml.split('\n');
        var indent = 0;
        var lastType = 'other';
        // 4 types of tags - single, closing, opening, other (text, doctype, comment) - 4*4 = 16 transitions
        var transitions = {
            'single->single': 0,
            'single->closing': -1,
            'single->opening': 0,
            'single->other': 0,
            'closing->single': 0,
            'closing->closing': -1,
            'closing->opening': 0,
            'closing->other': 0,
            'opening->single': 1,
            'opening->closing': 0,
            'opening->opening': 1,
            'opening->other': 1,
            'other->single': 0,
            'other->closing': -1,
            'other->opening': 0,
            'other->other': 0
        };

        for (var i = 0; i < lines.length; i++) {
            var ln = lines[i];
            var single = Boolean(ln.match(/<.+\/>/)); // is this line a single tag? ex. <br />
            var closing = Boolean(ln.match(/<\/.+>/)); // is this a closing tag? ex. </a>
            var opening = Boolean(ln.match(/<[^!].*>/)); // is this even a tag (that's not <!something>)
            var type = single ? 'single' : closing ? 'closing' : opening ? 'opening' : 'other';
            var fromTo = lastType + '->' + type;
            lastType = type;
            var padding = '';

            indent += transitions[fromTo];
            for (var j = 0; j < indent; j++) {
                padding += '\t';
            }
            if (fromTo == 'opening->closing')
                formatted = formatted.substr(0, formatted.length - 1) + ln + '\n'; // substr removes line break (\n) from prev loop
            else
                formatted += padding + ln + '\n';
        }

        return formatted;
    }
}
