import * as React from "react"
import {prefix} from "config"
import styled from "styled-components"

export interface Props {
    width: number
    height: number
    style?: any
    addClass?: string
}
export interface State {
}

/* <style> */
const Component = styled.div`
    position: relative;
`
const Shadow = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgba(219, 203, 163, 0.25);
    margin: auto;
`

const Wrapper = styled.div`
    display: table;
    width: 100%;
    height: 100%;
`
const Container = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`
/* </style> */

class Placeholder extends React.Component<Props, State> {

    private readonly name = prefix + "placeholder";

    public static defaultProps: Props = {
        width: 100,
        height: 100,
        style: {},
        addClass: "",
    }

    public render() {
        const { addClass, style, width, height } = this.props

        const className = `${this.name} ${addClass ? addClass : ""}`

        const object: any = Object
        const styles = object.assign({}, style, { paddingBottom: `${(height * 100 / width)}%` })

        return (
            <Component className={className} style={styles}>
                <Shadow className={`${this.name}__shadow`}>
                    <Wrapper className={`${this.name}__wrapper`}>
                        <Container className={`${this.name}__container`}>
                            {this.props.children}
                        </Container>
                    </Wrapper>
                </Shadow>
            </Component>
        )
    }
}

export default Placeholder
