import React from 'react';

import cn from 'classnames';

import Primitive from '../Primitive';
import { DEFAULT_COLORS } from './Avatar.constants';
import { AvatarProvider } from './Avatar.context';
import styles from './Avatar.module.scss';
import type { AvatarProps } from './Avatar.types';
import { getRandomColor } from './Avatar.utils';
import Image from './Image';
import Label from './Label';

/**
 * NOTE: Avatar의 getRandomColor 함수는 --gray-900과 명도 대비 3:1 이상인 색상만 생성합니다.
 * 추후 새로운 색상을 추가할 경우, 명도가 충분히 대비되는 값을 추가하거나 배경색에 따라 텍스트 색상을 변경할 수 있는 기능을 추가해야 합니다.
 */

const Avatar = ({
    size = 'md',
    square = false,
    label,
    className,
    style,
    children,
    ...props
}: AvatarProps) => {
    return (
        <AvatarProvider label={label} size={size}>
            <Primitive.div
                {...props}
                data-square={square}
                className={cn(
                    styles.avatar,
                    styles[`avatar_${size}`],
                    className,
                )}
                style={{
                    backgroundColor: getRandomColor(label, DEFAULT_COLORS),
                    ...style,
                }}
            >
                {children || <Label />}
            </Primitive.div>
        </AvatarProvider>
    );
};

export default Avatar;

Avatar.Image = Image;
