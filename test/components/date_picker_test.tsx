import jsdomify from "jsdomify"

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import DatePicker from "../../src/components/Forms/DatePicker"
import * as chai from "chai"
import * as Moment from "moment"


describe("Single date picker", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        jsdomify.create();
        this.currentPage = 2;
        var element = <DatePicker />
        this.component = TestUtils.renderIntoDocument(element)
        this.componentDOM = () => ReactDOM.findDOMNode(this.component)
        this.pickerDOM = () => this.componentDOM().children[1]
        renderer = TestUtils.createRenderer()
        renderer.render(element)
    });

    it("should render correctly", () => {
        const result: any = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(this.componentDOM().children.length, 2);
        chai.assert.strictEqual(this.pickerDOM().className, 'muk-datepicker__picker');

        var pickerWrapperElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'SingleDatePicker')
        chai.assert.strictEqual(pickerWrapperElements.length, 1);
    });

    it("should open picker when focus on input", () => {
        var inputElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateInput__input')[0]

        var pickerElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'SingleDatePicker__picker')
        chai.assert.strictEqual(pickerElements.length, 0);

        TestUtils.Simulate.focus(inputElement)

        // does picker exists?
        var pickerElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'SingleDatePicker__picker')
        chai.assert.strictEqual(pickerElements.length, 1);

        // does it display current month?
        var monthCaptionElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'CalendarMonth__caption')[1].children[0]
        chai.assert.strictEqual(monthCaptionElement.textContent, Moment().format('MMMM YYYY'));
    });


    it("should print date to input and close picker after date selected", () => {
        var inputElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateInput__input')[0]
        TestUtils.Simulate.focus(inputElement)

        var todayElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'CalendarDay--today')[0].children[0]
        TestUtils.Simulate.click(todayElement)

        // is current date in input?
        chai.assert.strictEqual(Moment().format('YYYY-MM-DD'), inputElement.getAttribute('value'));

        // does picker exists?
        var pickerElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'SingleDatePicker__picker')
        chai.assert.strictEqual(pickerElements.length, 0);
    });


    it("should empty input on click clear button", () => {
        var inputElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateInput__input')[0]
        TestUtils.Simulate.focus(inputElement)

        var todayElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'CalendarDay--today')[0].children[0]
        TestUtils.Simulate.click(todayElement)

        var clearButtonElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'SingleDatePickerInput__clear-date')[0]
        TestUtils.Simulate.click(clearButtonElement)
        // is input empty?
        chai.assert.strictEqual(inputElement.getAttribute('value'), '');
    });

});


describe("Dates range picker", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        jsdomify.create();
        this.currentPage = 2;
        var element = <DatePicker type="range" />
        this.component = TestUtils.renderIntoDocument(element)
        this.componentDOM = () => ReactDOM.findDOMNode(this.component)
        this.pickerDOM = () => this.componentDOM().children[1]
        renderer = TestUtils.createRenderer()
        renderer.render(element)
    });

    it("should render correctly", () => {
        const result: any = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
        chai.assert.strictEqual(this.componentDOM().children.length, 2);
        chai.assert.strictEqual(this.pickerDOM().className, 'muk-datepicker__picker');

        var pickerWrapperElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateRangePicker')
        chai.assert.strictEqual(pickerWrapperElements.length, 1);
    });

    it("should open picker when focus on input", () => {
        var inputElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateInput__input')[0]

        var pickerElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateRangePicker__picker')
        chai.assert.strictEqual(pickerElements.length, 0);

        TestUtils.Simulate.focus(inputElement)

        // does picker exists?
        var pickerElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateRangePicker__picker')
        chai.assert.strictEqual(pickerElements.length, 1);

        // does it display current month?
        var monthCaptionElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'CalendarMonth__caption')[1].children[0]
        chai.assert.strictEqual(monthCaptionElement.textContent, Moment().format('MMMM YYYY'));
    });
    //

    it("should print date to input and close picker after date selected", () => {
        var inputElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateInput__input')[0]
        TestUtils.Simulate.focus(inputElement)

        // click on first date
        var todayElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'CalendarDay--today')[0].children[0]
        TestUtils.Simulate.click(todayElement)

        // is current date in input?
        chai.assert.strictEqual(Moment().format('YYYY-MM-DD'), inputElement.getAttribute('value'));

        // does picker still exists?
        var pickerElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateRangePicker__picker')
        chai.assert.strictEqual(pickerElements.length, 1);

        // click on second date
        TestUtils.Simulate.click(todayElement)

        // is current date in second input?
        var inputElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateInput__input')[1]
        chai.assert.strictEqual(Moment().format('YYYY-MM-DD'), inputElement.getAttribute('value'));

        // is picker closed?
        var pickerElements = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateRangePicker__picker')
        chai.assert.strictEqual(pickerElements.length, 0);

    });

    it("should empty input on click clear button", () => {
        var inputElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateInput__input')[0]
        TestUtils.Simulate.focus(inputElement)

        var todayElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'CalendarDay--today')[0].children[0]
        TestUtils.Simulate.click(todayElement)

        var clearButtonElement = TestUtils.scryRenderedDOMComponentsWithClass(this.component,'DateRangePickerInput__clear-dates')[0]
        TestUtils.Simulate.click(clearButtonElement)

        // is input empty?
        chai.assert.strictEqual(inputElement.getAttribute('value'), '');
    });

});