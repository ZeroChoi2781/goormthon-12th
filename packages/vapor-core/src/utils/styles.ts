export const formatCssValue = (value: string | number | undefined) => {
    if (Number(value)) return `${value}px`;

    return value;
};
