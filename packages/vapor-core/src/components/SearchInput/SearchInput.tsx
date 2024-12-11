import React from 'react';

import { useId } from '@radix-ui/react-id';
import cn from 'classnames';

import Primitive from '../Primitive';
import Field from './Field';
import Label from './Label';
import { SearchInputProvider } from './SearchInput.context';
import styles from './SearchInput.module.scss';
import type { SearchInputProps } from './SearchInput.types';

const SearchInput = ({
    size = 'md',
    disabled = false,
    invalid = false,
    className,
    children,
    ...props
}: SearchInputProps) => {
    const searchInputId = useId();

    return (
        <SearchInputProvider
            id={searchInputId}
            size={size}
            disabled={disabled}
            invalid={invalid}
        >
            <Primitive.div
                role="search"
                className={cn(
                    styles.wrapper,
                    {
                        [styles.wrapper_disabled]: disabled,
                    },
                    className,
                )}
                {...props}
            >
                {children}
            </Primitive.div>
        </SearchInputProvider>
    );
};

SearchInput.Field = Field;
SearchInput.Label = Label;

export default SearchInput;
