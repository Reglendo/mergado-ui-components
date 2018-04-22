import * as React from "react"
import css from "@reglendo/cxs/component"
import {Div} from "../../components/Layout/Div"

import * as Color from "color"
import IconHintInfo from "@reglendo/mergado-ui-icons/lib/icons/IconHintInfo"
import IconHintHelp from "@reglendo/mergado-ui-icons/lib/icons/IconHintHelp"
import colors from "../../styled/themes/default"
import {prefix} from "../../config"
import Bubble from "./Bubble"
import _debounce from "lodash/debounce"

export interface Props {
    icon?: JSX.Element
    style?: any
    hint?: boolean
    help?: boolean
    hover?: boolean
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
        hint: false,
        help: false,
        hover: false,
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
        const hint: any = this.refs.hint
        this.fadeOut(this.refs.hint, () => {
            this.setState({expanded: false})
            hint.style.display = "none";
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
            newX = buttonPosition.left - hint.offsetWidth + 14
            arrowLeft = ""
            arrowRight = 0 + "px"

        } else {
            newX = (buttonPosition.left - 2) > 0 ? (buttonPosition.left - 8) : 0;
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
        if(!el) {
            return
        }
        el.style.opacity = 1;

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
        let top = 10
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

    public render() {
        const object: any = Object
        const style = object.assign({
                display: this.state.expanded ? "" : "none",
                position: "absolute",
                zIndex: 10000,
                outline: "none",
                maxWidth: "600px",
            },
            this.props.style)

        const hint: JSX.Element = (
            <Bubble>
                <div ref={"hint"} className={`${this.name}__bubble`}
                     style={style} tabIndex={0}
                     onBlur={ this.state.expanded ? this.collapse : () => {} }
                >
                    <Div position={"relative"} padding={"0 0 10px 0"} className={`${this.name}__innerwrapper`}>
                        <HintContent hover={this.props.hover} className={`${this.name}__content`} id={`${this.name}__content`}>{this.props.children}</HintContent>
                        <div ref={"arrow"} style={{
                            width: "12px",
                            height: "12px",
                            position: "absolute",
                            display: "inline-block",
                            zIndex: 1000,
                            bottom: "11px"
                        }}>
                            <HintArrow
                                hover={this.props.hover}
                                className={`${this.name}__arrow`} />
                        </div>
                    </Div>
                </div>
            </Bubble>
        )

        return (
            <Div cursor={"help"} verticalAlign={"text-bottom"} display="inline-block" className={this.name} style={{...this.props.style}}>
                <div ref="button" className={`${this.name}__trigger ${this.state.expanded ? "active" : ""}`}
                     onMouseDown={this.state.expanded ? ()=> {} : this.expand}
                     onMouseEnter={!this.props.hover || this.state.expanded ? () => {} : this.expand}
                     onMouseLeave={this.props.hover && this.state.expanded ? this.collapse : () => {} }
                     onClick={(e) => {
                         e.preventDefault()
                         e.stopPropagation()
                     }}
                >
                    {this.props.hint ? <IconHintInfo size={16} /> : null}
                    {this.props.help ? <IconHintHelp size={16} /> : null}
                    {this.props.icon ? this.props.icon : null }
                </div>
                {hint}
            </Div>
        );
    }
}

const fontFamily = "Arial, Helvetica, Verdana, Sans-serif"

/* <style> */
const HintArrow = css("div")({
    display: "inline-block",
    width: "8px",
    height: "8px",
    transform: "rotate(45deg)",
    zIndex: 11,
    borderRight: "1px solid " + Color(colors.yellow).darken(0.3).string(),
    borderBottom: "1px solid " + Color(colors.yellow).darken(0.3).string(),
},(props:any) => ({
    background: props.hover ? "rgba(50,50,50,1)" : colors.yellow,
    borderColor:  props.hover ? "rgba(0,0,0,0.9)!important" : Color(colors.yellow).darken(0.3).string(),
}))

const HintContent = css("div")({
    fontFamily: fontFamily,
    maxHeight: "200px",
    textAlign: "left",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    zIndex: 10,
    border: "1px solid black",
    boxShadow: "3px 3px 12px -3px rgba(0,0,0,0.25)",
    borderColor: Color(colors.yellow).darken(0.3).string(),
    borderRadius: "3px"
},(props:any) => ({
    fontSize: props.hover ? "13px" : "16px",
    background: props.hover ? "rgba(50,50,50,1)" : colors.yellow,
    borderColor: props.hover ?  "rgba(0,0,0,0.9) !important" : Color(colors.yellow).darken(0.3).string(),
    padding: props.hover ? "2px 10px" : "10px",
    color: props.hover ? "white" : "#333",
}))

export default PopupHint
