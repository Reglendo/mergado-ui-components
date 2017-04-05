import * as React from "react"
import {prefix} from "../../config"
import Toast from "./Toast"
import "../../stylesheets/components/_toast.sass"
import uniqueId from "../../helpers/unique_id"

export interface Props {
    toasts?: Array<Toast>
}
export interface State {
    toasts: Array<Toast>
}

class Toasts extends React.Component<Props, State> {

    readonly name = prefix + "toasts-container";

    public static defaultProps: Props = {
        toasts: []
    }


    renderToasts() {
        return this.props.toasts.map((toast) => {
            return ( <div key={uniqueId()} className={`${this.name}__item`}>{toast}</div> )
        })
    }


    render() {
        return (
            <div className={`${this.name}`}>
                <div className={`${this.name}__wrapper`}>
                    {this.renderToasts()}
                </div>

            </div>
        )
    }
}

export default Toasts