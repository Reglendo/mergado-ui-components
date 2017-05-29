import * as React from "react"
import {prefix} from "config"

export interface Props {
    width: number
    height: number
    style?: any
    addClass?: string
}
export interface State {
}

class Placeholder extends React.Component<Props, State> {

    private readonly name = prefix + "placeholder";

    public static defaultProps: Props = {
        width: 100,
        height: 100,
        style: {},
        addClass: "",
    }

    public render() {
        const { addClass, style, width, height } = this.props

        const className = `${this.name} ${addClass ? addClass : ""}`

        const object: any = Object
        const styles = object.assign({}, style, { paddingBottom: `${(height * 100 / width)}%` })

        return (
            <div className={className} style={styles}>
                <div className={`${this.name}__shadow`}>
                    <div className={`${this.name}__wrapper`}>
                        <div className={`${this.name}__container`}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Placeholder
