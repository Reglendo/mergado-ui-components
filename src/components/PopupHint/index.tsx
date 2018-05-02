import * as React from "react"
import css from "@reglendo/cxs/component"
import {Div} from "../../components/Layout/Div"

import IconHintInfo from "@reglendo/mergado-ui-icons/lib/icons/IconHintInfo"
import IconHintHelp from "@reglendo/mergado-ui-icons/lib/icons/IconHintHelp"
import {prefix} from "../../config"
import Bubble from "./Bubble"
import debounce from "lodash/throttle"

export interface Props {
    icon?: JSX.Element
    style?: any
    hint?: boolean
    help?: boolean
    className?: string
    hover?: boolean
    arrowRight?: number
    arrowLeft?: number
}

export interface State {
}

export interface Position {
    top: number
    left: number
}

/* </style> */

class PopupHint extends React.Component<Props, State> {

    private readonly name = prefix + "popuphint";
    private id:number = null
    public static defaultProps: Props = {
        icon: null,
        style: {},
        hint: false,
        help: false,
        hover: true,
        arrowLeft: 0,
        arrowRight: 0,
    }

    public refs: {
        [key: string]: Element,
        button: HTMLElement,
    }

    constructor(props: Props) {
        super(props)

        this.collapse = debounce(this.collapse.bind(this),50)
        this.expand = debounce(this.expand.bind(this),50)
        this.styleHint = this.styleHint.bind(this)
        this.id = Math.round(Math.random() * 1000)
    }

    protected expand(event: any) {
        event.preventDefault()
        const hint: any = document.getElementById('muk-popuphint')
        hint.classList.add("m-active")
        const content = document.getElementById("muk-popup-content-"+this.id).innerHTML
        document.getElementById('muk-popup-bubble').innerHTML = content
        this.styleElements()
    }

    protected doNothing() {
    }

    protected collapse(): void {
        const hint: any = document.getElementById('muk-popuphint')
        const bubble: any = document.getElementById('muk-bubble')
        hint.classList.remove("m-active")
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
        const renderLeft: boolean = widthLeft > windowWidth / 2
        this.styleHint(buttonPosition, renderLeft)
    }

    protected styleArrow(left: string, right: string) {
        const arrow: any = document.getElementById('muk-bubble-arrow')

        arrow.style.left = left
        arrow.style.right = right
    }

    protected styleHint(buttonPosition: Position, renderLeft: boolean) {
        const hint: any = document.getElementById('muk-bubble')
        hint.style.display = "block"
        hint.style.pointerEvents = "none"
        let newX: number
        let arrowLeft: string
        let arrowRight: string
        if (renderLeft) {
            newX = buttonPosition.left - hint.offsetWidth + 14
            arrowLeft = ""
            arrowRight = 0 + this.props.arrowRight + "px"

        } else {
            newX = (buttonPosition.left - 2) > 0 ? (buttonPosition.left - 8) : 0;
            arrowLeft = buttonPosition.left - newX + this.props.arrowLeft + "px"
            arrowRight = ""
        }
        if (hint.style.top === `${buttonPosition.top - hint.offsetHeight}px` &&
            hint.style.left === `${newX}px`) {
        } else {hint
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`
            hint.style.left = `${newX}px`
        }
        this.styleArrow(arrowLeft, arrowRight)
        if(!this.props.hover) {
            const toggler: any = document.getElementById('muk-popup-toggler-'+this.id)
            toggler.focus()
        }
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
        const { children, className, hover, icon, style, hint, help, arrowLeft, arrowRight, ...p } = this.props

        return (
            <Div className={`${this.name} ${className || ""}`}
                props={{
                    id: `muk-popup-toggler-${this.id}`,
                    onMouseEnter: hover ? this.expand : this.doNothing,
                    onMouseLeave: hover ? this.collapse : this.doNothing,
                    onMouseDown: hover ? this.doNothing : this.expand,
                    onBlur: hover ? this.doNothing : this.collapse,
                    tabIndex: 0,
                    ...p,
                }}
                cursor={"help"}
                display="inline-block"
                {...style}>
                    <Div props={{ id: `muk-popup-content-${this.id}` }} display={"none"}>
                        {children}
                    </Div>
                    <div ref="button" className={`m-trigger`}>
                        {hint ? <IconHintInfo className="m-icon" size={16} /> : null}
                        {help ? <IconHintHelp className="m-icon" size={16} /> : null}
                        {icon ? icon : null }
                    </div>
                    <Bubble />
            </Div>
        );
    }
}

export default PopupHint
