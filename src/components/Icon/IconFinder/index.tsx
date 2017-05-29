import * as React from "react"
import {prefix} from "config"
import Icon from "components/Icon"
import TextInput from "components/Forms/TextInput"
import * as Icons from "mergado-ui-icons/lib"

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
            return (<span key={obj} className={`${this.name}__icon`} title={obj} tabIndex={1}>
                        <Icon name={`${obj}`} size={30}
                            text={`import ${obj} from "mergado-ui-icons/lib/icons/${obj}"`}
                            style={{display: "inline-block", margin: "5px" }} />
                    </span>)
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

export default IconFinder
