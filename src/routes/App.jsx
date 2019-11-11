import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Videos from './Videos/Videos.jsx';
import Shows from './Shows/Shows.jsx';
import Promocode from './Promocode/Promocode.jsx';
import Campaigns from './Campaigns/Campaigns.jsx';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu.jsx';
import PromocodeIcon from '../components/Icons/PromocodeIcon.jsx';

import './App.less';

const routes = [
    {
        title: 'Videos',
        path: '/videos',
        icon: <PromocodeIcon/>,
        page: <Videos/>
    },
    {
        title: 'Shows',
        path: '/shows',
        icon: <PromocodeIcon/>,
        page:  <Shows/>
    },
    {
        title: 'Promocode',
        path: '/promocode',
        icon: <PromocodeIcon/>,
        page:  <Promocode/>,
    },
    {
        title: 'Campaigns',
        path: '/campaigns',
        icon: <PromocodeIcon/>,
        page:  <Campaigns/>
    }
];

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='app'>
                <SidebarMenu menu={routes}/>
                <Switch>
                    {routes.map(({path, page}) => (
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
