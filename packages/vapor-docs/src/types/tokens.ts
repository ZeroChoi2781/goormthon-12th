export type PrimitiveColor =
    | 'gray'
    | 'red'
    | 'pink'
    | 'grape'
    | 'violet'
    | 'blue'
    | 'cyan'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'orange';

export type SemanticColorType =
    | 'theme'
    | 'status'
    | 'text'
    | 'background'
    | 'border'
    | 'gradient';

export type ColorShade = string;

export type TransparentColor = string;

export type ColorToken<T extends PrimitiveColor | SemanticColorType> = {
    title: T;
    colorShade: ColorShade[];
    transparent?: TransparentColor[];
}[];
