/**
 * 선형 합동 생성기(Linear Congruential Generator, LCG)
 * - 점화식: Xn+1 = (a * Xn + c) % m
 * - 참고: https://ko.wikipedia.org/wiki/%EC%84%A0%ED%98%95_%ED%95%A9%EB%8F%99_%EC%83%9D%EC%84%B1%EA%B8%B0
 *
 * 선형 합동 생성기는 아래와 같은 인자들로 유일한 값을 반환한다.
 * - 0 < m (나눔수)
 * - 0 < a (곱함수) < m
 * - 0 <= c (더함수) < m
 * - 0 <= X0 (초기값) < m
 *
 * @param value 난수화 할 대체 텍스트
 * @param m 난수화를 통해 선택될 색상의 개수
 * @returns 대체 텍스트를 난수화 한 값(0 <= number < m)
 */
const stringAsciiPRNG = (value: string, m: number) => {
    const charCodes = value.split('').map((letter) => letter.charCodeAt(0));
    const len = charCodes.length;

    const a = (len % (m - 1)) + 1;
    const c = charCodes.reduce((current, next) => current + next) % m;

    const random = charCodes.reduce((acc, cur) => {
        if (!acc) return cur % m;

        return (a * acc + c) % m;
    }, 0);

    return random;
};

const getRandomNumber = (maxNumber: number) => {
    const randomNumber = Math.floor(Math.random() * maxNumber);

    return randomNumber;
};

/**
 * 대체 텍스트가 빈 문자열인 경우, 무작위 색상을 반환한다.
 * 대체 텍스트가 존재할 경우, 선형합동생성기 알고리즘에 의해 특정 색상을 반환한다.
 *
 * @param value 대체 텍스트
 * @param colors 선택할 색상의 종류
 * @returns Color CSS Variables
 */
export const getRandomColor = (value: string, colors: string[]) => {
    if (!value) return colors[getRandomNumber(colors.length)];

    return colors[stringAsciiPRNG(value, colors.length)];
};
