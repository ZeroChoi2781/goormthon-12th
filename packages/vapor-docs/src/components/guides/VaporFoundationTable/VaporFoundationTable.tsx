// TODO: vapor foundation 릴리즈할 때 아래 테이블 정보 최신화하기
import { CDN_URLS } from './VaporFoundationTable.constants';

function VaporFoundationTable() {
    return (
        <table className="mb-4">
            <thead>
                <tr>
                    <th>버전</th>
                    <th>컨텍스트</th>
                    <th>테마</th>
                    <th>링크</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(CDN_URLS).map((version) => {
                    return (
                        <>
                            {CDN_URLS[version].map((item) => (
                                <tr key={item.fileName}>
                                    <td>{version}</td>
                                    <td>
                                        <code>{item.context}</code>
                                    </td>
                                    <td>{item.theme}</td>
                                    <td>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href={item.link}
                                        >
                                            {item.fileName}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </>
                    );
                })}
            </tbody>
        </table>
    );
}

export default VaporFoundationTable;
