import type { CSSProperties } from 'react';

import type { NanoRenderer } from 'nano-css';
import type { CSSOMAddon } from 'nano-css/addon/cssom';
import type { VCSSOMAddon } from 'nano-css/addon/vcssom';

export type Nano = NanoRenderer & CSSOMAddon & VCSSOMAddon;

export type CSSObject = {
    [key: string]: CSSProperties;
};

export type ClassNames<T> = {
    [K in keyof T]: string;
};
