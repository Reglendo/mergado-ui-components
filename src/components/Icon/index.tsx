import * as React from "react"
import styled from "styled-components"

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

/* <style> */
const Wrapper = styled.span`
`

const Text = styled.span`
    vertical-align: middle;
    margin-left: 2px;
    margin-right: 5px;
`

const Image = styled.svg`
    vertical-align: middle;
`
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
            <Wrapper className={className} style={this.props.style} title={this.props.title}>
                <Image className={`${this.name}__image`} preserveAspectRatio="xMidYMid meet"
                    fill="currentColor"
                    height={this.props.size}
                    width={this.props.size}
                        viewBox={this.props.viewBox}
                >
                    {this.state.icon}
                </Image>
                {this.props.text ? (
                    <Text className={`${this.name}__text`}>
                        {this.props.text}
                    </Text>
                ) : null}
            </Wrapper>
        )

    }
}

export default Icon
