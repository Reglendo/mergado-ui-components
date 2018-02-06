import * as React from "react"

import {prefix} from "../../config"
import {Toast} from "../Toast"
import uniqueId from "../../helpers/unique_id"

export interface Props {
    toasts?: Array<Toast|JSX.Element>
    paused: boolean
    style?: any
}
export interface State {
    toasts: Array<Toast|JSX.Element>
}

export class Toasts extends React.Component<Props, State> {

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
        return this.props.toasts.map((toast) => {
            return (<div key={uniqueId()} className={`${this.name}__item`}>
                        <Toast isPaused={this.isPaused.bind(this)} {...toast.props} />
                    </div>)
        })
    }

    public render() {
        return (
            <div className={`${this.name}`} style={this.props.style}>
                <div className={`${this.name}__wrapper`}>
                    {this.renderToasts()}
                </div>
            </div>
        )
    }
}
