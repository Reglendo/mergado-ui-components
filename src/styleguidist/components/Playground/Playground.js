import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import PlaygroundRenderer from './PlaygroundRenderer';
import cookie from 'react-cookie';

export default class Playground extends Component {
	static propTypes = {
		code: PropTypes.string.isRequired,
		evalInContext: PropTypes.func.isRequired,
		index: PropTypes.number.isRequired,
		name: PropTypes.string,
        innerHtml: PropTypes.string,
	};
	static contextTypes = {
		config: PropTypes.object.isRequired,
		singleExample: PropTypes.bool,
	};

	constructor(props, context) {
		super(props, context);
		const { code } = props;
        const showCode = cookie.load('show_code_' + props.name + '_' + props.index) == "1" ? true : false;
        const showHtml = cookie.load('show_html_' + props.name + '_' + props.index) == "1" ? true : false;
        const innerHtml = '';
		this.state = {
			code,
			showCode,
            showHtml,
			innerHtml
		};
	}

	componentWillReceiveProps(nextProps) {
		const { code } = nextProps;
		this.setState({
			code,
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextState.code !== this.state.code ||
			nextState.showCode !== this.state.showCode ||
			nextState.showHtml !== this.state.showHtml ||
            nextState.innerHtml !== this.state.innerHtml
        );
	}

	componentWillUnmount() {
		// clear pending changes before unmount
		if (this.queuedChange) {
			this.queuedChange.cancel();
		}
	}

	handleChange(code) {
		// clear pending changes before proceed
		if (this.queuedChange) {
			this.queuedChange.cancel();
		}

		// stored update action
		const queuedChange = () => this.setState({
			code,
		});

		const { previewDelay } = this.context.config;

		if (previewDelay) {
			// if previewDelay is enabled debounce the code
			this.queuedChange = debounce(queuedChange, previewDelay);
			this.queuedChange();
		}
		else {
			// otherwise execute it
			queuedChange();
		}
	}

	handleCodeToggle() {
		if(this.props.name) {
			cookie.save('show_code_' + this.props.name + '_' + this.props.index, !this.state.showCode ? '1' : '0', { path: '/' });
		}
		this.setState({
			showCode: !this.state.showCode,
		});
	}

    handleChangeHtml(html) {
		this.setState({
            innerHtml: html
		})
    }


	handleHtmlToggle() {
		if(this.props.name) {
			cookie.save('show_html_' + this.props.name + '_' + this.props.index, !this.state.showHtml ? '1' : '0', { path: '/' });
		}
		this.setState({
			showHtml: !this.state.showHtml,
		});
	}

	render() {
		const { code, showCode,showHtml,innerHtml } = this.state;
		const { evalInContext, index, name } = this.props;
		const { singleExample } = this.context;
		return (
			<PlaygroundRenderer
				code={code}
				showCode={showCode}
				showHtml={showHtml}
				index={index}
				name={name}
				singleExample={singleExample}
				evalInContext={evalInContext}
				onChange={code => this.handleChange(code)}
				onCodeToggle={() => this.handleCodeToggle()}
				onHtmlToggle={() => this.handleHtmlToggle()}
				onHtmlChange={(e) => this.handleChangeHtml(e)}
				innerHtml={innerHtml}
			/>
		);
	}
}
