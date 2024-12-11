import type { PropsTableValue } from '../LiveDemo/LiveDemo.types';

export type Tprop = PropsTableValue & {
    example?: string;
};

export type TFuncTarget =
    | React.ReactElement
    | ((props: any) => React.ReactNode);

export type TArrowTarget = React.FunctionComponent<any>;

export type Ttarget = (TFuncTarget | TArrowTarget) & {
    defaultProps?: {
        [key: string]: any;
    };
};

export type TRowProps = {
    name: string;
    value: Tprop;
    target: Ttarget;
};

export type PropTableProps = {
    props: { [key: string]: Tprop };
    target: Ttarget;
};
