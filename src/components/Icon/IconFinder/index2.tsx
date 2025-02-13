import * as React from "react"
import * as Icons from "@reglendo/mergado-ui-icons/lib"
import css from "../../../css"

import Icon from "../index2"
import TextInput from "../../Form/TextInput"
import Button from "../../Button"

export interface Props {
}
export interface State {
    value: string
    showAll:boolean
}

/**
 * disable-styleguide
 */
class IconFinder extends React.PureComponent<Props, State> {

    private readonly name = "muk-icon-finder";

    public static defaultProps: Props = {

    }

    state = {
        value: "",
        showAll: false,
    }

    handleChange = (evt) => {
        this.setState({
           value: evt,
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

    toggleShowAll = () => this.setState(s => ({ showAll: !s.showAll }))

    public render() {
        const className = `${this.name}`

        return (
            <div className={`${className}`}>
                <TextInput
                    label=""
                    placeholder="Type icon name here..."
                    onChange={this.handleChange}
                    value={this.state.value} />
                <Button onClick={this.toggleShowAll}>Show all icons</Button>
                {this.state.showAll || this.state.value ?
                    this.renderIcons()
                    :
                    false
                }
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
