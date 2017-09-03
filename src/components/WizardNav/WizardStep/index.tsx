import * as React from "react"
import styled from "styled-components"

import {prefix} from "../../../config"

export interface Props {
    active?: boolean
    link?: JSX.Element | string
    style?: any
    onClick?: (event: any) => any
}

export interface State {
}

/* <style> */
const Item = styled.li`
    display: inline-block;
    margin: 0;
    padding: 0;
    background: ${props => props.selected ? "#00a9b8" : "transparent"};

    &:first-of-type {
        .${prefix}wizard_nav__item__step {
            margin-left: 20px;
        }
    }


    &:after {
          content: '';
          display: inline-block;
          width: 32px;
          height: 32px;
          transform: rotate(-45deg);
          background: ${props => props.selected ? "#00a9b8" : "777"};
          vertical-align: middle;
          border: solid #777;
          border-width: 0 3px 3px 0;
          margin-right: -14px;
          margin-left: -14px;
          clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%);
          position: relative;
          z-index: 1;
    }

`
const Link = styled.a`
    font-size: 13px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    color: #fff;
    margin-left: 35px;
    min-width: 60px;
    position: relative;
    z-index: 2;

    &:hover,&:focus,&:active {
        text-decoration: none;
        color: #fff;
    }


`
/* </style> */

/**
 * disable-styleguide
 */
class WizardStep extends React.Component<Props, State> {

    private readonly name = prefix + "wizard_nav__item";

    public static defaultProps: Props = {
        active: false,
        link: "",
        style: {},
        onClick: () => {},
    }

    public render() {
        const {link, active, style, onClick} = this.props
        let className = `${this.name}`
        if (active) {
            className += ` ${this.name}--active`
        }
        return (
            <Item className={`${className}`} style={style} selected={active}>
                <Link className={`${this.name}__step`} onClick={onClick}>
                    {link}
                </Link>
            </Item>
        )
    }
}

export default WizardStep
