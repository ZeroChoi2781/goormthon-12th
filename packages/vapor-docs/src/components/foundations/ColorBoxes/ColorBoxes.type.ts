import type {
    ColorToken,
    PrimitiveColor,
    SemanticColorType,
} from '@vapor-docs/src/types/tokens';

export type ColorBoxesProps = {
    tokens: ColorToken<PrimitiveColor | SemanticColorType>;
};
