import jsdomify from "jsdomify"

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import Toasts from "../../src/components/Toasts"
import Toast from "../../src/components/Toasts/Toast"
import * as chai from "chai"


describe("Toasts", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        jsdomify.create();
        this.currentPage = 2;
        var element = <Toasts toasts={[<Toast text="Hello toasts!" />, <Toast text="I'm second" timeout={0.1} />]} paused={false} />

        this.component = TestUtils.renderIntoDocument(element)
        this.containerDOM = () => ReactDOM.findDOMNode(this.component)
        this.toastsDOM = () => this.containerDOM().children[0].children
        renderer = TestUtils.createRenderer()
        renderer.render(element)
    });

    it("should render correctly", () => {
        const result: any = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(this.toastsDOM().length, 2);  // number of toasts
    });

    it("should add 'hidden' class to wrapper on click close button", () => {
        TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithClass(this.component,'muk-toast__button')[0])
        chai.assert.include(TestUtils.scryRenderedDOMComponentsWithClass(this.component,'muk-toast__wrapper')[0].className,
                            'hidden');
    });

});
