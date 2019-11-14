import React from 'react';
import './HeaderLayout.less';

const HeaderLayout = ({children}) => {
    return (
        <div className='header-layout'>
            <div className='header-layout__header'>
                <input 
                    placeholder='Search videos, shows and people'
                    className='header-layout__header-input'/>
            </div>
            {children}
        </div>
    )
}

export default HeaderLayout;
