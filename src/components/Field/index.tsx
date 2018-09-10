import * as React from "react"
import css from "@reglendo/cxs/component"

import {form} from "../../config"
import Div from "../Div"
import PropTypes from 'prop-types'
import FieldLabel from "../FieldLabel"
import FieldError from "../FieldError"

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
        labels: {
            main: "",
            invalid: "",
            title: "",
            placeholder: "",
        },
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
    meta: PropTypes.any,
    className: PropTypes.string,
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

export default Field
