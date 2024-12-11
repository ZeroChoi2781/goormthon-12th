import { Text } from '@goorm-dev/vapor-components';

import type { GuidesContentsItem } from '../GuidesDialogContents.types';
import style from './GuidesDialogContentsTemplate.module.scss';

const GuidesDialogContentsTemplate = ({
    templateItem,
}: {
    templateItem: GuidesContentsItem[];
}) => {
    return templateItem.map((content) => (
        <div key={content.title} className={style.content}>
            <Text
                typography="heading6"
                color="text-normal"
                className={style.heading}
            >
                {content.title}
            </Text>
            <ul className={style.list}>
                {content.description.map((desc) => (
                    <Text typography="subtitle1" color="text-normal" key={desc}>
                        <li>{desc}</li>
                    </Text>
                ))}
            </ul>
        </div>
    ));
};

export default GuidesDialogContentsTemplate;
