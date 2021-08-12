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
import clsx from 'clsx';
import styles from './Header.module.scss';

import { connect } from 'react-redux';
import { isLogged, logIn, logOut } from '../../../redux/postsRedux';

const Component = ({className, logged, logIn, logOut}) => {
  // const [auth, setAuth] = useState(true);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  return (
    <div>
      <div className={styles.logged}>
        <p onClick={logIn} className ={styles.logButton}>Login</p>
        <p onClick={logOut} className ={styles.logButton}>Loggout</p>
      </div>
      <AppBar position="static" className={clsx(className, styles.appBar)}>
        <Toolbar className={clsx(className, styles.root)}>
          <Link className ={styles.button} to={'/'}>
            <HomeIcon className={clsx(className, styles.home)}/>
          </Link>
          <h6 className={clsx(className, styles.title)}>Bulletin Board</h6>
          {logged.posts.logged ? (
            <div className={styles.logged}>
              <Link className ={styles.button} to={'/post/add'}>Add Post</Link>
            </div>
          ) : (
            <div className={styles.logged}>
              <a className={styles.button} href='https://google.com'>Login</a>
            </div>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

const mapStateToProps = state => ({
  logged: isLogged(state),
});

const mapDispatchToProps = dispatch => ({
  logIn: (logged) => dispatch(logIn(logged)),
  logOut: (logged) => dispatch(logOut(logged)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
