import { ReactNode } from "react"

export type ThemeProviderProps = {
 children?: ReactNode
 value?: any
}

export type ThemeProps<T> = {
    theme: T
}