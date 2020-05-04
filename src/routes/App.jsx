import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './HomePage/HomePage.jsx';

import './App.less';

const ROUTES = [
    {
        title: 'Home',
        path: '/',
        page: <HomePage/>
    }
];

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Switch>
                    {ROUTES.map(({path, page}) => (
                        <Route 
                            key={path}
                            path={path}>
                            {page}
                        </Route>
                    ))}
                    <Route
                        key='404'
                        path="*">
                        404
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App;
