import update from 'react-addons-update';
import { PropTypes } from 'react';
import Icon from 'components/Icon';

import s from './StyleGuide.css';
import c from '../ReactComponent/ReactComponent.css';

import p from '../Playground/Playground.css';

const style = `
            .ReactStyleguidist-TableOfContents__root .ReactStyleguidist-colors__link {
                color: white !important;
                font-size: 1.2em;
                line-height: 1.5em;
                transition: color 0.2s;
            }

            .ReactStyleguidist-TableOfContents__root .ReactStyleguidist-colors__link:hover {
                color: rgba(255,255,255,0.6) !important;
            }

            .ReactStyleguidist-Playground__preview {
                background: #f5ecd5;
            }

            .ReactStyleguidist-TableOfContents__search {
                width: 210px;
                border: none;
                outline: none;
                border-radius: 0;
            }

            body {
                overflow: hidden;
                position: relative;
            }
`


try {
    require("../../../sass/main.sass")
} catch(e) { }
var json = require("../../../../package.json")

const StyleGuideRenderer = ({ title, components, toc, sidebar, compact, switchCompact, switchSidebar }) => {
    var exported = [];
    var components = update(components, { props: { sections: { $set: components.props.sections.map((obj) => {

        var filtered = obj.components.filter(
            (obj) => {
                if(exported.indexOf(obj.pathLine) !== -1) {
                    return false;
                }
                exported.push(obj.pathLine);
                return obj.props.description !== 'disable-styleguide'
            })
        return update(obj, { components: { $set: filtered } })
    }) } } })

    var exported = [];
    var toc = update(toc, { props: { sections: { $set: toc.props.sections.map((obj) => {
        var filtered = obj.components.filter(
            (obj) => {
                if(exported.indexOf(obj.pathLine) !== -1) {
                    return false;
                }
                exported.push(obj.pathLine);
                return obj.props.description !== 'disable-styleguide'
            })
        return update(obj, { components: { $set: filtered } })
    }) } } })

    const compactStyle = `

        .${c.meta} {
            display: none;
        }

        .${c.root.replace(/ /g,'.')} {
            margin-bottom: 0;
        }

        .${c.examples} {
            padding: 0;
            background: transparent;
        }


        .${p.showCode.replace(/ /g,'.')},
        .${p.showHtml.replace(/ /g,'.')} {
            display: none;
        }

        .${p.root.replace(/ /g,'.')} {
            margin-bottom: 0;
        }


        .ReactStyleguidist-Markdown__p, .ReactStyleguidist-Markdown__ul, .ReactStyleguidist-Markdown__ol, .ReactStyleguidist-Markdown__blockquote, .ReactStyleguidist-Markdown__table, .ReactStyleguidist-Markdown__hr, .ReactStyleguidist-Markdown__h3, .ReactStyleguidist-Markdown__h4, .ReactStyleguidist-Markdown__h5, .ReactStyleguidist-Markdown__h6 {
            margin-bottom: 0;
        }

        .ReactStyleguidist-Markdown__p {
            display: none;
        }

    `

    return (
    <div className={`${s.root}`}>
    		<main className={s.content}>
    			<div className={s.wrapper}>
    				<div className={`${s.components} ${!sidebar && s.withsidebar}`}>
                        <div className={s.buttons}>
                            <button onClick={switchCompact} className={s.toggleCompact}
                                    style={{float: 'right',
                                            background: compact?'rgba(127, 186, 44, 0.5)':'rgba(0, 0, 0, 0.27)'}}>Compact</button>
                            <button onClick={switchSidebar} className={s.toggleCompact}
                                    style={{float: 'right', background: !sidebar?'rgba(127, 186, 44, 0.5)':'rgba(0, 0, 0, 0.27)'}}>Hide sidebar</button>
                            <button className={s.toggleCompact} id="hashLocator"
                                    onClick={() => { location.hash = location.hash.replace('#','#_') }}
                                    style={{float: 'right'}}> # </button>
                        </div>
    					{components}
    					<footer className={s.footer}>
    						Generated with <a className={s.link} href="https://github.com/styleguidist/react-styleguidist">React Styleguidist</a>
    					</footer>
    				</div>
    				{sidebar &&
    					<div className={s.sidebar}>
    			        <h1 className={s.heading}>
                            <span style={{display: 'inline-block'}}>
                                <Icon type="mergado" size="32" text={title}/>
                                <br/>
                                <span style={{fontSize: '10px', float: 'right', paddingRight: '5px'}}>{json.version}</span>
                            </span>
                        </h1>

                        {toc}

                        </div>
    				}

                    <style>
                        {compact && compactStyle}
                    </style>
    			</div>
    		</main>
            <style>
                {style}
            </style>
    	</div>
    );
}

StyleGuideRenderer.propTypes = {
	title: PropTypes.string.isRequired,
	components: PropTypes.object.isRequired,
	toc: PropTypes.node.isRequired,
	sidebar: PropTypes.bool,
};

export default StyleGuideRenderer;
