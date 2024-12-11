import React from 'react';

import styles from './DeprecatedColors.module.scss';

const DeprecatedColors = () => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>컴포넌트</th>
                        <th>primary</th>
                        <th>secondary</th>
                        <th>success</th>
                        <th>warning</th>
                        <th>danger</th>
                        <th>contrast</th>
                        <th>hint</th>
                        <th>select *</th>
                        <th>info *</th>
                        <th>link *</th>
                        <th>basic *</th>
                        <th>light *</th>
                        <th>dark *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alert</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td></td>
                        <td>→ hint</td>
                        <td></td>
                        <td></td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>Badge</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td></td>
                        <td>→ hint</td>
                        <td></td>
                        <td></td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>Button</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>→ secondary</td>
                        <td>→ secondary</td>
                        <td>→ secondary</td>
                        <td>→ secondary</td>
                        <td>→ secondary</td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>Progress</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td></td>
                        <td>→ hint</td>
                        <td></td>
                        <td></td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>Spinner</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td></td>
                        <td>→ hint</td>
                        <td></td>
                        <td></td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td></td>
                        <td>→ hint</td>
                        <td></td>
                        <td></td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>Toast</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>→ primary</td>
                        <td>→ danger</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>→ primary</td>
                        <td></td>
                        <td>→ primary</td>
                        <td></td>
                        <td></td>
                        <td>→ primary</td>
                        <td>→ primary</td>
                    </tr>
                    <tr>
                        <td>DropdownToggle</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>→ secondary</td>
                        <td>✅</td>
                        <td>→ secondary</td>
                        <td>→ secondary</td>
                        <td>→ select</td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>TextButton</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>→ secondary</td>
                        <td></td>
                        <td>→ secondary</td>
                        <td>→ secondary</td>
                        <td>→ secondary</td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                    <tr>
                        <td>TopBanner</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td>→ primary</td>
                        <td>→ danger</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>→ primary</td>
                        <td></td>
                        <td>→ primary</td>
                        <td></td>
                        <td></td>
                        <td>→ contrast</td>
                        <td>→ contrast</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DeprecatedColors;
