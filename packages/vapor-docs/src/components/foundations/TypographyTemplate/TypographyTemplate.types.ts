export type TypographyProperty =
    | 'font-family'
    | 'font-size'
    | 'font-weight'
    | 'letter-spacing'
    | 'line-height';

// NOTE: font-family는 getCssVariableValue 함수를 사용해서 속성값을 얻어내는 경우, "Pretendard Variable", "-apple-system", ... 이런식으로 매우 길어지므로, 계산하지 않고 직접 정의함
export type CalculatedTypographyProperty = Exclude<
    TypographyProperty,
    'font-family'
>;

export type TypographyTemplateProps = {
    property?: TypographyProperty;
};

export type PropertyValue = {
    variable: string;
    value: string;
};

export type TypographyPropertyMap = {
    'font-family': PropertyValue[];
    'font-size': string[];
    'font-weight': string[];
    'letter-spacing': string[];
    'line-height': string[];
};
