import React from 'react';

import styles from './MdxImage.module.scss';
import type { MdxImageProps } from './MdxImage.types';

function MdxImage({ alt, src }: MdxImageProps) {
    return <img alt={alt} src={src} className={styles.image} />;
}

export default MdxImage;
