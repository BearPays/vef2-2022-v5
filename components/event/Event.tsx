import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../User';
import { RegisterForm } from '../registerForm/RegisterForm';
import s from './Event.module.scss';

export function Event({ event }) {
  const { user } = useContext(Context);

  return (
    <div>
      <section>
        <h2 className={s.eventName}>{event.name}</h2>
        <p className={s.eventDescription}>{event.description}</p>
      </section>
      <section>
        <h3 className={s.registrationsHeader}>Skráningar á viðburð</h3>
        <ul>
          {event?.registrations &&
            event.registrations?.map((item) => (
              <li key={item.id}>
                <div>
                  <p className={s.regName}>{item.name}</p>
                  <p className={s.desc}>{item.comment}</p>
                </div>
              </li>
            ))}
        </ul>
        {event?.registrations?.length === 0 && (
          <p className={s.empty}>Engin hefur skráð sig á þennan viðburð</p>
        )}
      </section>
      <section className={s.registerSection}>
        {user ? (
          <RegisterForm />
        ) : (
          <p>Skráðu þig inn til að skrá þig á viðburðinn</p>
        )}
      </section>
      <Link to="/">Til baka</Link>
    </div>
  );
}

Event.propTypes = {
  event: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        ),
      ),
    ]),
  ).isRequired,
};
