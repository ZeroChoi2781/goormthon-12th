/** radix에서 제공하지 않는 primitive html tag를 제공 */
import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { NODES } from './Primitive.constants';

type PrimitivePropsWithRef<E extends React.ElementType> =
    React.ComponentPropsWithRef<E> & {
        asChild?: boolean;
    };

interface PrimitiveForwardRefComponent<E extends React.ElementType>
    extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}

type Primitives = {
    [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E>;
};

const Primitive = NODES.reduce((primitive, node) => {
    const Node = React.forwardRef(
        (props: PrimitivePropsWithRef<typeof node>, forwardedRef) => {
            const { asChild, ...primitiveProps } = props;
            const Comp = (asChild ? Slot : node) as React.ElementType;

            if (typeof window !== 'undefined') {
                window[Symbol.for('radix-ui')] = true;
            }

            return <Comp {...primitiveProps} ref={forwardedRef} />;
        },
    );

    Node.displayName = `Primitive.${node}`;

    return { ...primitive, [node]: Node };
}, {} as Primitives);

export default Primitive;
export type { PrimitivePropsWithRef };
