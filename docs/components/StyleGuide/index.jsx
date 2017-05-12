import update from 'react-addons-update';
import { PropTypes } from 'react';
import Icon from '../../../src/components/Icon';

import s from './StyleGuide.css';

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
`


try {
    require("../../../src/sass/main.sass")
} catch(e) { }

const StyleGuideRenderer = ({ title, components, toc, sidebar }) => {
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

    return (
    <div className={`${s.root}`}>
    		<main className={s.content}>
    			<div className={s.wrapper}>
    				<div className={`${s.components} ${!sidebar && s.withsidebar}`}>
    					{components}
    					<footer className={s.footer}>
    						Generated with <a className={s.link} href="https://github.com/styleguidist/react-styleguidist">React Styleguidist</a>
    					</footer>
    				</div>
    				{sidebar &&
    					<div className={s.sidebar}>
    			        <h1 className={s.heading}><Icon type="mergado" size="32" /> &nbsp; <span className={s.title}>{title}</span></h1>

                        {toc}
                        
                        </div>
    				}
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