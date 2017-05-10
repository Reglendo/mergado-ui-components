interface FieldProps {
    input?: {
        checked?: boolean;
        value?: any;
        name?: string;
        onBlur?: (value: any) => void;
        onChange?: (value: any) => void;
        onDragStart?: (value: any) => void;
        onDrop?: (value: any) => void;
        onFocus?: (value: any) => void;
        style?: any;
        readonly?: boolean;
        disabled?: boolean;
    };
    meta?: {
        active: boolean;
        autofilled: boolean;
        asyncValidating: boolean;
        dirty: boolean;
        dispatch: Function;
        error: string;
        form: string;
        invalid: boolean;
        pristine: boolean;
        submitting: boolean;
        submitFailed: boolean;
        touched: boolean;
        valid: boolean;
        visited: boolean;
        warning: string;
    };
}
export default FieldProps;
