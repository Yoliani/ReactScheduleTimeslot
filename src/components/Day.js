import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import GlobalContext from '../context/GlobalContext';
import TimeslotByDate from './timeslot/TimeslotByDate.js';
export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { filteredEvents } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div className="flex-1 cursor-pointer">
        <TimeslotByDate date={day.format('YYYY-DD-MM')} />
        {dayEvents.map((evt, idx) => (
          <div
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          ></div>
        ))}
      </div>
    </div>
  );
}
