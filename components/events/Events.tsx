import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Events.module.scss';

export function Events({ events }) {
  return (
    <section>
      <h2>Viðburðir á næstunni</h2>
      {events.length !== 0 ? (
        <ul>
          {events.map((item) => (
            <li key={item.id}>
              <div>
                <h3>
                  <Link to={`/${item.id}`}>{item.name}</Link>
                </h3>
                <p className={s.desc}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Engir viðburðir á næstunni.</p>
      )}
    </section>
  );
}

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
          PropTypes.objectOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          ),
        ),
      ]),
    ),
  ).isRequired,
};
