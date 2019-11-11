import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PulseIcon from '../Icons/PulseIcon.jsx';

import './Logo.less';

class Logo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='logo'>
                <PulseIcon/>
                <span className='logo__text'>Pulse.Studio</span>
            </div>
        )
    }
}

export default Logo;
