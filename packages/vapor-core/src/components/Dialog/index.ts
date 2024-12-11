import type {
    DialogCloseProps,
    DialogTriggerProps,
} from '@radix-ui/react-dialog';

import type { BodyProps as DialogBodyProps } from './Body/Body.types';
import type { ContentsProps as DialogContentsProps } from './Contents/Contents.types';
import type { DescriptionProps as DialogDescriptionProps } from './Description/Description.types';
import Dialog from './Dialog';
import type { DialogProps } from './Dialog.types';
import type { FooterProps as DialogFooterProps } from './Footer/Footer.types';
import type { HeaderProps as DialogHeaderProps } from './Header/Header.types';
import type { TitleProps as DialogTitleProps } from './Title/Title.types';

export default Dialog;

export type {
    DialogProps,
    DialogContentsProps,
    DialogHeaderProps,
    DialogTitleProps,
    DialogDescriptionProps,
    DialogBodyProps,
    DialogFooterProps,
    DialogTriggerProps,
    DialogCloseProps,
};
