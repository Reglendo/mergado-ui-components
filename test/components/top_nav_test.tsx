import jsdomify from "jsdomify"

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import TopNav from "../../src/components/TopNav"
import NavLink from "../../src/components/TopNav/NavLink"
import * as chai from "chai"


describe("Top navigation", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        jsdomify.create();
        this.currentPage = 2;
        var element = <TopNav links={[<NavLink key={1} active={true} />, <NavLink key={2} />, <NavLink key={3} />]} />

        this.component = TestUtils.renderIntoDocument(element)
        this.containerDOM = () => ReactDOM.findDOMNode(this.component)
        this.linksDOM = () => this.containerDOM().children[0].children[0].children
        renderer = TestUtils.createRenderer()
        renderer.render(element)
    });

    it("should render correctly", () => {
        const result: any = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "nav");
        chai.assert.strictEqual(this.linksDOM().length, 3);             // number of links
        chai.assert.include(this.linksDOM()[0].className,'active')      // first link is active
        chai.assert.notInclude(this.linksDOM()[1].className,'active')   // others are not
    });

});
