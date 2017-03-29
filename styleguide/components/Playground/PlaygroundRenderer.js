import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';

const s = require('./Playground.css');

const PlaygroundRenderer = ({
	code,
	showCode,
	showHtml,
	name,
	index,
	singleExample,
	evalInContext,
	onChange,
	onCodeToggle,
    onHtmlToggle
}) => {
    var preview = (<Preview code={code} evalInContext={evalInContext} />)
    var previewToString = preview
    
    // Hide unwanted text from Readme
    code = code.replace(/\/\/<hide_start[\s\S]*?\/\/hide_end>/g,'')
return (
	<div className={s.root}>
		<div className={s.preview + ' rsg--example-preview'}>
			{singleExample ? (
				<a className={s.isolatedLink} href={'#!/' + name}>⇽ Exit Isolation</a>
			) : (
				<a className={s.isolatedLink} href={'#!/' + name + '/' + index}>Open isolated ⇢</a>
			)}
			{preview}
            
            <div className={s.htmlCode} style={{ display: showHtml?'block':'none'}} ></div>
		</div>
        {showHtml ? (
			<div>
				<button type="button" className={s.hideHtml} onClick={onHtmlToggle}>
					Hide HTML
				</button>
			</div>
		) : (
            <div>
    			<button type="button" className={s.showHtml} onClick={onHtmlToggle}>
    				Show HTML
    			</button>
            </div>
		)            
        }
        
        
		{showCode ? (
			<div>
				<Editor code={code} onChange={onChange} />
				<button type="button" className={s.hideCode} onClick={onCodeToggle}>
					Hide JSX
				</button>
			</div>
		) : (
            <div>
    			<button type="button" className={s.showCode} onClick={onCodeToggle}>
    				Show JSX
    			</button>
            </div>
		)}
	</div>
)
};

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

PlaygroundRenderer.propTypes = {
	code: PropTypes.string.isRequired,
	showCode: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	evalInContext: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onCodeToggle: PropTypes.func.isRequired,
	singleExample: PropTypes.bool,
};

export default PlaygroundRenderer;
