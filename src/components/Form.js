import React from 'react';
import RequestView from './RequestView';
import ResponseView from './ResponseView';
import Spinner from './Spinner';
import { port } from '../Config';

export default class extends React.Component {
    state = {
        view: 'REQUEST',
        method: 'GET',
        uri: '',
        headers: [['', ''], ['', '']],
        cookies: [['', ''], ['', '']],
        body: '',
        res: {
            statusCode: undefined,
            headers: undefined,
            body: undefined,
            request: undefined,
        },
    };

    getHeaders() {
        var headers = {};
        this.state.headers.forEach(h => {
            if (h[0] && h[1]) {
                headers[h[0]] = h[1];
            }
        });
        const Cookie = this.getCookies();

        if (Cookie) {
            headers['Cookie'] = Cookie;
        }
        return headers;
    }

    getCookies() {
        return this.state.cookies
            .filter(v => v[0] && v[1])
            .map(v => `${v[0]}=${v[1]};`)
            .join(' ');
    }

    changeState = (key, value) => {
        this.setState({ [key]: value });
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    toggleView = view => {
        this.setState({ view });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { method, uri, body } = this.state;
        if (!uri) return;
        this.setState({ view: 'LOADING' });

        const headers = this.getHeaders();
        const init = {
            uri,
            method,
            headers,
            body,
        };
        const res = await fetch(`http://localhost:${port}/request`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(init),
        });
        const data = await res.json();

        this.setState({ res: data, view: 'RESPONSE' });
    };

    render() {
        const { view, method, uri, headers, cookies, body, res } = this.state;

        return (
            <form onSubmit={this.handleSubmit} style={{ padding: 8, boxSizing: 'border-box' }}>
                {/* HEADER */}
                <div id="form-header">
                    <select name="method" defaultValue={method} onChange={this.handleChange}>
                        <option value="GET">GED</option>
                        <option value="POST">BOST</option>
                        <option value="PUT">BUD</option>
                        <option value="HEAD">HED</option>
                        <option value="DELETE">DELET</option>
                        <option value="PATCH">BADGE</option>
                        <option value="OPTIONS">OBTIONS</option>
                    </select>
                    <input
                        type="uri"
                        name="uri"
                        value={uri}
                        placeholder="https://example.com/api/testing?variable=lmao&u=rgay"
                        onChange={this.handleChange}
                    />
                    <button type="submit">fedge!</button>
                </div>
                {/* VIEW SELECT */}
                <div className="form-req-res">
                    <button
                        type="button"
                        className="form-req-res-btn"
                        onClick={() => this.toggleView('REQUEST')}
                        disabled={view === 'REQUEST'}
                    >
                        regwesd
                    </button>
                    <button
                        type="button"
                        className="form-req-res-btn"
                        onClick={() => this.toggleView('RESPONSE')}
                        disabled={view === 'RESPONSE'}
                    >
                        resbonse
                    </button>
                </div>
                {/* VIEWS */}
                {view === 'REQUEST' ? (
                    <RequestView
                        method={method}
                        headers={headers}
                        cookies={cookies}
                        body={body}
                        changeState={this.changeState}
                        handleChange={this.handleChange}
                    />
                ) : view === 'RESPONSE' ? (
                    <ResponseView {...res} />
                ) : view === 'LOADING' ? (
                    <Spinner />
                ) : null}
            </form>
        );
    }
}
