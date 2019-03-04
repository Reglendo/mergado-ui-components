import * as React from "react"
import {prefix} from "../../config"
import Toast from "../Toast"
import css from "css"

export interface Props {
    toasts?: Array<Toast|JSX.Element>
    paused: boolean
    style?: any
}
export interface State {
    toasts: Array<Toast|JSX.Element>
}

class Toasts extends React.PureComponent<Props, State> {

    private readonly name = prefix + "toasts-container";

    public static defaultProps: Props = {
        toasts: [],
        paused: false,
        style: {},
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            toasts: [],
        }
    }

    protected isPaused() {
        return this.props.paused;
    }

    protected renderToasts() {
        return this.props.toasts.map((toast: any) => {
            return (<div key={toast.content} className={`${this.name}__item`}>
                        <Toast isPaused={this.isPaused.bind(this)} {...toast.props} />
                    </div>)
        })
    }

    public render() {
        return (
            <Wrapper className={`${this.name}`} style={this.props.style}>
                {this.props.children}
            </Wrapper>
        )
    }
}

const Wrapper = css("div")(props => ({
    overflow: "hidden",
    position: "relative",
    padding: "5px",
    " .muk-toast__wrapper": {
        opacity: 0.9,
        minWidth: "300px",
        animation: 'slidein 0.3s  ease-in-out',
        transition: "transform 0.5s  ease-in-out",
    },
    " .muk-toast__wrapper.ended": {
        transform: "translate3d(100vw, 0,0)",
        transition: "transform 0.5s ease-in-out",
    },

    " .muk-toast__wrapper:hover": {
        opacity: 1,
    },

    "@keyframes slidein": {
        "0%": {
            transform: "translate3d(100vw, 0,0)",
        },
        "100%": {
            transform: "translate3d(0, 0,0)",
        },
    },

    " .muk-toast__content": {
        fontSize: "0.85rem",
    },
}))

export default Toasts
