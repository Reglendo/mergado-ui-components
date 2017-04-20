import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import LittleStatus from "../../src/components/LittleStatus"
import * as chai from "chai"


describe("LittleStatus", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<LittleStatus title="Little status" type="warning" text="Hello status" />);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "span");
        chai.assert.strictEqual(result.props.children.length, 2);
        chai.assert.strictEqual(result.props.children[0].type, 'span');
        chai.assert.strictEqual(result.props.children[0].props.className, 'muk-little_status__indikator tooltip');
        chai.assert.strictEqual(result.props.children[1].type, 'span');
        chai.assert.strictEqual(result.props.children[1].props.className, 'muk-little_status__text');
        chai.assert.strictEqual(result.props.children[1].props.children[1], 'Hello status');
    });
});