import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';

const Component = ({className, allPosts}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Announcements</h2>
    {allPosts.map(item => (<div className={styles.ad} key={item.id}>
      <img src={item.image} alt=''/>
      <div>
        <Link className={styles.link} to={`/post/${item.id}`}>{item.title}</Link>
        <p className={styles.info}>Price: {item.price}</p>
        <p className={styles.info}>Location: {item.location}</p>
      </div>
    </div>))};
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allPosts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
