/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import s from './Button.module.scss';

export function Button({ children, onClick, size, type }) {
  return (
    <button
      className={classNames(s[size], s.margin)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
};
