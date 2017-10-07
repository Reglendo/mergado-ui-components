import * as React from "react"
import css from "cxs/component"
import {Div} from "../../components/Layout"
import * as Color from "color"

import {prefix} from "../../config"

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
        const styles = object.assign({}, { paddingBottom: `${(height * 100 / width)}%` }, style)

        return (
            <Div position="relative" className={className} style={styles}>
                <Shadow className={`${this.name}__shadow`}>
                    <Div display="table" width="100%" height="100%" className={`${this.name}__wrapper`}>
                        <Container className={`${this.name}__container`}>
                            {this.props.children}
                        </Container>
                    </Div>
                </Shadow>
            </Div>
        )
    }
}

const Shadow = css("div")({
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    border: "1px solid white",
},(props: any) => {
    return {
        background: Color(props.theme.decoration).fade(0.8).string(),
        borderColor: Color(props.theme.decoration).fade(0.2).string(),
    }
})

const Container = css("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
})

export default Placeholder
