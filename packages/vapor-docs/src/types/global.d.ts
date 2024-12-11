declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

type CSSModule = {
    [className: string]: string;
};

declare module '*.mdx' {
    let MDXComponent: (props: any) => React.ReactNode;
    export default MDXComponent;
  }
  