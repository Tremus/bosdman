import React from 'react';
import { getStaticUrl } from '../utils';

const getImgNum = () => Math.floor(Math.random() * 6) + 1;

export default () => (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <img
            src={`${getStaticUrl()}/img/loading${getImgNum()}.gif`}
            alt="spinner"
            style={{ maxWidth: '100%', minHeight: 200, maxHeight: 200 }}
        />
    </div>
);
