import { Breadcrumb, BreadcrumbItem } from '@goorm-dev/vapor-components';
import { camelCase, upperFirst } from 'lodash';

import type { DashboardNavbarTemplateProps } from './DashboardNavbarTemplate.types';

const DashboardNavbarTemplate = ({
    items,
    className,
    itemClassName,
}: DashboardNavbarTemplateProps) => {
    return (
        <div className="d-flex justify-content-between w-100">
            <Breadcrumb className={className}>
                {Object.keys(items).map((item: string, index: number) => (
                    <BreadcrumbItem
                        key={item}
                        size="sm"
                        className={itemClassName}
                        active={index === Object.keys(items).length - 1}
                    >
                        {upperFirst(camelCase(item))}
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </div>
    );
};

export default DashboardNavbarTemplate;
