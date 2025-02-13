const htmlAttrs = [
            "accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt",
            "async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","challenge",
            "charSet","checked","cite","classID","className","colSpan","cols","content","contentEditable",
            "contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir",
            "disabled","download","draggable","encType","form","formAction","formEncType","formMethod",
            "formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang",
            "htmlFor","httpEquiv","icon","id","inputMode","integrity","is","keyParams","keyType","kind","label",
            "lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media",
            "mediaGroup","method","min","minLength","multiple","muted","name","noValidate","nonce","open",
            "optimum","pattern","placeholder","poster","preload","profile","radioGroup","readOnly","rel",
            "required","reversed","role","rowSpan","rows","sandbox","scope","scoped","scrolling","seamless",
            "selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcLang","srcSet","start","step",
            "style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap",
            "about","datatype","inlist","prefix","property","resource","typeof","vocab",
            "autoCapitalize","autoCorrect","color","itemProp","itemScope","itemType","itemRef","itemID",
            "security","unselectable","results","autoSave","onClick","onMouseEnter","onMouseLeave", "onMouseDown",
            "onBlur","onFocus",
]

const domOnlyProps = (obj) => {
    const result = {};
    for (const type in obj) {
        if (htmlAttrs.indexOf(type) > -1) {
            result[type] = obj[type];
        } else
        if(type.indexOf("data") === 0 || type.indexOf("aria") === 0) {
            result[type] = obj[type];
        }
    }
    return result
}

export default domOnlyProps
