import React from 'react';

import { useAvatarContext } from '../Avatar.context';
import Label from '../Label';
import useImageLoaded from './Image.hooks';
import styles from './Image.module.scss';
import type { ImageProps } from './Image.types';

function Image({ src, alt, ...props }: ImageProps) {
    const { label } = useAvatarContext();
    const isLoaded = useImageLoaded(src);

    return isLoaded ? (
        <img src={src} alt={alt || label} className={styles.image} {...props} />
    ) : (
        <Label />
    );
}
Image.displayName = 'Avatar.Image';

export default Image;
