import React, { forwardRef } from 'react';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { ErrorCircleIcon, SearchOutlineIcon } from '@vapor-icons';
import cn from 'classnames';

import IconButton from '../../IconButton';
import Primitive from '../../Primitive';
import { DISPLAY_NAME } from '../SearchInput.constants';
import { useSearchInputContext } from '../SearchInput.context';
import styles from './Field.module.scss';
import type { FieldElement, FieldProps } from './Field.types';

const Field = forwardRef<FieldElement, FieldProps>(
    (
        {
            id: fieldId,
            value,
            onChange,
            defaultValue = '',
            spellCheck = false,
            autoComplete = 'off',
            className,
            ...props
        },
        ref,
    ) => {
        const { id, size, disabled, invalid } = useSearchInputContext();
        const [searchValue, setSearchValue] = useControllableState({
            prop: value,
            defaultProp: defaultValue,
            onChange,
        });

        return (
            <div
                className={cn(styles.container, styles[`container_${size}`], {
                    [styles.container_invalid]: invalid,
                    [styles.container_hasContents]: searchValue,
                })}
            >
                {!searchValue && (
                    <SearchOutlineIcon
                        className={cn(
                            styles.searchIcon,
                            styles[`searchIcon_${size}`],
                        )}
                    />
                )}
                <Primitive.input
                    id={fieldId || id}
                    ref={ref}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="search"
                    disabled={disabled}
                    aria-invalid={invalid}
                    autoComplete={autoComplete}
                    spellCheck={spellCheck}
                    className={cn(
                        styles.field,
                        styles[`field_${size}`],
                        className,
                    )}
                    {...props}
                />
                {searchValue && (
                    <IconButton
                        onClick={() => setSearchValue('')}
                        rounded
                        size={size}
                        color="hint"
                        shape="invisible"
                        aria-label="search clear"
                        icon={ErrorCircleIcon}
                    />
                )}
            </div>
        );
    },
);
Field.displayName = DISPLAY_NAME.Field;

export default Field;
