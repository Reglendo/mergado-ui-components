import * as React from 'react'

import Bubble from './Bubble'
import {prefix} from "../../config"

export interface Props {
    content?: string | JSX.Element
    icon?: JSX.Element
    iconType?: string
    style?: any
}

export interface State {
    expanded: boolean
}

export interface Position {
    top: number
    left: number
}

class PopupHint extends React.Component<Props, State> {

    readonly name = prefix + "popup_hint";

    public static defaultProps: Props = {
        content: "",
        icon: null,
        iconType: "",
        style: {}
    }

    refs: {
        [key: string]: Element
        hint: HTMLElement
        arrow: HTMLElement
        button: HTMLElement
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            expanded: false
        }

        this.collapse = this.collapse.bind(this)
        this.expand = this.expand.bind(this)
    }

    expand(event: any) {
        event.preventDefault()
        this.setState({expanded: true})
    }

    collapse(): void {
        this.fadeOut(this.refs["hint"], () => {
            this.setState({expanded: false})
        })
    }

    componentDidMount() {
        this.styleElements()
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        this.styleElements()
    }

    getWindowWidth(): number {
        if (window.innerWidth) {
            return window.innerWidth;
        }

        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }

        if (document.body) {
            return document.body.clientWidth;
        }

        return 0
    }

    styleElements() {
        const buttonPosition = this.getPosition(this.refs["button"])
        const windowWidth = this.getWindowWidth()
        const widthLeft = buttonPosition.left
        const windowRight = windowWidth - buttonPosition.left

        const renderLeft: boolean = widthLeft > windowWidth / 2

        this.styleHint(buttonPosition, renderLeft)
    }

    styleArrow(left: string, right: string) {
        let arrow : any = this.refs["arrow"]

        arrow.style.left = left
        arrow.style.right = right
    }

    styleHint(buttonPosition: Position, renderLeft: boolean) {
        let hint : any = this.refs["hint"]

        hint.style.opacity = `0`
        hint.style.display = 'block'

        let newX: number
        let arrowLeft: string
        let arrowRight: string

        if (renderLeft) {
            newX = buttonPosition.left - hint.offsetWidth + 30
            arrowLeft = ""
            arrowRight = 11 + "px"
        } else {
            newX = (buttonPosition.left - 10) > 0 ? (buttonPosition.left - 10) : 0
            arrowLeft = buttonPosition.left - newX + "px"
            arrowRight = ""
        }

        if (hint.style.top === `${buttonPosition.top - hint.offsetHeight}px` &&
            hint.style.left === `${newX}px`) {
            if (this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight)
                this.fadeIn(this.refs["hint"])
                this.refs["hint"].focus()
            }
        } else {
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`
            hint.style.left = `${newX}px`
            this.styleHint(buttonPosition, renderLeft)
        }
    }

    fadeOut(el: any, callback: Function) {
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                callback()
            } else {
                requestAnimationFrame(fade)
            }
        })()
    }

    fadeIn(el: any, display: any = null) {
        el.style.opacity = 0
        el.style.display = display || "block";

        (function fade() {
            var val = parseFloat(el.style.opacity)
            if (!((val += .1) > 1)) {
                el.style.opacity = val
                requestAnimationFrame(fade)
            }
        })()
    }

    getPosition(element: any): Position {
        var top = 0, left = 0
        do {
            top += element.offsetTop || 0
            left += element.offsetLeft || 0
            element = element.offsetParent
        } while (element)

        return {
            top: top,
            left: left,
        }
    }

    getArrowPosition(buttonPosition: Position): Position {
        return {
            top: buttonPosition.top - 15 / 2,
            left: buttonPosition.left - 21 / 2,
        }
    }

    render() {
        var object : any = Object
        var style = object.assign({display: this.state.expanded ? "" : "none", position: "absolute"}, this.props.style)

        var hint: JSX.Element = (
            <Bubble>
                <div ref="hint" className={`${this.name}__bubble`}
                     style={style} tabIndex={0}
                     onBlur={ this.collapse }>
                    <div className={`${this.name}__innerwrapper`}>
                        <div className={`${this.name}__border`}>
                            <div className={`${this.name}__content`}>{this.props.content}</div>
                        </div>
                        <span ref="arrow" className={`${this.name}__arrow`}></span>
                    </div>
                </div>
            </Bubble>
        )

        return (
            <div className={this.name} style={{display: 'inline-block'}}>
                <div ref="button" className={`${this.name}__trigger ${this.state.expanded ? "active" : ""}`}
                     onMouseDown={this.state.expanded ? ()=>{} : this.expand}>
                    {this.props.icon ? this.props.icon : null }
                </div>
                {hint}
            </div>
        );
    }
}

export default PopupHint