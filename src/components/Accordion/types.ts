import { ReactNode } from "react"
import { JsxElement } from "typescript"

export interface TAccordionProps {
    className?: string
    title?: string
    items?: TAccordionItemProps[]
    allowZeroExpanded?: boolean
    preExpanded?: string[]
}

export interface TAccordionItemProps {
    id?: string | number
    className?:  string
    heading?: string
    headingIcon?: string | JsxElement
    onClick?: () => void
    content?: ReactNode | string
}