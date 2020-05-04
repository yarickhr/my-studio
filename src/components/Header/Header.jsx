import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding: 1rem;
  background: transparent;

  z-index: 9;

  color: #fff;
`;

const useStyles = makeStyles({
  paper: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    top: 50,
    color: '#fff',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  list: {
    textTransform: 'capitalize',
    color: '#fff',
  },
});

const MENU = [
    {
        id: 'about',
        title: 'Про нас',
        items: [
          {
            title: 'Хто ми',
            link: '/about'
          },
          {
              title: 'Віровчення',
              link: '/about'
          },
          {
            title: 'Історія церкви',
            link: '/about'
          },
          {
              title: 'Контакти',
              link: '/'
          }
        ]
    },
    {
        id: 'camp',
        title: 'Табори',
        items: [
          {
            title: 'Наші табори',
            link: '/'
          },
          {
            title: 'Розклад таборів',
            link: '/'
          }
        ]
    },
    {
        id: 'worship',
        title: 'Церковне життя',
        items: [
          {
            title: 'Підлітковий клуб',
            link: '/'
          },
          {
            title: 'Молодіжні зустрічі',
            link: '/'
          },
          {
            title: 'Дитячий клуб AWANA',
            link: '/'
          },
          {
            title: 'Недільна школа',
            link: '/'
          },
        ]
    },
    {
      id: 'media',
      title: 'Медіа',
      items: [
        {
          title: 'Відеозаписи служінь',
          link: '/'
        },
        {
          title: 'Галерея',
          link: '/'
        }
      ]
  },
]


const Header = props => {
    const [anchorEl, setAnchorEl] = useState(null),
      [activeMenu, setActiveMenu] = useState(null);
    const classes = useStyles();

    const handleClick = id => event => {
      setAnchorEl(event.currentTarget);
      setActiveMenu(id);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setActiveMenu(null);
    };

    return (
        <NavBar>
          {
              MENU.map(({id, title, items}) => (
                <React.Fragment key={id}>
                  <Button
                    aria-controls="simple-menu" 
                    aria-haspopup="true" 
                    onClick={handleClick(id)}>
                    {title} 
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={activeMenu === id ? anchorEl : null}
                    keepMounted
                    open={activeMenu === id}
                    onClose={handleClose}
                    classes={{
                      paper: classes.paper,
                      list: classes.list,
                    }}>
                    {
                      items.map(({link, title}) => (
                          <MenuItem key={title}>
                              <NavLink to={link}>
                                  {title}
                              </NavLink>
                          </MenuItem>
                      ))
                    }
                  </Menu>
                </React.Fragment>
              ))
          }
        </NavBar>

    );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Header;