'use client';

import { Text } from '@goorm-dev/vapor-components';
import cn from 'classnames';

import ColorBox from '../ColorBox';
import styles from './ColorBoxes.module.scss';
import type { ColorBoxesProps } from './ColorBoxes.type';

const ColorBoxes = ({ tokens }: ColorBoxesProps) => {
    return (
        <div className="d-flex flex-column">
            {tokens.map(({ title, colorShade, transparent }) => (
                <section
                    key={title}
                    className={cn('d-flex flex-column', styles.container)}
                >
                    <Text typography="heading5" className="mb-3">
                        {title}
                    </Text>

                    <div className={styles.boxes}>
                        {colorShade.map((color) => (
                            <ColorBox key={color} color={color} />
                        ))}
                    </div>

                    {transparent && (
                        <div className="d-flex flex-column mt-4">
                            <Text
                                typography="subtitle1"
                                color="text-alternative"
                                className="mb-1"
                            >
                                Transparent
                            </Text>
                            <div className={styles.boxes}>
                                {transparent.map((color) => (
                                    <ColorBox key={color} color={color} />
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            ))}
        </div>
    );
};

export default ColorBoxes;
