import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>Not Found...</h2>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });
// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });
// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
