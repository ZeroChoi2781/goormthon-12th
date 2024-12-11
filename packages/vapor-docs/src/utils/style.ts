export const getCssVariableValue = (
    variableName: string,
    element: HTMLElement = document.documentElement,
): string => {
    const computedStyles = getComputedStyle(element);
    return computedStyles.getPropertyValue(variableName).trim(); // 값의 공백 제거
};
