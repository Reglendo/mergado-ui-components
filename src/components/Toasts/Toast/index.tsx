import * as React from "react"
import {prefix} from "config"
import IconClose from "mergado-ui-icons/lib/icons/IconClose"
import uniqueId from "helpers/unique_id"
import styled from "styled-components"
import Button from "components/Forms/Button"
export interface Props {
    id?: string,
    text?: string,
    type?: "warning" | "success" | "error" | "inactive" | "info",
    icon?: JSX.Element
    isPaused?: () => boolean
    onClose?: (id: string) => boolean
    timeout?: number
    closeable?: boolean
    style?: any

}
export interface State {
    visible: boolean,
    paused: boolean,
    secondsLeft: number
}

/* <style> */
const Wrapper = styled.div`
    width: 100%;
    display: table;
    margin: 10px 0;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);
    transition: opacity 0.5s;
    transform: translate3d(0,0,0);
    will-change: opacity;
    opacity: ${props => props.hidden ? 0 : 1 }
`

const Component = styled.div`
    background: ${props => {
                    switch(props.type) {
                        case "success":
                            return "#16c084"
                        case "error":
                            return "#e7434c"
                        case "warning":
                            return "#ff7f2a"
                        case "inactive":
                            return "#ccc"
                        case "info":
                        default:
                            return "#fff"
                    }
                }};
    border: 1px solid #dbcba3;
    box-sizing: border-box;
    display: table-row;
    color: ${props => props.type === "info" || props.type === "inactive" ? "#333" : "white"};
`
const Icon = styled.div`
    width: 20px;
    padding: 0 10px;
    display: table-cell;
    vertical-align: middle;
`
const Content = styled.div`
    padding: 20px 0px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
`

const Close = styled.div`
    width: 20px;
    text-align: right;
    cursor: pointer;
    vertical-align: middle;
    display: table-cell;
`

const CloseButton = styled(Button)`
    text-decoration: none;
    display: inline-block;
    padding: 0 20px 0 10px;
    svg, path {
        fill:  ${props => props.toastType === "info" || props.toastType === "inactive" ? "#333" : "white"} !important;
    }
    button:focus {
        outline: none;
    }
`

/* </style> */

class Toast extends React.Component<Props, State> {
    private readonly name = prefix + "toast";
    private countdown;
    public static defaultProps: Props = {
        id: uniqueId(),
        text: "",
        type: "info",
        icon: null,
        isPaused: () => { return false },
        onClose: () => { return true },
        timeout: 0,
        closeable: true,
        style: {},
    }

    public refWrapper: any;

    constructor(props: Props) {
        super(props)

        this.state = {
            visible: true,
            paused: false,
            secondsLeft: props.timeout/1000,
        }
    }

    protected componentDidMount() {
        if(this.props.isPaused() !== true && this.props.timeout > 0) {
            this.countdown = setInterval(this.timer.bind(this),1000)
        }
    }

    protected timer() {
        const { secondsLeft } = this.state
        if(secondsLeft <= 1) {
            this.removeToast()
            clearInterval(this.countdown)
        } else {
            if (secondsLeft <= 2) {
                this.hideToast()
            }
            this.setState({
                secondsLeft: secondsLeft > 0 ? secondsLeft - 1 : secondsLeft,
            })
        }
    }

    protected hideToast() {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 1,
        })
    }

    protected componentWillUnmount() {
        clearInterval(this.countdown)
    }

    protected removeToast() {
        this.refWrapper.style.display = "none"
    }

    protected onClose(evt) {
        evt.preventDefault()
        if(this.props.onClose(this.props.id) === true) {
            this.hideToast()
            this.countdown = setInterval(this.timer.bind(this),500)
        }
    }

    public render() {
        return (
            <Wrapper innerRef={(o) => { this.refWrapper = o } }
                    style={this.props.style} hidden={!this.state.visible}
                    className={`${this.name}__wrapper ${this.state.visible ? "" : this.name+"--hidden"}`}>
                <Component type={this.props.type} className={`${this.name} ${this.name}--${this.props.type}`}>
                    <Icon className={`${this.name}__icon`}>{this.props.icon}</Icon>
                    <Content className={`${this.name}__content`}>
                        {this.props.text.replace("%seconds%",this.state.secondsLeft + "s")}
                    </Content>
                    {this.props.closeable &&
                        <Close className={`${this.name}__close`}>
                            <CloseButton className={`${this.name}__button`}
                                icon={<IconClose style={{ lineHeight: "40px" }}/>}
                                color="nocolor"
                                size="tiny"
                                toastType={this.props.type}
                                onClick={evt => this.onClose(evt) }
                            />
                        </Close>
                    }
                </Component>
            </Wrapper>
        )
    }
}

export default Toast
