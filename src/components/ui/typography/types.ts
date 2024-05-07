// <!-- Display -->
// <!-- class="font-hind text-[96px] font-medium leading-[112px]" | display/large -->
// <!-- class="font-hind text-[52px] font-medium leading-[64px]" | display/medium -->
// <!-- class="font-hind text-[44px] font-medium leading-[52px]" | display/small -->
// <!-- class="font-hind text-[36px] font-medium leading-[44px]" | display/x-small -->
// <!-- Heading -->
// <!-- class="font-hind text-[40px] font-medium leading-[52px]" | heading/xx-large -->
// <!-- class="font-hind text-[36px] font-medium leading-[44px]" | heading/x-large -->
// <!-- class="font-hind text-[32px] font-medium leading-[40px]" | heading/large -->
// <!-- class="font-hind text-[28px] font-medium leading-[36px]" | heading/medium -->
// <!-- class="font-hind text-[24px] font-medium leading-[32px]" | heading/small -->
// <!-- class="font-hind text-[20px] font-medium leading-[28px]" | heading/x-small -->
// <!-- Label -->
// <!-- class="font-hind text-[18px] font-medium leading-[24px]" | label/large -->
// <!-- class="font-hind text-[16px] font-medium leading-[20px]" | label/medium -->
// <!-- class="font-hind text-[14px] font-medium leading-[16px]" | label/small -->
// <!-- class="font-hind text-[12px] font-medium leading-[16px]" | label/x-small -->
// <!-- Paragraph -->
// <!-- class="font-hind text-[18px] font-regular leading-[28px]" | paragraph/large -->
// <!-- class="font-hind text-[16px] font-regular leading-[24px]" | paragraph/medium -->
// <!-- class="font-hind text-[14px] font-regular leading-[20px]" | paragraph/small -->
// <!-- class="font-hind text-[12px] font-regular leading-[20px]" | paragraph/x-small -->

// crear un objeto que contenga los estilos de los textos
export const typography = {
    display: {
        large: 'font-hind text-[96px] font-medium leading-[112px]',
        medium: 'font-hind text-[52px] font-medium leading-[64px]',
        small: 'font-hind text-[44px] font-medium leading-[52px]',
        xSmall: 'font-hind text-[36px] font-medium leading-[44px]',
        xxLarge: "",
        xLarge: "",
    },
    heading: {
        xxLarge: 'font-hind text-[40px] font-medium leading-[52px]',
        xLarge: 'font-hind text-[36px] font-medium leading-[44px]',
        large: 'font-hind text-[32px] font-medium leading-[40px]',
        medium: 'font-hind text-[28px] font-medium leading-[36px]',
        small: 'font-hind text-[24px] font-medium leading-[32px]',
        xSmall: 'font-hind text-[20px] font-medium leading-[28px]',
    },
    label: {
        large: 'font-hind text-[18px] font-medium leading-[24px]',
        medium: 'font-hind text-[16px] font-medium leading-[20px]',
        small: 'font-hind text-[14px] font-medium leading-[16px]',
        xSmall: 'font-hind text-[12px] font-medium leading-[16px]',
        xxLarge: "",
        xLarge: "",
    },
    paragraph: {
        large: 'font-hind text-[18px] font-regular leading-[28px]',
        medium: 'font-hind text-[16px] font-regular leading-[24px]',
        small: 'font-hind text-[14px] font-regular leading-[20px]',
        xSmall: 'font-hind text-[12px] font-regular leading-[20px]',
        xxLarge: "",
        xLarge: "",
    },
} as const;

// text-left	text-align: left;
// text-center	text-align: center;
// text-right	text-align: right;
// text-justify	text-align: justify;
// text-start	text-align: start;
// text-end	text-align: end;
export const align = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
    start: 'text-start',
    end: 'text-end',
} as const;

export const colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    complementaryI: 'text-complementaryI',
    complementaryII: 'text-complementaryII',
    white: 'text-white',
} as const;

export type TTypographyProps = {
    variant?: keyof typeof typography;
    weight?: keyof typeof typography["heading"];
    align?: keyof typeof align;
    color?: keyof typeof colors;
    class?: string;
};



// example
// <div class="font-hind text-[96px] font-medium leading-[112px]">Display Large</div>
// <div class="font-hind text-[52px] font-medium leading-[64px]">Display Medium</div>
// <div class="font-hind text-[44px] font-medium leading-[52px]">Display Small</div>
// <div class="font-hind text-[36px] font-medium leading-[44px]">Display X-Small</div>

// <div class="font-hind text-[40px] font-medium leading-[52px]">Heading XX-Large</div>
// <div class="font-hind text-[36px] font-medium leading-[44px]">Heading X-Large</div>
// <div class="font-hind text-[32px] font-medium leading-[40px]">Heading Large</div>
// <div class="font-hind text-[28px] font-medium leading-[36px]">Heading Medium</div>
// <div class="font-hind text-[24px] font-medium leading-[32px]">Heading Small</div>
// <div class="font-hind text-[20px] font-medium leading-[28px]">Heading X-Small</div>

// <div class="font-hind text-[18px] font-medium leading-[24px]">Label Large</div>
// <div class="font-hind text-[16px] font-medium leading-[20px]">Label Medium</div>
// <div class="font-hind text-[14px] font-medium leading-[16px]">Label Small</div>
// <div class="font-hind text-[12px] font-medium leading-[16px]">Label X-Small</div>

// <div class="font-hind text-[18px] font-regular leading-[28px]">Paragraph Large</div>
// <div class="font-hind text-[16px] font-regular leading-[24px]">Paragraph Medium</div>
// <div class="font-hind text-[14px] font-regular leading-[20px]">Paragraph Small</div>
// <div class="font-hind text-[12px] font-regular leading-[20px]">Paragraph X-Small</div>