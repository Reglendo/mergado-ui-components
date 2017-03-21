import update from 'react-addons-update';
import { PropTypes } from 'react';


const StyleGuideRenderer = ({ title, components, toc, sidebar }) => {

    var props = components.props.components.filter(
        (obj) => { return obj.props.description !== 'disable-styleguide' } )

    var filtered = update(components, { props: { components: { $set: props } } })

return (
	<div>
		<main>
			<h1>{title}</h1>
			<div>
				<div>
					{filtered}
					<footer>
						Generated with <a  href="https://github.com/styleguidist/react-styleguidist">React Styleguidist</a>
					</footer>
				</div>
				{sidebar &&
					<div>{toc}</div>
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