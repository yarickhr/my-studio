import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Videos from './Videos/Videos.jsx';
import Shows from './Shows/Shows.jsx';
import Promocodes from './Promocodes/Promocodes.jsx';
import Campaigns from './Campaigns/Campaigns.jsx';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu.jsx';
import PromocodeIcon from '../components/Icons/PromocodeIcon.jsx';

import HeaderLayout from '../layouts/HeaderLayout/HeaderLayout.jsx';

import './App.less';

const ROUTES = [
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
        page:  <Shows/>,
        editableSubmenu: ['Nike Air Max', 'Nike Sport']
    },
    {
        title: 'Promocode',
        path: '/promocode',
        icon: <PromocodeIcon/>,
        page:  <Promocodes/>,
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
        return (
            <div className='app'>
                <SidebarMenu menu={ROUTES}/>
                <Switch>
                    {ROUTES.map(({path, page}) => (
                        <Route 
                            key={path}
                            path={path}>
                            <HeaderLayout>
                                {page}
                            </HeaderLayout>
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
