import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

const Component = ({className, onePost}) => (
  <div className={clsx(className, styles.root)}>
    {onePost.map(item => (
      <div key={item.id}>
        <img className={styles.picture} src={item.image} alt='' />
        <div className={styles.description}>
          <h3 className={styles.title}>{item.title}</h3>
          <p>Price:{item.price}</p>
          <p className={styles.about}>{item.content}</p>
          <p className={styles.info}>Added: {item.publicationDate}</p>
          <p className={styles.info}>Edited:{item.lastUpdateDate}</p>
          <p className={styles.info}>contact: {item.email} </p>
          <p className={styles.info}>Status: {item.status}</p>
          <Link className ={styles.button} to={`/post/${item.id}/edit`}>Edit Post</Link>
          <Link className ={styles.button} to='/'>Back to homepage</Link>
        </div>
      </div>))};
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  onePost: getOne(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
