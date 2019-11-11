import React from 'react';
import {Link} from 'react-router-dom';

import './SidebarMenuLink.less';

const SidebarMenuLink = ({title, path, icon, mixCls, active}) => {
    return (
        <li 
            className={`link ${active && 'link--active'} ${mixCls}`}
            key={title}>
            <Link to={path}>
                {icon}
                <span className='link-title'>{title}</span>
            </Link>
        </li>
    );
}

export default SidebarMenuLink;
