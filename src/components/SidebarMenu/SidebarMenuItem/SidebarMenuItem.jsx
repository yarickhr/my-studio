import React from 'react';
import {Link} from 'react-router-dom';
import EditableMenu from '../../EditableMenu/EditableMenu.jsx'

import './SidebarMenuItem.less';

const SidebarMenuItem = ({title, path, icon, editableSubmenu, mixCls, active}) => {

    return (
        <li 
            className={`menu-item ${mixCls ? mixCls : ''}`}
            key={title}>
            {
                (Array.isArray(editableSubmenu) && editableSubmenu.length)
                ?  <EditableMenu
                        icon={icon}
                        title={title}
                        path={path}
                        menu={editableSubmenu}/>
                :  <Link 
                    className={`menu-item__title ${active ? 'menu-item__title--active' : ''}`}
                    to={path}>
                    {icon}
                    <span className='menu-item__title-text'>{title}</span>
                </Link>
            }
        </li>
    );
}

export default SidebarMenuItem;
