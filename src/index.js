import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage.jsx';

function Root()  {
    return (
        <Router>
            <Route path='/'>
                <HomePage/>
            </Route>
        </Router>
    );
};

const domContainer = document.getElementById('content');
ReactDOM.render(<Root/>, domContainer);
