import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import Logo from '../Logo/Logo.jsx';
import PromocodeIcon from '../Icons/PromocodeIcon.jsx';
import SidebarMenuItem from './SidebarMenuItem/SidebarMenuItem.jsx';

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
        const {menu, location: {pathname}} = this.props;

        console.log(menu);

        return (
            <div className='sidebar-menu'>
                <nav>
                    <Logo/>
                    <ul className='sidebar-menu__list'>
                        <SidebarMenuItem
                            mixCls='sidebar-menu__border'
                            active={pathname === '/'}
                            title='dashboard'
                            path='/'
                            icon={<PromocodeIcon/>}/>
                        {
                            menu.map(({path, ...rest}) => (
                                <SidebarMenuItem
                                    key={path}
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
