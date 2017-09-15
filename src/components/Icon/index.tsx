import * as React from "react"
import {Span,Svg} from "glamorous"

import {prefix} from "../../config"

export interface Props {
    type?: string
    name?: string

    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
    icon: any
}

/* </style> */

const getIcon = (name) => import("@reglendo/mergado-ui-icons/lib/icons/const/" + name + ".js")

class Icon extends React.Component<Props, State> {

    private readonly name = prefix + "icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {},
        name: "",
        text: "",
        title: "",
        addClass: "",
        viewBox: "0 0 40 40",
    }

    constructor(props) {
        super(props)
        this.state = {
            icon: <span/>,
        }
    }

    public componentDidMount() {
        let iconName: string;
        if(this.props.name) {
            iconName = this.props.name
        } else {
            iconName = `Icon` + `${this.props.type}`.replace(/\b(\w)/g, s => s.toUpperCase()).replace("-","")
        }

        getIcon(iconName).then((module) => {
            this.setState({
                icon: module[iconName],
            })
        })
    }

    public render() {

        const className = `${this.name} ${this.name}--${this.props.type} ${this.props.addClass}`

        return (
            <Span className={className} style={this.props.style} title={this.props.title}>
                <Svg verticalAlign="middle" className={`${this.name}__image`} preserveAspectRatio="xMidYMid meet"
                    fill="currentColor"
                    height={this.props.size}
                    width={this.props.size}
                        viewBox={this.props.viewBox}
                >
                    {this.state.icon}
                </Svg>
                {this.props.text ? (
                    <Span verticalAlign="middle" marginLeft="2px" marginRight="5px" className={`${this.name}__text`}>
                        {this.props.text}
                    </Span>
                ) : null}
            </Span>
        )

    }
}

export default Icon
