import React from 'react';

const InputHeader = props => <input className="input-header" {...props} />;
const RemoveHeader = props => <button className="remove-header" type="button" {...props} />;

export default ({ method, headers, cookies, body, changeState, handleChange }) => {
    const changeHeader = (e, idx, pos) => {
        const { value } = e.target;
        headers[idx][pos] = value;
        changeState('headers', headers);
    };

    const changeCookie = (e, idx, pos) => {
        const { value } = e.target;
        cookies[idx][pos] = value;
        changeState('cookies', cookies);
    };

    return (
        <>
            <div>
                <h3>headers</h3>
                {headers.map((h, k) => (
                    <div key={`h-${k}`} className="input-header-row">
                        <InputHeader type="text" value={h[0]} placeholder="gey" onChange={e => changeHeader(e, k, 0)} />
                        <InputHeader
                            type="text"
                            value={h[1]}
                            placeholder="balue :DDD"
                            onChange={e => changeHeader(e, k, 1)}
                        />
                        <RemoveHeader onClick={() => changeState('headers', headers.filter((h, i) => i !== k))}>
                            X
                        </RemoveHeader>
                    </div>
                ))}
                <button type="button" onClick={() => changeState('headers', [...headers, ['', '']])}>
                    + header
                </button>
            </div>
            <div>
                <h3>coogies</h3>
                {cookies.map((h, k) => (
                    <div key={`c-${k}`} className="input-header-row">
                        <InputHeader type="text" value={h[0]} placeholder="gey" onChange={e => changeCookie(e, k, 0)} />
                        <InputHeader
                            type="text"
                            value={h[1]}
                            placeholder="balue :DDD"
                            onChange={e => changeCookie(e, k, 1)}
                        />
                        <RemoveHeader onClick={() => changeState('cookies', cookies.filter((c, i) => i !== k))}>
                            X
                        </RemoveHeader>
                    </div>
                ))}
                <button type="button" onClick={() => changeState('cookies', [...cookies, ['', '']])}>
                    + coogie
                </button>
            </div>
            {method !== 'GET' && (
                <div>
                    <h3>body</h3>
                    <textarea name="body" value={body} onChange={handleChange} />
                </div>
            )}
        </>
    );
};
