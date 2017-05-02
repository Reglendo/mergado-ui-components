import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import Button from "../../src/components/Forms/Button"
import Icon from "../../src/components/Icon"
import * as chai from "chai"


describe("Button", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
    });

    it("should render correctly button", () => {
        renderer.render(<Button icon={<Icon type="mergado" />} labels={{main: 'Button'}} />);
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props.children.length, 4);
        chai.assert.strictEqual(result.props.children[0].type, 'div');
        chai.assert.strictEqual(result.props.children[1].type, 'button');
    });

    it("should render correctly link", () => {
        renderer.render(<Button type="link" icon={<Icon type="mergado"/>} labels={{main: 'Link'}} />);
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props.children.length, 4);
        chai.assert.strictEqual(result.props.children[0].type, 'div');
        chai.assert.strictEqual(result.props.children[2].type, 'a');
    });

    it("should render correctly submit", () => {
        renderer.render(<Button type="submit" icon={<Icon type="mergado"/>} labels={{main: 'Link'}} />);
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props.children.length, 4);
        chai.assert.strictEqual(result.props.children[0].type, 'div');
        chai.assert.strictEqual(result.props.children[3].type, 'input');
    });

});