import { ReactNode, FC } from 'react';

interface TAccordionProps {
    className?: string;
    items?: TAccordionItemProps[];
    allowZeroExpanded?: boolean;
    preExpanded?: string[];
}
interface TAccordionItemProps {
    id?: string | number;
    className?: string;
    heading?: string;
    itemIcon?: string | JSX.Element;
    onClick?: () => void;
    content?: ReactNode | string;
}

declare const AccordionComponent: FC<TAccordionProps>;

declare enum DefaultColorEnum {
    blue = 5,
    red = 16,
    orange = 27,
    yellow = 38,
    purple = 49,
    green = 60,
    default = 71
}
declare enum DefaultSize {
    "sm" = 0,
    "default" = 1,
    "md" = 2,
    "lg" = 3
}
declare enum DefaultBorderRadius {
    "full" = 0,
    "default" = 1,
    "square" = 2
}

interface TAlertProps {
    id: string;
    icon?: string | JSX.Element;
    children?: ReactNode;
    label?: string;
    className?: string;
    borderRadius?: keyof typeof DefaultBorderRadius;
    bordered?: boolean;
    color?: keyof typeof DefaultColorEnum;
}

declare const Alert: FC<TAlertProps>;

interface TAvatarProps {
    id: string;
    image?: string;
    size?: keyof typeof DefaultSize;
    borderRadius?: "full" | "default" | "square";
    status?: Status;
    name?: string;
    color?: keyof typeof DefaultColorEnum;
}
interface Status {
    value?: "active" | "offline" | "busy";
    note?: string;
}

declare const Avatar: FC<TAvatarProps>;

interface TButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    label?: string;
    children?: ReactNode;
    variant?: "solid" | "outlined" | "flat";
    noBaseStyle?: boolean;
    borderRadius?: "full" | "default" | "square";
    color?: keyof typeof DefaultColorEnum;
    size?: keyof typeof DefaultSize;
    icon?: string | JSX.Element;
    isLoading?: boolean;
    labelLoading?: string;
}

declare const Button: FC<TButtonProps>;

interface TCardProps {
    id: string;
    className?: string;
    children?: ReactNode;
    widthFull?: boolean;
    title?: string;
    subTitle?: string;
    thumbnail?: string;
    actions?: TButtonProps[];
    imagePosition?: "top" | "center" | "bottom";
}

declare const Card: FC<TCardProps>;

interface TImageProps {
    id: string;
    className?: string;
    src?: any;
    size?: keyof typeof DefaultSize | "auto";
    fit?: "cover" | "contain";
    borderRadius?: "full" | "default" | "square";
}

declare const Image: FC<TImageProps>;

interface TSpinnerProps {
    className?: string;
    color?: keyof typeof DefaultColorEnum | "white";
    size?: number;
    ray_height?: number;
    ray_width?: number;
    ray_radius?: number;
}

declare const Spinner: FC<TSpinnerProps>;

interface TStepperProps {
    id?: string;
    className?: string;
    steps?: TStepsProps[];
    color?: keyof typeof DefaultColorEnum;
    current?: number;
}
interface TStepsProps {
    label?: string;
    description?: string;
    content?: ReactNode;
}

declare const VerticalStepper: FC<TStepperProps>;

interface TTabsProps {
    className?: string;
    items?: TabItemProps[];
    defaultActiveTab?: number;
    variant?: "flat" | "compact";
    closable?: boolean;
    draggable?: boolean;
}
interface TabItemProps {
    id?: number;
    label?: string;
    icon?: string | JSX.Element;
    children?: ReactNode;
    disabled?: boolean;
}

declare const Tabs: FC<TTabsProps>;

export { AccordionComponent as Accordion, Alert, Avatar, Button, Card, Image, Spinner, TAccordionItemProps, TAccordionProps, TAlertProps, TButtonProps, TCardProps, TImageProps, TSpinnerProps, TStepperProps, TStepsProps, TTabsProps, TabItemProps, Tabs, VerticalStepper };
