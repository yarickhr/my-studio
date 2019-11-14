import React from 'react';
import PropTypes from 'prop-types';
import './PromocodeItem.less';

const PromocodeItem = ({name, link, subscriptionsCount, videoSrc, disabled}) => {
    return (
        <div className='promocode-item'>
            <div className='promocode-item__title'>
                <div className='promocode-item__circle'/>
                <span>{name}</span>
            </div>
            <a href={link}>{link}</a>
            <button>COPY</button>
            <span className='promocode-item__status'>{disabled ? 'Inactive' : 'Active'}</span>
            <span>{subscriptionsCount} subscriptions</span>
        </div>
    )
}

PromocodeItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    subscriptionsCount: PropTypes.number,
    videoSrc: PropTypes.string,
    disabled: PropTypes.bool
}

export default PromocodeItem
