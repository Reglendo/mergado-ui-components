export type ID = number | string

export interface Action {
    type: string
    icon: JSX.Element | string
    action: () => any
    disabled: boolean
}

export interface Filter {
    type: string
    action: (e: any) => any
    disabled?: boolean
    label?: string | JSX.Element
    value: any
}

export type Type = "warning" | "success" | "error" | "inactive" | "info" | "message"