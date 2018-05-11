import * as React from "react"
import * as ReactDOM from "react-dom"

import {prefix} from "../../../config"
import Div from "../../Layout/Div"
import css from "@reglendo/cxs/component"

export interface Props {
}
export interface State {
}

/**
 * disable-styleguide
 */
class Bubble extends React.Component<Props, State> {

    private readonly name = prefix + "popup_hint__bubble"
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
                        <Div props={{ id: "muk-bubble-arrow" }}
                             className="m-arrow-wrapper"
                             {...{
                                 width: "12px",
                                 height: "12px",
                                 position: "absolute",
                                 display: "inline-block",
                                 zIndex: 1000,
                                 bottom: "11px"
                             }}>
                                <HintArrow
                                    className={`m-arrow`} />
                        </Div>
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
const HintArrow = css("div")({
    display: "inline-block",
    width: "8px",
    height: "8px",
    transform: "rotate(45deg)",
    zIndex: 11,
    background: "rgba(50,50,50,1)",
    borderColor: "rgba(0,0,0,0.9)",
})

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

    "!.muk-popuphint:focus": {
        border: "none",
        outline: "none",
    },
    "!#muk-popuphint .muk-bubble": {
        opacity: 0,
        transition: "opacity 0.2s",
        willChange: "opacity",
        pointerEvents: "none",
    },

    "!#muk-popuphint.m-active .muk-bubble": {
        opacity: 1,
        transition: "opacity 0.2s",
        willChange: "opacity",
    }

})


export default Bubble
