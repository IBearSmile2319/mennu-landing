import { typography, align as AlingData, type TTypographyProps, colors } from "./types"

interface Props extends TTypographyProps {
    children: any;
}

const Typography = ({
    variant = "display",
    weight = "medium",
    align = "left",
    class: className,
    color = "primary",
    children
}: Props) => {
    return (
        <div class={`${typography[variant][weight]} ${AlingData[align]} ${colors[color]} ${className}`}>
            {children}
        </div>
    )
}

export default Typography
