import {
    AttemptOutlineIcon,
    BookIcon,
    FormatColorTextOutlineIcon,
    ObjectIcon,
    TrashIcon,
} from '@goorm-dev/vapor-icons';
import type { IconProps } from '@goorm-dev/vapor-icons';

export const SIDEBAR_ICON: {
    [key: string]: (props: IconProps) => React.ReactNode;
} = {
    Guides: BookIcon,
    Foundation: FormatColorTextOutlineIcon,
    'Vapor Core': AttemptOutlineIcon,
    'Vapor Components': ObjectIcon,
    'Vapor Tools': ObjectIcon,
    'Deprecated Components': TrashIcon,
};
