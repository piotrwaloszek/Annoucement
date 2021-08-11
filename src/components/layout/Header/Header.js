import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import clsx from 'clsx';
import styles from './Header.module.scss';

const Component = ({className, children}) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" className={clsx(className, styles.appBar)}>
        <Toolbar className={clsx(className, styles.root)}>
          <Link className ={styles.button} to={'/'}>
            <HomeIcon className={clsx(className, styles.home)}/>
          </Link>
          <h6 className={clsx(className, styles.title)}>Bulletin Board</h6>
          {auth && (
            <div>
              <AccountCircle className={clsx(className, styles.profile)} onClick={handleMenu}/>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link className ={styles.button} to={'/post/add'}>Add Post</Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';


// // import { connect } from 'react-redux';
// // import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


// const Component = ({className, children}) => (
//   <div className={clsx(className, styles.root)}>
//     <Link to='/post/add'>PostAdd</Link>
//     <a href='https://google.com'>Login</a>
//     {children}
//   </div>
// );

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// // const mapStateToProps = state => ({
// //   someProp: reduxSelector(state),
// // });

// // const mapDispatchToProps = dispatch => ({
// //   someAction: arg => dispatch(reduxActionCreator(arg)),
// // });

// // const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
