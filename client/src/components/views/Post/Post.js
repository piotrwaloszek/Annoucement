import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOnePost } from '../../../redux/postsRedux';
import { isLogged } from '../../../redux/loggedRedux';

import styles from './Post.module.scss';

const Component = ({className, onePost, logged, fetchOnePost}) => {

  useEffect(() => {
    fetchOnePost();
  }, []);

  return (
    <div>
      <div className={clsx(className, styles.root)} key={onePost.id}>
        <img className={styles.picture} src={onePost.image} alt='' />
        <div className={styles.description}>
          <h3 className={styles.title}>{onePost.title}</h3>
          <p className={styles.about}>{onePost.content}</p>
          <p className={styles.infoTwo}>Price: ${onePost.price}</p>
          <div className={styles.info}>
            <p>Email: {onePost.email}</p>
            <p>Phone: {onePost.phone} </p>
          </div>
          <div className={styles.info}>
            <p>Added: {onePost.publicationDate}</p>
            <p>Edited: {onePost.lastUpdateDate}</p>
          </div>
          <p className={styles.infoTwo}>Status: {onePost.status}</p>
          {logged && (<Link className ={styles.button} to={`/post/${onePost.id}/edit`}>Edit Post</Link>)}
        </div>
      </div>;
    </div>
  )
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  onePost: getOne(props.match.params.id),
  logged: isLogged(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOnePost: () => dispatch(fetchOnePost(props.match.params.id)),
});
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export {
  Container as Post,
  Component as PostComponent,
};
