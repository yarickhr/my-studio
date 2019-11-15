import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlusIcon from '../../components/Icons/PlusIcon.jsx';
import PromocodeItem from './PromocodeItem/PromocodeItem.jsx';

import './Promocodes.less';

const PROMOCODES = [
    {
        name: 'PROMO1',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com'
    },
    {
        name: 'PROMO2',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com',
        disabled: true
    },
    {
        name: 'PROMO3',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com'
    },
    {
        name: 'PROMO4',
        link: 'example.com',
        subscriptionsCount: 3434142,
        videoSrc: 'example.com'
    },
    {
        name: 'PROMO5',
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
            {
                PROMOCODES
                    .sort((a, b) => !!a.disabled - !!b.disabled)
                    .map(params => (
                        <PromocodeItem
                            key={params.name} 
                            {...params}/>
                        )
                    )
            }
    </div>
);

export default Promocodes;
