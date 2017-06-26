import * as React from "react"
import {prefix} from "config"
import * as Icons from "mergado-ui-icons/lib"

import styled from "styled-components"

export interface Props {
    type?: string
    name?: string

    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
}
export interface State {
}

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
    }


    /* <style> */
    protected Wrapper = styled.span`
    `

    protected Text = styled.span`
        vertical-align: middle;
        margin-left: 2px;
        margin-right: 5px;
    `

    protected Image = styled.svg`
        vertical-align: middle;
    `
    /* </style> */

    public render() {

        const className = `${this.name} ${this.name}--${this.props.type} ${this.props.addClass}`
        let iconName: string;
        if(this.props.name) {
            iconName = this.props.name
        } else {
            iconName = `Icon` + `${this.props.type}`.replace(/\b(\w)/g, s => s.toUpperCase()).replace("-","")
        }

        const icon = Icons[iconName] ? Icons[iconName] : null

        return (
            <this.Wrapper className={className} style={this.props.style} title={this.props.title}>
                <this.Image className={`${this.name}__image`} preserveAspectRatio="xMidYMid meet"
                    fill="currentColor"
                    height={this.props.size}
                    width={this.props.size}
                    viewBox={`0 0 40 40`}
                >
                    {icon}
                </this.Image>
                {this.props.text ? (
                    <this.Text className={`${this.name}__text`}>
                        {this.props.text}
                    </this.Text>
                ) : null}
            </this.Wrapper>
        )
    }
}

export default Icon
