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
    onHtmlToggle,
    onHtmlChange,
    innerHtml
}) => {
return (
	<div className={s.root}>
		<div className={s.preview + ' rsg--example-preview'}>
            <Preview code={code} evalInContext={evalInContext} changeHtml={onHtmlChange} showHtml={showHtml} />
            <div className={s.jsxCode} style={{ display: showCode?'block':'none', borderTop: '1px solid #f5ecd5'}} >

                {showCode &&
                    (<div>
                        <div className={s.header}>
                            JSX code
                            <button type="button" className={s.closeCode} onClick={onCodeToggle}>
                                ✕
                            </button>
                        </div>
                        <Editor code={code} onChange={onChange} />
                        </div>
                )}
            </div>
            <div className={s.htmlCode} style={{ display: showHtml?'block':'none'}} >
                {innerHtml && (
                    <div>
                        <div className={s.htmlheader}>
                            HTML code
                            <button type="button" className={s.closeCode} onClick={onHtmlToggle}>
                                ✕
                            </button>
                        </div>
                    <Editor htmlcode={innerHtml} theme="default" onChange={() => false}  />
                    </div>
                )}
			</div>
		</div>
        <div className={s.buttons}>
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

	</div>
)
};

PlaygroundRenderer.propTypes = {
	code: PropTypes.string.isRequired,
	showCode: PropTypes.bool.isRequired,
	name: PropTypes.string,
	index: PropTypes.number.isRequired,
	evalInContext: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onCodeToggle: PropTypes.func.isRequired,
	singleExample: PropTypes.bool,
    innerHtml: PropTypes.string
};

export default PlaygroundRenderer;
