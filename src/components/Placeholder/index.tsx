import * as React from "react"
import css from "../../css"
import Div from "../Div"
import * as Color from "color"
import Theme from "../Theme"

export interface Props {
    width: number
    height: number
    style?: any
    className?: string
}
export interface State {
}

class Placeholder extends React.PureComponent<Props, State> {

    private readonly name = "muk-placeholder";

    public static defaultProps: Props = {
        width: 100,
        height: 100,
        style: {},
        className: "",
    }

    public render() {
        const { className, style, width, height } = this.props

        const styles = { paddingBottom: `${(height * 100 / width)}%`, ...style }

        return (
            <Div className={`${this.name} ${className || ""}`} position="relative" {...styles}>
                <CssShadow className={`m-shadow`}>
                    <Div className={`m-content-wrapper`} display="table" width="100%" height="100%">
                        <CssContainer className={`m-content`}>
                            {this.props.children}
                        </CssContainer>
                    </Div>
                </CssShadow>
            </Div>
        )
    }
}

const CssShadow = css("div")({
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    border: "1px solid white",
    background: Color(Theme.decoration).fade(0.8).string(),
    borderColor: Color(Theme.decoration).fade(0.2).string(),
})

const CssContainer = css("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
})

export default Placeholder
