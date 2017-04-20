import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import Icon from "../../src/components/Icon"
import * as chai from "chai"


describe("Icon", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<Icon type="mergado" text="I'm icon!" />);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "span");
        chai.assert.strictEqual(result.props.children.length, 2);
        chai.assert.strictEqual(result.props.children[0].type, 'svg');
        chai.assert.strictEqual(result.props.children[1].type, 'span');
        chai.assert.strictEqual(result.props.children[1].props.children, 'I\'m icon!');
    });
});