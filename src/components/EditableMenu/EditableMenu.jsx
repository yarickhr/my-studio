import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PlusIcon from '../Icons/PlusIcon.jsx';

import './EditableMenu.less';

class EditableMenu extends Component {

    state = {
        menu: this.props.menu || [],
        showInputField: false,
        value: ''
    }

    toggleShowInpup = () => {
        this.setState(prevSate => ({
            showInputField: !prevSate.showInputField
        }))
    }

    changeInputValue = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleKeyDown = e => {
        const {value, menu} = this.state;

        if (e.keyCode == 13) {
            this.setState(({menu}) => ({
                menu: [...menu, value],
                value: ''
            }))
        }
    }

    render() {
        const {path, title, icon} = this.props,
            {menu, showInputField, value} = this.state;

        return (
            <div className='editable-menu'>
                <div className='editable-menu__title'>
                    {icon}
                    <span className='editable-menu__title-text'>{title}</span>
                    <button 
                        onClick={this.toggleShowInpup}
                        className={`editable-menu__button ${showInputField && 'editable-menu__button--cross'}`}>
                        <PlusIcon/>
                    </button>
                </div>
                {
                    showInputField &&
                    <input
                        onKeyDown={this.handleKeyDown}
                        className='editable-menu__input' 
                        value={value}
                        onChange={this.changeInputValue}/>
                }
                <ul>
                    {
                        menu.map(title => (
                            <li 
                                className='editable-menu__item'
                                key={title}>
                                <Link to={`${path}/${title}`}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default EditableMenu;
