import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import Spinner from "../../src/components/Spinner"
import * as chai from "chai"


describe("Spinner", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<Spinner size={50}>Hello spinner!</Spinner>);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props.className, 'muk-spinner muk-spinner--default');
        chai.assert.strictEqual(result.props.style.width, 50);
    });

    it("should stop spinning and show content", () => {
        renderer.render(<Spinner loaded={true} size={50}>Hello spinner!</Spinner>);
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "span");
        chai.assert.strictEqual(result.props.children, "Hello spinner!");
    });
});