import React, { Component, PropTypes } from 'react';
import isEmpty from 'lodash.isempty';
import Components from 'rsg-components/Components';
import TableOfContents from 'rsg-components/TableOfContents';
import Message from 'rsg-components/Message';
import StyleGuideRenderer from './StyleGuideRenderer';
import cookie from 'react-cookie';
import { browserHistory } from "react-router";
import _debounce from "lodash.debounce";


export default class StyleGuide extends Component {
	static propTypes = {
		config: PropTypes.object.isRequired,
		components: PropTypes.array.isRequired,
		sections: PropTypes.array.isRequired,
		sidebar: PropTypes.bool,
		singleExample: PropTypes.bool,
	};
	static defaultProps = {
		sidebar: true,
	};
	static childContextTypes = {
		codeKey: PropTypes.number.isRequired,
		config: PropTypes.object.isRequired,
		singleExample: PropTypes.bool,
	};

    constructor(props) {
      super(props);
      this.state = {
        compact: cookie.load('compact') == "1" ? true : false,
        showSidebar: cookie.load('sidebar') == "0" ? false : true,
      };
    }

	getChildContext() {
		return {
			codeKey: this.props.codeKey,
			config: this.props.config,
			singleExample: this.props.singleExample,
		};
	}

	renderComponents(components, sections, sidebar, singleExample) {
		if (!isEmpty(components) || !isEmpty(sections)) {
			return (
				<Components
					components={components}
					sections={sections}
					sidebar={sidebar}
				/>
			);
		}

		return (
			<Message>
				No components or sections found.
				Check [the `components` and `sections` options]() in your style guide config.
			</Message>
		);
	}

	renderTableOfContents(components, sections) {
		return <TableOfContents components={components} sections={sections} />;
	}

    switchCompact() {
        this.setState({
            compact: !this.state.compact
        })
        cookie.save('compact', !this.state.compact ? '1' : '0', { path: '/' });

    }

    switchSidebar() {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
        cookie.save('sidebar', !this.state.showSidebar ? '1' : '0', { path: '/' });
    }

    componentDidUpdate() {
        if(location.hash.indexOf('#_') !== -1) {
            const newHash = location.hash.replace('#_','#');
            location.hash = newHash;
        }
    }

	render() {
		let { config, components, sections, sidebar, singleExample } = this.props;

        let showSidebar = this.state.showSidebar && sidebar
		return (
			<StyleGuideRenderer
				title={config.title}
				homepageUrl={`homepage`}
				components={this.renderComponents(components, sections, sidebar, singleExample)}
				sections={sections}
				toc={this.renderTableOfContents(components, sections)}
				sidebar={showSidebar}
                compact={this.state.compact}
                switchCompact={this.switchCompact.bind(this)}
                switchSidebar={this.switchSidebar.bind(this)}
			/>
		);
	}
}


var scrollChangeHash = function() {
    if(location.hash.indexOf('#!') !== -1) {
        return
    }

    var range = document.caretRangeFromPoint(260,0); // screen coordinates of upper-left corner of a scolled area (in this case screen itself)
    if(range) {
        var hashLocator = document.getElementById('hashLocator');
        var section = range.startContainer.parentNode.closest(".ReactStyleguidist-Section__heading"); // this an upper onscreen element
        if(section) {
            hashLocator.innerHTML = '#'+section.getAttribute('id');
            browserHistory.push(location.pathname+'#'+section.getAttribute('id'));
            return;
        }
        var element = range.startContainer.parentNode.closest(".Styleguidist-Component"); // this an upper onscreen element
        if(element) {
            hashLocator.innerHTML = '#'+element.getAttribute('id');
            browserHistory.push(location.pathname+'#'+element.getAttribute('id'));
        }
    }
}

window.addEventListener('scroll', _debounce(scrollChangeHash,250));
