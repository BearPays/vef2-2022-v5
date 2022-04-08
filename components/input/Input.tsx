import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import s from './Input.module.scss';

export function Input({
  label,
  name,
  value,
  setValue,
  isError,
  textarea,
  type,
  error,
}) {
  return (
    <div
      className={classNames(
        s.field,
        isError && s.fieldInvalid,
        textarea && s.fieldTextarea,
      )}
    >
      <label htmlFor={name} className={s.label}>
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      {isError && <p className={s.errors}>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  textarea: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  isError: false,
  textarea: false,
  type: 'text',
  error: '',
};
