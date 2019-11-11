import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './routes/App.jsx';

function Root()  {
    return (
        <Router>
            <Route path='/'>
                <App/>
            </Route>
        </Router>
    );
};

const domContainer = document.getElementById('content');
ReactDOM.render(<Root/>, domContainer);
