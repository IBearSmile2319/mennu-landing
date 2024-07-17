import type React from "preact/compat";
import { typography, align as AlingData, type TTypographyProps, colors } from "./types"
import type { Component, JSX } from "preact/compat";

interface Props extends TTypographyProps {
    children: any;
    Tag?: any;
}

const Typography = ({
    Tag = "div",
    variant = "display",
    weight = "medium",
    align = "left",
    class: className,
    color = "primary",
    children
}: Props) => {
    return (
        <Tag class={`${typography[variant][weight]} ${AlingData[align]} ${colors[color]} ${className}`}>
            {children}
        </Tag>
    )
}

export default Typography
