import type { ReactElement, ReactNode } from 'react';
import React, { isValidElement } from 'react';

import { Root as RadixRadioGroupRoot } from '@radix-ui/react-radio-group';
import cn from 'classnames';

import { Indicator } from './Indicator';
import { Item } from './Item';
import { Label } from './Label';
import { RadioGroupProvider } from './RadioGroup.context';
import styles from './RadioGroup.module.scss';
import type { RadioGroupProps } from './RadioGroup.types';

const RadioGroup = ({
    size = 'md',
    invalid = false,
    direction = 'vertical',
    selectedValue,
    defaultSelectedValue,
    onSelectedValueChange,
    children,
    ...props
}: RadioGroupProps) => {
    /**
     * Root의 value는 Item의 value에 포함되는지 여부를 판단하기 위한 로직입니다.
     */
    const values = React.Children.toArray(children)
        .filter(
            (
                child: ReactNode,
            ): child is ReactElement<{ value: string | number }> => {
                if (!isValidElement(child)) return false;
                if (typeof child.type === 'string') return false;
                if (!('displayName' in child.type)) return false;

                return child.type.displayName === 'Item';
            },
        )
        .map((item) => item.props.value); // props.value는 string 또는 number로 추론됩니다.

    if (
        (selectedValue && !values.includes(selectedValue)) ||
        (defaultSelectedValue && !values.includes(defaultSelectedValue))
    ) {
        console.error(
            'RadioGroup의 value는 RadioGroup.Item의 value 중 하나여야 합니다.',
        );
    }

    return (
        <RadioGroupProvider
            value={{
                size,
                invalid,
            }}
        >
            <RadixRadioGroupRoot
                value={selectedValue}
                defaultValue={defaultSelectedValue}
                onValueChange={onSelectedValueChange}
                orientation={direction}
                disabled={false}
                className={cn(
                    styles.radioGroup,
                    styles[`radioGroup_${direction}`],
                    styles[`radioGroup_${direction}_${size}`],
                )}
                {...props}
            >
                {children}
            </RadixRadioGroupRoot>
        </RadioGroupProvider>
    );
};

RadioGroup.Item = Item;
RadioGroup.Indicator = Indicator;
RadioGroup.Label = Label;

export default RadioGroup;
