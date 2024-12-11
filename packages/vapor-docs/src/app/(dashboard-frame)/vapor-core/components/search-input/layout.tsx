import { TableOfContentProvider } from '@vapor-docs/src/components/common/TableOfContents/TableOfContents.hooks';
import {
    getComponentHeadings,
    getRelativePath,
} from '@vapor-docs/src/components/common/TableOfContents/TableOfContents.utils';
import path from 'path';
import { fileURLToPath } from 'url';

const Layout = ({ children }) => {
    const rootDir = process.cwd();
    const contentsPath = path.dirname(fileURLToPath(import.meta.url));

    const contentsPathResult = getRelativePath(
        rootDir,
        contentsPath,
        'SearchInput',
    );
    const mdxHeadings = getComponentHeadings(contentsPathResult);

    return (
        <TableOfContentProvider mdxHeadings={mdxHeadings}>
            {children}
        </TableOfContentProvider>
    );
};

export default Layout;
