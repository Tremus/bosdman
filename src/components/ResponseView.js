import React from 'react';
import PrismCode from './PrismCode';

const Headers = ({ headers }) =>
    Object.keys(headers).map((h, i) => (
        <div key={`rh-${i}`} className="header-row">
            <div className="header-row-col">{h}:</div>
            <div className="header-row-col">{headers[h]}</div>
        </div>
    ));

export default ({ statusCode, headers, body, request }) => {
    if (!statusCode) return null;

    let language;
    const contentType = headers['content-type'];

    if (contentType.match(/^text\/html/)) {
        language = 'html';
        body = body.replace(/></g, '>\n<');
    } else if (contentType.match(/^application\/json/)) {
        language = 'js';
        body = JSON.stringify(JSON.parse(body), null, 2);
    } else {
        throw new Error(`Unhandled content-type: ${contentType}`);
    }

    return (
        <div>
            <h2>resbonse: {statusCode}</h2>
            <h3>headers</h3>
            <Headers headers={headers} />
            <h3>body</h3>
            <div style={{ wordBreak: 'break-all' }}>
                <PrismCode code={body.replace(/></g, '>\n<')} language={language} plugins={['line-numbers']} />
            </div>
            <h2>regwesd (json XDDD):</h2>
            <PrismCode code={JSON.stringify(request, null, 2)} language={'js'} plugins={['line-numbers']} />
        </div>
    );
};
