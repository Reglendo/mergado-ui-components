import * as React from "react"
import * as ReactDOM from "react-dom"

import Div from "../../Div"
import css from "../../../css"

export interface Props {
}
export interface State {
}

class Bubble extends React.PureComponent<Props, State> {

    private readonly name = "muk-popup_hint__bubble"
    public popup

    public componentDidMount() {
        if(document.getElementById("muk-popuphint") === null) {
            this.popup = document.createElement("span")
            this.popup.id = "muk-popuphint"
            this.popup.className = `${this.name}__wrapper`

            document.getElementById("app").appendChild(this.popup)
            this._renderLayer()
        } else {
            this.popup = document.getElementById("muk-popuphint")
        }
    }

    protected _renderLayer() {

    const style = {
            position: "absolute",
            zIndex: 10000,
            outline: "none",
            maxWidth: "600px",
        }
        ReactDOM.render((<span >
            <Div className={`muk-bubble`}
                 props={{ id: "muk-bubble" }}
                 {...style}>
                    <Div position={"relative"} padding={"0 0 10px 0"} className={`m-innerwrapper`}>
                        <HintContent
                            className={`m-content`}
                            id={`muk-popup-bubble`}>
                        </HintContent>
                    </Div>
                </Div>
        </span>), this.popup)
    }

    public render() {
        return <span/>
    }
}


const fontFamily = "Arial, Helvetica, Verdana, Sans-serif"

/* <style> */
const HintContent = css("div")({
    fontFamily: fontFamily,
    maxHeight: "200px",
    textAlign: "left",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    zIndex: 10,
    border: "1px solid rgba(0,0,0,0.9)",
    boxShadow: "3px 3px 12px -3px rgba(0,0,0,0.25)",
    borderRadius: "3px",
    fontSize: "13px",
    background: "rgba(50,50,50,1)",
    padding: "2px 10px",
    color: "white",

    ".muk-popuphint:focus": {
        border: "none",
        outline: "none",
    },

})


export default Bubble
