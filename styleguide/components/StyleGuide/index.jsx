import update from 'react-addons-update';
import { PropTypes } from 'react';
import Icon from '../../../src/components/Icon';

import s from './StyleGuide.css';

const StyleGuideRenderer = ({ title, components, toc, sidebar }) => {

    var props = components.props.components.filter(
        (obj) => { return obj.props.description !== 'disable-styleguide' } )

    var filtered = update(components, { props: { components: { $set: props } } })

    return (
    <div className={s.root}>
    		<main className={s.content}>
    			<h1 className={s.heading}><Icon type="mergado" size="32" /> &nbsp; {title}</h1>
    			<div className={s.wrapper}>
    				<div className={s.components}>
    					{filtered}
    					<footer className={s.footer}>
    						Generated with <a className={s.link} href="https://github.com/styleguidist/react-styleguidist">React Styleguidist</a>
    					</footer>
    				</div>
    				{sidebar &&
    					<div className={s.sidebar}>{toc}</div>
    				}
    			</div>
    		</main>
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