import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import GlobalContext from '../context/GlobalContext';
import TimeslotByDate from './timeslot/TimeslotByDate.js';
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
        >
          <p
            className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
          >
            {day.format('DD')}
          </p>
        </Button>
      </header>
      <div className="flex-1 cursor-pointer">
        <Container>
          {' '}
          <TimeslotByDate date={day.format('YYYY-MM-DD')} timeslot={timeslot} />
        </Container>
      </div>
    </div>
  );
}
