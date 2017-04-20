/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
import * as Moment from "moment";
export interface Props extends InputProps {
    type?: 'single' | 'range';
    numberOfMonths?: number;
    minimumDays?: number;
    locale?: string;
    labels?: {
        main: string | JSX.Element;
        placeholder: string;
        invalid: string | JSX.Element;
        title: string;
        placeholderFrom: string;
        placeholderTo: string;
    };
    defaults_single?: {};
    defaults_range?: {};
}
export interface State {
    startDate: Moment.Moment | null;
    endDate: Moment.Moment | null;
    focused: boolean | "startDate" | "endDate";
}
declare class DatePicker extends React.Component<Props, State> {
    readonly name: string;
    readonly form: string;
    static defaultProps: Props;
    constructor(props: Props);
    onDateChange(date: any): void;
    onDatesChange(dates: any): void;
    onFocusChange(action: any): void;
    render(): JSX.Element;
}
export default DatePicker;
