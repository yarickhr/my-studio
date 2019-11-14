import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlusIcon from '../../components/Icons/PlusIcon.jsx';
import PromocodeItem from './PromocodeItem/PromocodeItem.jsx';

import './Promocodes.less';

const PROMOCODES = [
    {
        name: 'PROMO',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com'
    },
    {
        name: 'PROMO',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com',
        disabled: true
    },
    {
        name: 'PROMO',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com'
    },
    {
        name: 'PROMO',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com'
    },
    {
        name: 'PROMO',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com',
        disabled: true
    }
];

const Promocodes = () => (
    <div className='promocodes'>
        <h1 className='promocodes__title'>Promocodes</h1>
        <button className='promocodes__add-button'>
            <PlusIcon/>
        </button>
        {PROMOCODES.map(params => <PromocodeItem {...params}/>)}
    </div>
)

export default Promocodes;
