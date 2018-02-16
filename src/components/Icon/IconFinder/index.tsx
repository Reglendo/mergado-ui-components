import * as React from "react"
import * as Icons from "@reglendo/mergado-ui-icons/lib"
import css from "@reglendo/cxs/component"

import {prefix} from "../../../config"
import Icon from "../../../components/Icon"
import TextInput from "../../../components/Forms/TextInput"

export interface Props {
}
export interface State {
    value: string
}

/**
 * disable-styleguide
 */
class IconFinder extends React.Component<Props, State> {

    private readonly name = prefix + "icon-finder";

    public static defaultProps: Props = {

    }

    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }
    }

    protected handleChange(evt) {
        this.setState({
           value: evt.target.value,
        });
    }

    protected renderIcons() {
        const find = this.state.value.toLowerCase().trim()

        const icons = Object.keys(Icons)

        const found = icons.filter( (icon) => {
            if(icon.toLowerCase().indexOf(find) > -1) {
                return true
            }
            return false
        })

        if(found.length === 0) {
            return <p style={{padding: "10px"}}>no icon found :(</p>
        }
        return found.map( obj => {
            const viewBox = obj === "IconHeureka" ? "0 0 200 40" : "0 0 40 40"
            return (<Image key={obj} className={`${this.name}__icon`} title={obj} tabIndex={1}>
                        <Icon name={`${obj}`} size={30}
                            text={`import ${obj} from "@reglendo/mergado-ui-icons/lib/icons/${obj}"`}
                            viewBox={viewBox}
                            color={"#555"}
                            style={{display: "inline-block", margin: "5px" }} />
                    </Image>)
        })
    }

    public render() {
        const className = `${this.name}`

        return (
            <div className={`${className}`}>
                <TextInput
                    labels={{ main: "",
                             placeholder: "Type icon name here...",
                             invalid: "Invalid input",
                             title: "" }}
                    input={{onChange: this.handleChange.bind(this), value: this.state.value }} />
                {this.renderIcons()}
            </div>
        )
    }
}

const Image = css("span")({
    cursor: "pointer",
    position: "relative",
    textAlign: "left",
    ":focus": {
        outline: "none",
    },
    ":focus:before": {
        content: "attr(title)",
        position: "absolute",
        left: "50%",
        top: "-63px",
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
        background: "#888",
        color: "white",
        zIndex: 1000,
        borderRadius: "2px",
        fontSize: "12px",
        padding: "5px",
    },

    ":focus .muk-icon": {
        zIndex: 1000,
    },
    ":focus .muk-icon__text": {
        display: "inline-block",
    },
    ":focus svg": {
        outline: "1px solid #888",
        transform: "scale3d(3,3,1)",
        background: "#fff",
    },

    " .muk-icon": {
        padding: "4px",
        position: "relative",
        border: "1px solid transparent",
    },
    " .muk-icon:hover": {
        background: "white",
        border: "1px solid #ccc",
    },
    " svg": {
        transition: "transform 0.2s",
        willChange: "transform",
    },
    " .muk-icon__text": {
        borderRadius: "2px",
        position: "absolute",
        display: "none",
        background: "white",
        color: "#333",
        border: "2px solid #888",
        fontSize: "10px",
        padding: "5px",
        whiteSpace: "nowrap",
        left: "50%",
        top: "68px",
        transform: "translateX(-50%)",
    },
})

export default IconFinder
