import * as React from 'react'

export interface Props {
    content?: string | JSX.Element
    wrapperStyle?: Object
    arrowStyle?: Object
    hintStyle?: Object
    buttonStyle?: Object
}

export interface State {
    expanded: boolean
}

export interface Position {
    top: number
    left: number
}

class PopupHint extends React.Component<Props, State> {

public static defaultProps: Props = { 
        content: "",
        wrapperStyle: {marginLeft: '10px'},
        arrowStyle: {},
        hintStyle: {},
        buttonStyle: {},
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

        const renderLeft: boolean = widthLeft > windowWidth/2

        this.styleHint(buttonPosition, renderLeft)
    }

    styleArrow(left: string, right: string) {
        let arrow = this.refs["arrow"]

        arrow.style.left = left
        arrow.style.right = right
    }

    styleHint(buttonPosition: Position, renderLeft: boolean) {

        let hint = this.refs["hint"]

        hint.style.opacity = `0`

        let newX: number
        let arrowLeft: string
        let arrowRight: string

        if (renderLeft) {
			newX = buttonPosition.left - hint.offsetWidth  + 30
            arrowLeft = ""
            arrowRight = 11 + "px"
		} else {
			newX = (buttonPosition.left - 10) > 0 ? (buttonPosition.left - 10) : 0
            arrowLeft = buttonPosition.left - newX + "px"
            arrowRight = ""
		}

        if(hint.style.top === `${buttonPosition.top - hint.offsetHeight}px` &&
            hint.style.left === `${newX}px`) {
            if(this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight)
                this.refs["hint"].focus()
                this.fadeIn(this.refs["hint"])
            }
        } else {
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`
            hint.style.left = `${newX}px`
            this.styleHint(buttonPosition, renderLeft)
        }
    }

    fadeOut(el: any, callback: Function){
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                callback()
            } else {
                requestAnimationFrame(fade)
            }
        })()
    }

    fadeIn(el: any, display: any = null){
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

    getPosition(element: any ): Position {
        var top = 0, left = 0
        do {
            top += element.offsetTop  || 0
            left += element.offsetLeft || 0
            element = element.offsetParent
        } while(element)

        return {
            top: top,
            left: left,
        }
    }

    getArrowPosition(buttonPosition: Position): Position {
        return {
            top: buttonPosition.top - 15/2,
            left: buttonPosition.left - 21/2,
        }
    }

    render() {
        var hint: JSX.Element = (
            <div ref="hint" className="hint-popup" style={{display: this.state.expanded ? "" : "none", position: "absolute", ...this.props.hintStyle}}
             tabIndex={0} onBlur={ this.collapse }>
                <div className="hint-popup-inner-wrapper">
                    <div className="hint-popup-border">
                        <div className="hint-popup-text">{this.props.content}</div>
                    </div>
                    <span ref="arrow" className="hint-popup-arrow" style={this.props.arrowStyle} ></span>
                </div>
            </div>
        )
        

        return (
            <div style={{display: 'inline-block', ...this.props.wrapperStyle}}>
                <div ref="button" className={`popup-hint-trigger ${this.state.expanded ? "active" : ""}`} 
                onMouseDown={this.state.expanded ? ()=>{} : this.expand}  style={this.props.buttonStyle}>
                </div>
                {hint}
            </div>
        );
    }
}

export default PopupHint