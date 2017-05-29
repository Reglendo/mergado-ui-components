import * as React from "react"
import * as ReactDOM from "react-dom"
import uniqueId from "helpers/unique_id"
import {prefix} from "config"

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

class Paginator extends React.Component<Props, State> {

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
        const classLink = `${this.name}__item`
        let classDisabled = `${this.name}__item ${this.name}__item--disabled`
        if (active) {
            classDisabled = `${this.name}__item ${this.name}__item--active`
        }
        if (clickable) {
            return <a className={classLink} href="#" onClick={(evt) => {this.pageClicked(evt, page)} }
                      key={key}>{label}</a>
        } else {
            return <span className={classDisabled} key={key}>{label}</span>
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
            <div className={this.name} data-active={this.props.currentPage} style={this.props.style}>
                {this.props.showFirstAndLast && this.renderFirstButton()}
                {this.props.showPrevAndNext && this.renderPreviousButton()}
                {this.renderMainButtons()}
                {this.props.showPrevAndNext && this.renderNextButton()}
                {this.props.showFirstAndLast && this.renderLastButton()}
            </div>
        )
    }
}

export default Paginator
