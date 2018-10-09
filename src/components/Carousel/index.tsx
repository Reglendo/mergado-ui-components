import * as React from "react"
import css from "@reglendo/cxs/component"
import {prefix} from "../../config"
import IconChevronLeft from "@reglendo/mergado-ui-icons/lib/icons/IconChevronLeft"
import IconChevronRight from "@reglendo/mergado-ui-icons/lib/icons/IconChevronRight"
import PropTypes from "prop-types"
import Div from "../Div"
import {Button} from "../Button"
export interface Props {
    children: any
    style?: any
    topLayer?: JSX.Element
    className?: string
    timeout?: number
}
export interface State {
    active: number
}

export class Carousel extends React.PureComponent<Props, State> {

    private readonly name = prefix + "carousel";
    private timer = null
    public constructor(props) {
        super(props)
        this.state = {
            active: 1,
        }

        this.increaseActive = this.increaseActive.bind(this)
        this.decreaseActive = this.decreaseActive.bind(this)
        this.setActive = this.setActive.bind(this)

    }

    public componentWillMount() {
        if(this.props.timeout) {
            this.timer = setInterval(this.increaseActive,this.props.timeout*1000)
        }
    }

    public componentWillUnmount() {
        clearInterval(this.timer)
    }


    protected increaseActive() {
        const steps = this.props.children.length
        this.setState({ active: this.state.active%steps+1})
    }
    protected decreaseActive() {
        const steps = this.props.children.length
        this.setState({ active: (this.state.active-2 + steps)%steps + 1})
    }
    protected setActive(s) {
        const steps = this.props.children.length
        this.setState({ active: parseInt(s.target.dataset.step,10)})
    }


    public render() {
        const steps = this.props.children.length

        let i = 1
        let j = 1
        const translate = -((this.state.active - 1) / steps) * 100

        return (
            <CssWrapper className={`${this.name} ${this.props.className || ""}`} s={this.props.style}>
                <CssMukBigButton color="nocolor" left={true}
                             className="m-big-prev"
                              onClick={this.decreaseActive}
                              icon={<IconChevronLeft size={20} />} />

                {this.props.topLayer}
                <Div className="m-slides" padding="10px 30px" maxWidth={"100%"} overflowX={"hidden"}>
                <CssSlides className="m-slides-wrapper" count={steps} translate={translate}>
                    {this.props.children.filter(o => o).map(o => {
                        return  <CssSlide key={'slide_'+i} className={`m-slide ${this.state.active === 1 && "active"}`}
                                        active={this.state.active === i} data-next={i++}>
                                    {o}
                                </CssSlide>
                    })}
                </CssSlides>
                </Div>

                <div className="m-controls">
                    <Button className="m-prev" color="nocolor"  style={{fontSize: "14px"}}
                        onClick={this.decreaseActive} icon={<IconChevronLeft size={12} text="Předchozí" />} />
                            &nbsp;
                            {this.props.children.filter(o => o).map(o => {
                            j++
                            return this.state.active === j - 1 ?
                                    <CssMukCircle key={j-1} color="nocolor" size="tiny"
                                          className={"m-point"}
                                          onClick={this.setActive} type="void" data-step={j-1}>●</CssMukCircle>
                                :
                                    <CssMukCircle color="nocolor" size="tiny"
                                            className={"m-point"}
                                            onClick={this.setActive} type="void" key={j-1} data-step={j-1}>○</CssMukCircle>
                            })}
                    <Button className="m-next" color="nocolor" style={{fontSize: "14px"}}
                            onClick={this.increaseActive}
                            icon={<IconChevronRight size={12} textFirst={true} text="Další" />} />
                </div>

                <CssMukBigButton className="m-big-next" color="nocolor"
                    onClick={this.increaseActive}
                    icon={<IconChevronRight size={20} />} />
        </CssWrapper>
        )
    }
}

const CssWrapper = css("div")({
    overflowX: "hidden",
    maxWidth: "100%",
    position: "relative",
    textAlign: "center",
}, props => ({
        ...props.s,
    }))

const CssMukBigButton = css(Button)({
    position: "absolute",
    zIndex: 10,
    top: 0,
    bottom: 0,
    margin: "auto"

}, props => ({
    left: props.left ? "0px" : "auto",
    right: props.left ? "auto" : "0px",

}))

CssMukBigButton.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool
}

const CssSlides = css("div")({
    display: "table",
    tableLayout: "fixed",
    transition: "transform 0.2s",
}, props => ({
    width: props.count * 100 + "%",
    transform: "translate3d("+props.translate+"%,0,0)",
}))

CssSlides.propTypes = {
    count: PropTypes.number,
    translate: PropTypes.number
}

const CssSlide = css("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
    transition: "0.1s opacity",
}, props => ({
    opacity: props.active ? 1 : 0,
}))


CssSlide.propTypes = {
    active: PropTypes.bool,
}

const CssMukCircle = css(Button)({
    fontSize: "22px",
    opacity: 0.8,
    display: "inline-block",
    padding: "5px",
    color: "#333",
})

export default Carousel
