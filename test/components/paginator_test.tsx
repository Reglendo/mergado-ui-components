import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import Paginator from "../../src/paginator"
import * as chai from "chai"


describe("Paginator", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<Paginator currentPage={1}
                                onPageChange={() => {}} />);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
    });
});