import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { getStaticUrl } from './utils';

class App extends React.Component {
    render() {
        return (
            <main
                style={{
                    backgroundImage: `url('${getStaticUrl()}/img/space.jpg')`,
                    backgroundPositionX: 'center',
                    height: '100vh',
                }}
            >
                <div id="page-container">
                    <Navbar />
                    <Form />
                </div>
            </main>
        );
    }
}

export default App;
