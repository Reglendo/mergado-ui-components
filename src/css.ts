import styled from "@emotion/styled"
import isPropValid from '@emotion/is-prop-valid'

export const css:any = (el: any) => (s:any,sp?:(props) => any) => styled(el, typeof el === "string" ? { shouldForwardProp: prop => isPropValid(prop) && prop !== 'style',} : undefined)(s,(props:any) => {
    const p = sp ? sp(props) : {}
    const s = props.style ? props.style : {}
    return ({...p,...s})
})
export default css
