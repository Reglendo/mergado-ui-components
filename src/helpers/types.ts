export type ID = number | string

export interface Action {
    type: string
    icon: JSX.Element | string
    action: () => any
    disabled: boolean
}
