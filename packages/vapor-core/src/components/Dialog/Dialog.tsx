import React from 'react';

import { Root } from '@radix-ui/react-dialog';

import { Body } from './Body';
import { Close } from './Close';
import { Contents } from './Contents';
import { Description } from './Description';
import { DialogProvider } from './Dialog.context';
import type { DialogProps } from './Dialog.types';
import { Footer } from './Footer';
import { Header } from './Header';
import { Title } from './Title';
import { Trigger } from './Trigger';

const Dialog = ({
    size = 'md',
    scrimClickable = true,
    children,
    ...props
}: DialogProps) => {
    return (
        <DialogProvider size={size} scrimClickable={scrimClickable}>
            <Root {...props}>{children}</Root>
        </DialogProvider>
    );
};

Dialog.Trigger = Trigger;
Dialog.Contents = Contents;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Close = Close;

export default Dialog;
