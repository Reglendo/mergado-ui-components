import * as React from "react"
import css from "cxs/component"
import {prefix} from "../../../config"

export interface Props {
    active?: boolean
    link?: JSX.Element | string
    style?: any
    onClick?: (event: any) => any
}

export interface State {
}

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
            <Item className={`${className}`} style={style} title={" "} selected={active}>
                <Link className={`${this.name}__step`} onClick={onClick}>
                    {link}
                </Link>
            </Item>
        )
    }
}
const Item = css("li")({
    display: "inline-block",
    margin: 0,
    padding: 0,
    ":first-of-type .muk-wizard_nav__item__step": {
        marginLeft: "20px",
    },
    "&:after": {
        content: "attr(title)",
        display: "inline-block",
        width: "32px",
        height: "32px",
        transform: "rotate(-45deg)",
        verticalAlign: "middle",
        borderWidth: "0 3px 3px 0",
        marginRight: "-14px",
        marginLeft: "-14px",
        clipCath: "polygon(100% 0, 100% 50%, 100% 100%, 0 100%)",
        position: "relative",
        zIndex: 1,
    },
},(props: any) => {
    return {
        background: props.selected ? props.theme.blue : "transparent",
        ":after": {
            borderColor: props.theme.grey,
            background: props.selected ? props.theme.blue : props.theme.grey,
        },
        ":first-of-type": {
            borderRadius: props.theme.radius,
        },
    }
})

const Link = css("a")({
    fontSize: "13px",
    display: "inline-block",
    height: "36px",
    lineHeight: "36px",
    color: "#fff",
    marginLeft: "35px",
    minWidth: "60px",
    position: "relative",
    zIndex: 2,
    ":hover": {
        textDecoration: "none",
        color: "#fff",
    },
    ":focus" : {
        textDecoration: "none",
        color: "#fff",
    },
    ":active": {
        textDecoration: "none",
        color: "#fff",
    }
})
export default WizardStep
