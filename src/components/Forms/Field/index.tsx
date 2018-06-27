import * as React from "react"
import css from "@reglendo/cxs/component"

import {prefix, form} from "../../../config"
import domOnlyProps from "../../../helpers/dom-only-props"
import {Div} from "../../Layout/Div"
import PropTypes from 'prop-types'

export interface IFieldProps {
    group?: {
        className?: string,
        style?: any,
        bigLabel?: boolean,
        [propName: string]: any,
    },
    input?: {
        className?: string,
        name?: string,
        value?: any,
        checked?: boolean,
        onBlur?: (value: any) => void,
        onChange?: (value: any) => void,
        onDragStart?: (value: any) => void,
        onDrop?: (value: any) => void,
        onFocus?: (value: any) => void,
        onKeyDown?: (value: any) => void,
        onKeyUp?: (value: any) => void,
        onClick?: (value: any) => void,
        [propName: string]: any,
    }
    meta?: {
        active: boolean,
        autofilled: boolean,
        asyncValidating: boolean,
        dirty: boolean,
        dispatch: () => void,
        error: string,
        form: string,
        initial?: string,
        invalid: boolean,
        pristine: boolean,
        submitting: boolean,
        submitFailed: boolean,
        touched: boolean,
        valid: boolean,
        visited: boolean,
        warning: string,
    }
    labels?: {
        main?: string | JSX.Element,
        invalid?: string | JSX.Element,
        title?: string,
        placeholder?: string,
    }
    className?: string
    [propName: string]: any,
}

export const defaultFieldProps: IFieldProps = {
        group: {
            className: "",
            style: {},
            bigLabel: false,
        },
        input: {
            className: "",
            name: "",
            value: "",
            checked: false,
            onBlur: (value: any) => {},
            onChange: (value: any) => {},
            onDragStart: (value: any) => {},
            onDrop: (value: any) => {},
            onFocus: (value: any) => {},
            onKeyDown: (value: any) => {},
            onKeyUp: (value: any) => {},
            onClick: (value: any) => {},
        },
        meta: {
            active: false,
            asyncValidating: false,
            autofilled: false,
            dirty: false,
            dispatch: Function,
            error: "",
            form: "",
            invalid: false,
            pristine: true,
            submitting: false,
            submitFailed: false,
            touched: false,
            valid: true,
            visited: false,
            warning: "",
        },
        labels: {
            main: "",
            invalid: "",
            title: "",
            placeholder: "",
        },
}

const CssBigLabel = css("h3")({
    paddingLeft: "10px",
    borderLeft: "5px solid hsla(43,44%,75%,.5)",
    fontSize: "1.2em",
    margin: "10px 0",
})


const LabelComponent = ({children, bigLabel, className = ""}) => {
    if(children === "" || children === null) {
        return null
    }

    return (
            <label className={`${form}-label ${className}`}>
                {bigLabel ? <CssBigLabel>{children}</CssBigLabel> : children }
            </label>
        )
}


export const FieldLabel = css(LabelComponent)({
    display: "inline-block",
    height: "25px",
    " .muk-popup-hint": {
        verticalAlign: "middle",
    },
}, (props: any) => {
    const theme: any = props.theme
    return {
        fontSize: theme.form_label_text_size,
        fontWeight: theme.form_label_text_weight,
    }
})

FieldLabel.propTypes = {
    meta: PropTypes.any,
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
}


const FieldErrorComponent = ({...props}) => {
        if(props.meta && props.meta.error) {
            return (
                <div className={`${props.className}`}>
                    {props.meta.error}
                </div>
            )
        } else {
            return null
        }
}

export const FieldError = css(FieldErrorComponent)({
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    padding: "1px 5px",
    position: "absolute",
    top: "100%",
},(props: any) => {
    const theme: any = props.theme
    return {
        left: theme.radius,
        background: theme.red,
    }
})

FieldError.propTypes = {
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
}

const FieldComponent: React.SFC<IFieldProps> = (props) => {

    const { meta, input, labels, group, style, ...others } = props
    const isInvalid = !!props.meta.error || props.meta.invalid
    return (
        <Div className={`${form}-group ${props.name ? "m-field-" + props.name : ""} ${props.disabled ? "disabled" : ""} ${props.required ? "required" : ""}  ${props.className || ""}`}
            title={props.labels.title}
            {...style}>
                <FieldError meta={meta} className={`${form}__validation`} />
                {(props.label || others.label || labels.main) &&
                    <FieldLabel name={props.name} bigLabel={group.bigLabel}>
                        {props.label ? props.label : (others.label ? others.label : labels.main)}
                    </FieldLabel>
                }
                <div className={`m-isinvalid ${isInvalid ? `m-invalid` : ""}`}>
                    {props.children}
                </div>
        </Div>
    )
}

FieldComponent.defaultProps = defaultFieldProps

FieldComponent.propTypes = {
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
}

export const Field = css(FieldComponent)({
    position: "relative",

    ".muk-checkbox .m-isinvalid.m-invalid": {
        borderColor: "transparent",
    },
},(props: any) => {
    const theme: any = props.theme
    let styles = {}
    if((props.input && props.input.name) || props.name) {
        styles = {
            marginBottom: "30px",
            paddingRight: "10px",
        }
    }

    return {
        ...styles,
        "& .m-invalid": {
            borderRadius: `${parseInt(theme.radius,10) + 2}px`,
            border: `1px solid ${theme.red}`,
        },
        ...props.s,
    }
})


Field.propTypes = {
    input: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
}