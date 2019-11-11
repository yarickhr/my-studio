import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import Logo from '../Logo/Logo.jsx';
import PromocodeIcon from '../Icons/PromocodeIcon.jsx';
import SidebarMenuLink from './SidebarMenuLink/SidebarMenuLink.jsx';

import './SidebarMenu.less';

class SidebarMenu extends Component {
    static propTypes = {
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                path: PropTypes.string,
                icon: PropTypes.icon
            })
        )
    }

    render() {
        const {menu, match, location: {pathname}, history} = this.props;

        console.log(location);

        return (
            <div className='sidebar-menu'>
                <nav>
                    <Logo/>
                    <ul className='sidebar-menu__list'>
                        <SidebarMenuLink 
                            mixCls='sidebar-menu__border'
                            active={pathname === '/'}
                            title='dashboard'
                            path='/'
                            icon={<PromocodeIcon/>}/>
                       {
                           menu.map(({path, ...rest}) => (
                                <SidebarMenuLink
                                    active={path === pathname}
                                    path={path}
                                    {...rest}/>
                                )
                            )
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(SidebarMenu);
