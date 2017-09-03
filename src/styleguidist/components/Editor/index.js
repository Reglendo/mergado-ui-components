// CodeMirror
import 'codemirror/mode/jsx/jsx';
import 'codemirror/lib/codemirror.css';
import 'rsg-codemirror-theme.css';
import s from './Editor.css';

import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import Codemirror from 'react-codemirror';
import EditorRenderer from './EditorRenderer';

const codemirrorOptions = {
    mode: 'jsx',
    lineNumbers: false,
    lineWrapping: true,
    smartIndent: false,
    matchBrackets: true,
    viewportMargin: Infinity,
};

const UPDATE_DELAY = 10;

export default class Editor extends Component {
    static propTypes = {
        code: PropTypes.string,
        htmlcode: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    };
    static contextTypes = {
        config: PropTypes.object.isRequired,
    };

    constructor() {
        super();
        this.handleChange = debounce(this.handleChange.bind(this), UPDATE_DELAY);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.htmlcode !== nextProps.htmlcode) {
            return true
        }
        return false;
    }

    handleChange(newCode) {
        this.props.onChange(newCode);
    }

    render() {
        const { code, htmlcode, theme } = this.props;
        const { highlightTheme } = this.context.config;
        const options = {
            ...codemirrorOptions,
            theme: theme ? theme : highlightTheme,
            lineNumbers: true
        };
        return (
            <EditorRenderer>
                <Codemirror value={code || htmlcode} onChange={this.handleChange} options={options} />
            </EditorRenderer>
        );
    }
}
