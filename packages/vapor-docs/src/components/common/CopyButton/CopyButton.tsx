'use client';

import { useState } from 'react';

import { IconButton } from '@goorm-dev/vapor-core';
import { ConfirmOutlineIcon, CopyIcon } from '@goorm-dev/vapor-icons';
import { track } from '@vercel/analytics';

import type { CopyButtonProps } from './CopyButton.types';

const CopyButton = ({ text, className }: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const onClickCopy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <IconButton
            aria-label="Copy"
            icon={isCopied ? ConfirmOutlineIcon : CopyIcon}
            onClick={async () => {
                await onClickCopy();
                track('Copy import Button', {
                    copyComponent: text,
                    count: 1,
                });
            }}
            disabled={isCopied}
            className={className}
            color="secondary"
            shape="outline"
            size="md"
        />
    );
};

export default CopyButton;
