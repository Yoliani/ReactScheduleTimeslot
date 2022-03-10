import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import GlobalContext from '../context/GlobalContext';
import TimeslotByDate from './timeslot/TimeslotByDate.js';
import ModalDayTimeslots from './timeslot/ModalDayTimeslots.js';
export default function Day({ day, rowIdx, timeslot }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : 'bg-gray-200 text-gray-800 rounded-full w-7';
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        <Button
          style={{ borderRadius: '60px', backgroundColor: 'transparent' }}
          onClick={handleShow}
        >
          <p
            className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
          >
            {day.format('DD')}
          </p>
        </Button>
      </header>
      <Container
        style={{
          justifyItems: 'center',
          textAlign: 'center',
        }}
      >
        {' '}
        <TimeslotByDate date={day.format('YYYY-MM-DD')} timeslot={timeslot} />
      </Container>
      <Container>
        {show ? (
          <ModalDayTimeslots
            timeslot={timeslot}
            date={day.format('YYYY-MM-DD')}
            show={show}
            handleClose={handleClose}
          />
        ) : null}
      </Container>
    </div>
  );
}
