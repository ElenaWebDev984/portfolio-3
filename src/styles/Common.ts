import {theme} from "./Theme.ts";

type FontType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax} : FontType) => `
font-family: ${family || "Poppins"};
font-weight: ${weight || 400};
color: ${color || theme.colors.h2h3Font};
line-height: ${lineHeight || 1.2};

// font-size: calc((100vw -360px) / (1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

font-size: clamp(${Fmin}px, calc( (100vw - 360px) / (1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);

// font-size: clamp(${Fmin}px, calc( (100vw - 360px) / (1600 - 360) * (58 - 36) + 36px), ${Fmax}px);
`