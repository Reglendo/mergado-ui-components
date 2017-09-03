import * as React from "react"
import styled from "styled-components"

import {prefix} from "../../config"

export interface Props {
    title?: string
    type: "warning" | "success" | "error" | "inactive"
    text?: string
    style?: any
}
export interface State {
}

/* <style> */
const colors = {
                    success: "#85bd3c",
                    warning: "#FF9900",
                    error: "#d00",
                    inactive: "#888",
                }

const Wrapper = styled.span`
    vertical-align: middle;
`
const Indikator = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border-bottom: none;
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;
    background-color: ${props => colors[props.type]}
`
const Text = styled.span`
    vertical-align: middle;

    a:hover {
        text-decoration: none
    }
`
/* </style> */

class LittleStatus extends React.Component<Props, State> {

    private readonly name = prefix + "little_status";

    public static defaultProps: Props = {
        title: "",
        type: "success",
        text: "",
        style: {},
    }

    public render() {

        const className = `${this.name} ${this.name}--${this.props.type}`
        const classIndikator = `${this.name}__indikator tooltip`
        const classText = `${this.name}__text`

        const text = this.props.text ?
                        (<Text className={classText}> {this.props.text}</Text>)
                    :
                        this.props.children

        return (
            <Wrapper className={className}  style={this.props.style}>
                <Indikator type={this.props.type}
                                className={classIndikator}
                                title={this.props.title} />
                {text}
            </Wrapper>
        )
    }
}

export default LittleStatus
