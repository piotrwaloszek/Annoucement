import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import styles from './Homepage.module.scss';

const Component = ({className, allPosts}) => (
  <div className={clsx(className, styles.root)}>
    {allPosts.map(item => (<div className={clsx(className, styles.ad)} key={item.id}>
      <img className={clsx(className, styles.picture)} src={item.image} alt=''/>
      <div>
        <Link className={clsx(className, styles.link)} to={`/post/${item.id}`}>{item.title}</Link>
        <p className={clsx(className, styles.info)}>Price: {item.price}</p>
        <p className={clsx(className, styles.info)}>Location: {item.location}</p>
      </div>
    </div>))}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
const mapStateToProps = state => ({
  allPosts: getAll(state),
});
const Container = connect(mapStateToProps)(Component);
export {
  Container as Homepage,
  Component as HomepageComponent,
};
