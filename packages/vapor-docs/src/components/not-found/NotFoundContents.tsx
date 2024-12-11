'use client';

import { Card, Text } from '@goorm-dev/vapor-components';
import { Button } from '@goorm-dev/vapor-core';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { NotFoundImageSrc } from './NotFoundContents.constants';
import styles from './NotFoundContents.module.scss';

const NotFoundContents = () => {
    return (
        <section
            className={cn(
                'd-flex flex-column align-items-center justify-content-center w-100 text-center',
                styles.wrapper,
            )}
        >
            <Card className={styles.errorCard}>
                <Image
                    src={NotFoundImageSrc}
                    alt="404 오류."
                    width={200}
                    height={150}
                    priority
                />

                <div className={styles.textBox}>
                    <Text as="h1" typography="heading3">
                        페이지를 찾을 수 없습니다.
                    </Text>
                    <Text as="p" typography="body1">
                        페이지의 주소가 잘못되었거나 변경되었을 수 있습니다.
                        <br />
                        아래 내용을 확인 후 문제가 해결되지 않으면 고객센터로
                        문의해 주세요.
                    </Text>
                </div>

                <ul className={styles.checkList}>
                    <li>
                        <Text as="p" typography="subtitle1" isInheritColor>
                            <b>올바른 URL</b>을 입력했는지 확인해 보세요.
                        </Text>
                    </li>
                    <li>
                        <Text as="span" typography="subtitle1" isInheritColor>
                            오류를 해결하기 위해 <b>브라우저 캐시 삭제</b> 및{' '}
                            <b>시크릿 모드에서 실행</b>해 보세요.
                        </Text>
                    </li>
                </ul>

                <div>
                    <Text
                        as="span"
                        typography="body2"
                        isResetMargin={false}
                        className={styles.contactText}
                    >
                        문제가 해결되지 않나요?
                    </Text>

                    <a href="mailto: contact@goorm.io" className="text-primary">
                        contact@goorm.io
                    </a>
                </div>

                <div className={styles.actionBox}>
                    <Button
                        color="primary"
                        size="xl"
                        className={styles.buttonToMain}
                        asChild
                    >
                        <Link href="/" replace>
                            서비스 메인으로 가기
                        </Link>
                    </Button>
                </div>
            </Card>
        </section>
    );
};

export default NotFoundContents;
