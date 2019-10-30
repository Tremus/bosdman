import React from 'react';
import { getStaticUrl } from '../utils';

const quotes = [
    'big benis :DDD in ma facee :dddDDD fuggg X-DDDD',
    'god milgg?',
    'ebin',
    'remember brivades, bervidin id for ebergency use only',
    'sburlex sbrlölö :DDDDDDD ebin mage :DDDD',
];

const getQuoteNum = () => Math.floor(Math.random() * quotes.length);

export default () => (
    <nav>
        <div style={{ display: 'flex' }}>
            <img src={`${getStaticUrl()}/img/spurdo.gif`} alt="logo" height="54" width="96" />
            <div style={{ lineHeight: '50px', marginLeft: 8 }}>
                <code style={{ fontSize: 24 }}>{`<🅱️osdman>`}</code>
            </div>
        </div>
        <i style={{ minWidth: 150, alignSelf: 'center', marginLeft: '1rem' }}>
            <span style={{ fontFamily: 'serif', fontSize: 16 }}>{`"${quotes[getQuoteNum()]}"`}</span>
            <br />
            <span style={{ float: 'right', fontSize: 12 }}>-Spurdo Spärde</span>
        </i>
    </nav>
);
