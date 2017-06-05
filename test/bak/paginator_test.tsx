import jsdomify from "jsdomify"

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import Paginator from "../../src/components/Paginator"
import * as chai from "chai"


describe("Paginator", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        jsdomify.create();
        this.currentPage = 2;
        var element = <Paginator firstPage={1} lastPage={10} showFirstAndLast={true} currentPage={2} maxLinks={7}
                                 onPageChange={(page) => { this.currentPage = page; } }/>

        this.component = TestUtils.renderIntoDocument(element)
        this.paginatorDOM = () => ReactDOM.findDOMNode(this.component)
        this.buttonsDOM = () => this.paginatorDOM().children
        this.linksDOM = () => {
            let linksDOM = []
            let buttonsDOM = this.buttonsDOM()
            for (let index = 0; index < buttonsDOM.length; ++index) {
                if (buttonsDOM[index].tagName === "A") {
                    linksDOM.push(buttonsDOM[index]);
                }
            }
            return linksDOM;
        }
        renderer = TestUtils.createRenderer()
        renderer.render(element)
    });

    it("should render correctly", () => {
        const result: any = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(result.props['data-active'], 2);  // should have correct active page attribute
        chai.assert.strictEqual(this.buttonsDOM().length, 11);   // number of buttons
        chai.assert.strictEqual(this.linksDOM().length, 10);     // number of active buttons
        chai.assert.strictEqual(result.props.children[2][1].type, 'span'); // selected page number should be span
    });

    it("should change page on click", () => {
        TestUtils.Simulate.click((this.linksDOM())[0])
        chai.assert.strictEqual(this.currentPage, 1);
    });

    it("should render correct buttons after page has been changed", () => {
        TestUtils.Simulate.click((this.linksDOM())[5])
        this.component = TestUtils.renderIntoDocument(
                            <Paginator firstPage={1} lastPage={10} currentPage={5} maxLinks={7}
                                      onPageChange={(page) => { this.currentPage = page; } }/>
                        )
        chai.assert.strictEqual(this.paginatorDOM().children[0].text, 'Previous');
        chai.assert.strictEqual(this.paginatorDOM().children[1].text, '2');
        chai.assert.strictEqual(this.paginatorDOM().children[2].text, '3');
        chai.assert.strictEqual(this.paginatorDOM().children[3].text, '4');
        chai.assert.strictEqual(this.paginatorDOM().children[4].tagName, 'SPAN');
        chai.assert.strictEqual(this.paginatorDOM().children[5].text, '6');
        chai.assert.strictEqual(this.paginatorDOM().children[6].text, '7');
        chai.assert.strictEqual(this.paginatorDOM().children[7].text, '8');
        chai.assert.strictEqual(this.paginatorDOM().children[8].text, 'Next');
    });

});