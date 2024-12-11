declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}


type CSSModule = {
    [className: string]: string;
};


// 추후 로컬에서 svg 이미지를 사용하게 될 경우 추가, 사용하지 않을 경우 삭제할 예정
// declare module '*.svg' {
//     const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default value;
// }