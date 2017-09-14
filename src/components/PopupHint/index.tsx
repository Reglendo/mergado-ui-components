import * as React from "react"
import glamorous, {Div} from "glamorous"
import * as Color from "color"

import colors from "../../styled/themes/default"
import {prefix} from "../../config"
import Bubble from "./Bubble"

export interface Props {
    icon?: JSX.Element
    style?: any
}

export interface State {
    expanded: boolean
}

export interface Position {
    top: number
    left: number
}

/* </style> */

class PopupHint extends React.Component<Props, State> {

    private readonly name = prefix + "popup_hint";

    public static defaultProps: Props = {
        icon: null,
        style: {},
    }

    public refs: {
        [key: string]: Element,
        hint: HTMLElement,
        arrow: HTMLElement,
        button: HTMLElement,
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            expanded: false,
        }

        this.collapse = this.collapse.bind(this)
        this.expand = this.expand.bind(this)
    }

    protected expand(event: any) {
        event.preventDefault()
        this.setState({expanded: true})
    }

    protected collapse(): void {
        this.fadeOut(this.refs.hint, () => {
            this.setState({expanded: false})
        })
    }

    public componentDidMount() {
        this.styleElements()
    }

    public componentDidUpdate(prevProps: Props, prevState: State) {
        this.styleElements()
    }

    protected getWindowWidth(): number {
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

    protected styleElements() {
        const buttonPosition = this.getPosition(this.refs.button)
        const windowWidth = this.getWindowWidth()
        const widthLeft = buttonPosition.left
        const windowRight = windowWidth - buttonPosition.left

        const renderLeft: boolean = widthLeft > windowWidth / 2

        this.styleHint(buttonPosition, renderLeft)
    }

    protected styleArrow(left: string, right: string) {
        const arrow: any = this.refs.arrow

        arrow.style.left = left
        arrow.style.right = right
    }

    protected styleHint(buttonPosition: Position, renderLeft: boolean) {
        const hint: any = this.refs.hint
        hint.style.opacity = `0`
        hint.style.display = "block"
        hint.style.pointerEvents = "none"
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
                this.fadeIn(this.refs.hint)
                this.refs.hint.focus()
            }
        } else {
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`
            hint.style.left = `${newX}px`
            if (this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight)
                this.fadeIn(this.refs.hint)
                this.refs.hint.focus()
            }
        }

    }

    protected fadeOut(el: any, callback: () => void) {
        const hint: any = this.refs.hint

        el.style.opacity = 1;
        hint.style.display = "none";

        (function fade() {
            el.style.opacity -= .1
            if (el.style.opacity < 0) {
                callback()
            } else {
                requestAnimationFrame(fade)
            }
        })()
    }

    protected fadeIn(el: any, display: any = null) {

        el.style.opacity = 0
        el.style.display = "block";

        (function fade() {
            let val = parseFloat(el.style.opacity)
            val += 1
            if (!(val > 1)) {
                el.style.opacity = val
                requestAnimationFrame(fade)
            }
        })()
    }

    protected getPosition(element: any): Position {
        let top = 0
        let left = 0
        do {
            top += element.offsetTop || 0
            left += element.offsetLeft || 0
            element = element.offsetParent
        } while (element)

        return {
            top,
            left,
        }
    }

    protected getArrowPosition(buttonPosition: Position): Position {
        return {
            top: buttonPosition.top - 15 / 2,
            left: buttonPosition.left - 21 / 2,
        }
    }

    public render() {
        const object: any = Object
        const style = object.assign({display: this.state.expanded ? "" : "none", position: "absolute"},
                                    this.props.style)

        const hint: JSX.Element = (
            <Bubble>
                <HintWrapper innerRef={(o) => { this.refs.hint = o }} className={`${this.name}__bubble`}
                     style={style} tabIndex={0}
                     onBlur={ this.collapse }
                 >
                    <Div position={"relative"} padding={"0 0 10px 0"} className={`${this.name}__innerwrapper`}>
                        <HintContent className={`${this.name}__content`}>{this.props.children}</HintContent>
                        <HintArrow
                            innerRef={(o) => { this.refs.arrow = o }}
                            className={`${this.name}__arrow`} />
                    </Div>
                </HintWrapper>
            </Bubble>
        )

        return (
            <Div cursor="pointer" display="inline-block" className={this.name} style={{...this.props.style}}>
                <div ref="button" className={`${this.name}__trigger ${this.state.expanded ? "active" : ""}`}
                     onMouseDown={this.state.expanded ? ()=> {} : this.expand}
                     onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }}
                 >
                    {this.props.icon ? this.props.icon : null }
                </div>
                {hint}
            </Div>
        );
    }
}

const fontFamily = "Arial, Helvetica, Verdana, Sans-serif"

/* <style> */
const HintWrapper = glamorous.div({
    outline: "none",
    fontFamily: fontFamily,
    position: "absolute",
    maxWidth: "600px",
    zIndex: 10000,
})

const HintArrow = glamorous.div({
    display: "block",
    position: "absolute",
    right: "0px",
    bottom: "3px",
    width: "14px",
    height: "14px",
    background: colors.yellow,
    transform: "rotate(45deg)",
    zIndex: 11,
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    borderColor: Color(colors.yellow).darken(0.3)
})

const HintContent = glamorous.div({
    maxHeight: "200px",
    padding: "10px",
    textAlign: "left",
    overflow: "auto",
    position: "relative",
    zIndex: 10,
    background: colors.yellow,
    border: "1px solid black",
    boxShadow: "3px 3px 12px -3px rgba(0,0,0,0.25)",
    borderColor: Color(colors.yellow).darken(0.3),
    borderRadius: "2px"
})

export default PopupHint
