interface FieldProps {
    input?: {
        checked?: boolean,
        value?: any,
        name?: string,
        onBlur?: (value: any) => void,
        onChange?: (value: any) => void,
        onDragStart?: (value: any) => void,
        onDrop?: (value: any) => void,
        onFocus?: (value: any) => void,
        onKeyDown?: (value: any) => void,
        onKeyUp?: (value: any) => void,
        onClick?: (value: any) => void,
        style?: any,
        disabled?: boolean,
    }
    meta?: {
        active: boolean,
        autofilled: boolean,
        asyncValidating: boolean,
        dirty: boolean,
        dispatch: () => void,
        error: string,
        form: string,
        invalid: boolean,
        pristine: boolean,
        submitting: boolean,
        submitFailed: boolean,
        touched: boolean,
        valid: boolean,
        visited: boolean,
        warning: string,
    }
    addProps?: any
}

export default FieldProps
