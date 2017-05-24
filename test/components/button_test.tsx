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
        chai.assert.strictEqual(result.props.children.length, 5);
        chai.assert.strictEqual(result.props.children[0].type, 'button');
    });

    it("should render correctly href", () => {
        renderer.render(<Button type="href" icon={<Icon type="mergado"/>} labels={{main: 'Link'}} />);
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props.children.length, 5);
        chai.assert.strictEqual(result.props.children[4].type, 'a');
    });

    it("should render correctly link", () => {
        renderer.render(<Button type="link" icon={<Icon type="mergado"/>} labels={{main: 'Link'}} />);
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props.children.length, 5);
        chai.assert.strictEqual(result.props.children[1].type.displayName, 'Link');
    });


    it("should render correctly submit", () => {
        renderer.render(<Button type="submit" icon={<Icon type="mergado"/>} labels={{main: 'Link'}} />);
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props.children.length, 5);
        chai.assert.strictEqual(result.props.children[2].type, 'input');
    });

});
