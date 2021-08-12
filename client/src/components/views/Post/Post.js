import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, isLogged } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

const Component = ({className, onePost, logged}) => (
  <div>
    {onePost.map(item => (
      <div className={clsx(className, styles.root)} key={item.id}>
        <img className={styles.picture} src={item.image} alt='' />
        <div className={styles.description}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.about}>{item.content}</p>
          <p className={styles.infoTwo}>Price: ${item.price}</p>
          <div className={styles.info}>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone} </p>
          </div>
          <div className={styles.info}>
            <p>Added: {item.publicationDate}</p>
            <p>Edited: {item.lastUpdateDate}</p>
          </div>
          <p className={styles.infoTwo}>Status: {item.status}</p>
          {logged.posts.logged && (<Link className ={styles.button} to={`/post/${item.id}/edit`}>Edit Post</Link>)}
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
  logged: isLogged(state),
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
