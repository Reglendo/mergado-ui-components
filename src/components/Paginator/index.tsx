import * as React from "react"
import * as ReactDOM from "react-dom"
import uniqueId from "helpers/unique_id"
import {prefix} from "config"
import styled from "styled-components"

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

const Wrapper = styled.div`
    margin: 10px 0;
    text-align: center;
    font-size: 13px;
`

const Button = styled.a`
    box-sizing: border-box;
    display: inline-block;
    height: 30px;
    min-width: 30px;
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid #dbcba3;
    line-height: 28px;
    padding: 0px 5px 0 5px;
    text-decoration: none;
    color: #009ba9;
    margin: 0 2px;
    &:hover {
        background: white;
        text-decoration: none;
    }
    &:active,&:focus,&:visited {
        text-decoration: none;
    }
`
const Disabled = Button.extend`
    display: inline-block;
    opacity: 0.3;
    color: black;
    &:hover {
        background: initial;
    }

`
const Active = Button.extend`
    font-weight: bold;
    opacity: 1;
    border: 1px solid #b79748;
    background: #fff;
    color: black;
`

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
            <Wrapper className={this.name} data-active={this.props.currentPage} style={this.props.style}>
                {this.props.showFirstAndLast && this.renderFirstButton()}
                {this.props.showPrevAndNext && this.renderPreviousButton()}
                {this.renderMainButtons()}
                {this.props.showPrevAndNext && this.renderNextButton()}
                {this.props.showFirstAndLast && this.renderLastButton()}
            </Wrapper>
        )
    }
}

export default Paginator
