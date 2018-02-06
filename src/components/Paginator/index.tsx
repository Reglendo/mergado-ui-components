import * as React from "react"
import css from "cxs/component"
import {Div} from "../../components/Layout"

import {prefix} from "../../config"
import uniqueId from "../../helpers/unique_id"

export interface Props {
    /** Active page number */
    currentPage: number
    /** Callback fired when page change */
    onPageChange: (page: number) => any
    /** First page number */
    firstPage?: number
    /** Last page number */
    lastPage?: number
    /** Whether to show 'Next' and 'Previous' buttons */
    showPrevAndNext?: boolean
    /** Whether to show 'First' and 'Last' buttons */
    showFirstAndLast?: boolean
    /** Text label of button 'Last' */
    labelLast?: string
    /** Text label of button 'First' */
    labelFirst?: string
    /** Text label of button 'Next' */
    labelNext?: string
    /** Text label of button 'Previous' */
    labelPrevious?: string
    /** Maximum number of shown pages at once */
    maxLinks?: number
    style?: any
}

export interface State {
    id: string,
    current: number
}

export class Paginator extends React.Component<Props, State> {

    private readonly name = prefix + "paginator";

    public static defaultProps: Props = {
        currentPage: 1,
        onPageChange: () => {
        },
        firstPage: 1,
        lastPage: 1,
        showPrevAndNext: true,
        showFirstAndLast: false,
        labelLast: "« Last",
        labelFirst: "First »",
        labelNext: "Next",
        labelPrevious: "Previous",
        maxLinks: 5,
        style: {},
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            id: uniqueId(),
            current: 2,
        }
    }

    protected renderButton(label: any, page: number, clickable: boolean, active: boolean = false): JSX.Element {
        const key = `${this.state.id}-${label}-${page}`
        const classLink = `${this.name}__item link-class`
        let classDisabled = `${this.name}__item ${this.name}__item--disabled`
        if (active) {
            classDisabled = `${this.name}__item ${this.name}__item--active`
        }
        if (clickable) {
            return <Button className={classLink} href="#" onClick={(evt) => {this.pageClicked(evt, page)} }
                      key={key}>{label}</Button>
        } else if(active) {
            return <Active className={classDisabled} key={key}>{label}</Active>
        } else {
            return <Disabled className={classDisabled} key={key}>{label}</Disabled>
        }
    }

    protected renderMainButtons(): JSX.Element[] {
        const buttons: JSX.Element[] = []

        let range: number
        if (this.props.maxLinks % 2 === 0) {
            range = (this.props.maxLinks - 2) / 2
        } else {
            range = (this.props.maxLinks - 1) / 2
        }

        let topLimit: number = this.props.currentPage + range
        let bottomLimit: number = this.props.currentPage - range

        if (topLimit > this.props.lastPage) {
            const diff: number = topLimit - this.props.lastPage
            topLimit -= diff
            bottomLimit -= diff
        }

        if (bottomLimit < 1) {
            const diff: number = Math.abs(1 - bottomLimit)
            topLimit += diff
            bottomLimit += diff
        }

        if (topLimit > this.props.lastPage) {
            topLimit = this.props.lastPage
        }

        for (let i = bottomLimit; i <= topLimit; i++) {
            const button = this.renderButton(i, i, i !== this.props.currentPage, i === this.props.currentPage)
            buttons.push(button)
        }

        return buttons
    }

    protected renderPreviousButton(): JSX.Element {
        return this.renderButton(this.props.labelPrevious, this.props.currentPage - 1, this.props.currentPage !== 1)
    }

    protected renderNextButton(): JSX.Element {
        return this.renderButton(this.props.labelNext,
                                 this.props.currentPage + 1,
                                 this.props.currentPage !== this.props.lastPage)
    }

    protected renderFirstButton(): JSX.Element {
        return this.renderButton(this.props.labelFirst, 1, this.props.currentPage !== 1)
    }

    protected renderLastButton(): JSX.Element {
        return this.renderButton(this.props.labelLast,
                                 this.props.lastPage,
                                 this.props.currentPage !== this.props.lastPage)
    }

    protected pageClicked(evt: any, pageNumber: number) {
        evt.preventDefault()
        this.props.onPageChange(pageNumber)
    }

    public render() {
        return (
            <Div margin="10px 0" textAlign="center" className={this.name}
                    data-active={this.props.currentPage} style={this.props.style}>
                {this.props.showFirstAndLast && this.renderFirstButton()}
                {this.props.showPrevAndNext && this.renderPreviousButton()}
                {this.renderMainButtons()}
                {this.props.showPrevAndNext && this.renderNextButton()}
                {this.props.showFirstAndLast && this.renderLastButton()}
            </Div>
        )
    }
}

const Button = css("a")({
    boxSizing: "border-box",
    display: "inline-block",
    height: "42px",
    minWidth: "42px",
    lineHeight: "40px",
    padding: "0px 10px 0 10px",
    textDecoration: "none",
    margin: "0 2px",
    border: `1px solid transparent`,
    fontWeight: "bold",
    ":active": {
        textDecoration: "none",
    },
    ":visited": {
        textDecoration: "none",
    },
    ":focus": {
        textDecoration: "none",
    },
},(props: any) => {
    return {
        "&": {
            borderRadius: props.theme.radius,
            color: props.theme.blue,
        },
        ":hover": {
            background: props.theme.blue,
            color: "white",
            textDecoration: "none",
        },
    }
})

const Disabled = css(Button)({
    display: "inline-block",
    opacity: 0.2,
    color: "black",
    pointerEvents: "none",
    ":hover": {
        background: "initial",
        color: "black",
    },
})

const Active = css(Button)({
    opacity: 1,
    color: "black !important",
}, (props: any) => {
    return {
        background: props.theme.decoration_background,
        border: `1px solid ${props.theme.decoration} !important`,
        ":hover": {
            background: props.theme.decoration_background,
            border: `1px solid ${props.theme.decoration}`,
            color: "black !important",
            textDecoration: "none",
        },
    }
})
