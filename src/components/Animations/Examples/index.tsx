
import * as React from "react"
import css from "@reglendo/cxs/component"
import {prefix} from "../../../config"
import {animation as pulseAnimation} from "../Pulse"
import {animation as rotateAnimation} from "../Rotate"
export interface Props {
    animation?: string | null
}
export interface State {
    active: boolean
}

class Spinner extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            active: false
        }
    }



    public render() {
        return <Div className={this.state.active ? "active" : ""} props={{ onClick: () => this.setState({active: !this.state.active}) }}>
                {this.props.children}
                </Div>
    }

}

const Div = css("div")({
    transform: "rotate3d(0,0,0)",
    transition: "transform 0.2s",
    ".active": {
        transform: "rotate3d(1,0,0)",
    }

})