import type {
    AllComponentsScriptsTarget,
    ComponentInfo,
} from '@vapor-docs/src/types/allComponents.types';
import fs from 'fs';

import ComponentCard from '../ComponentCard';
import styles from './AllComponentsList.module.scss';
import { getComponentRoute } from './AllComponentsLists.utils';

const AllComponentsList = ({
    library = 'components',
}: {
    library: AllComponentsScriptsTarget;
}) => {
    const data = fs.readFileSync(
        `src/data/${library}/all-components.json`,
        'utf-8',
    );

    const allComponentsList = JSON.parse(data) as ComponentInfo[];
    return (
        <div className={styles.container}>
            {allComponentsList.map((component) => {
                const componentHref = getComponentRoute(
                    component.name,
                    library,
                );
                return (
                    componentHref && (
                        <ComponentCard
                            key={component.name}
                            name={component.name}
                            imageUrl={component.imageUrl}
                            alt={component.name}
                            href={componentHref}
                            description={component.description}
                            componentType={component.componentType}
                        />
                    )
                );
            })}
        </div>
    );
};

export default AllComponentsList;
