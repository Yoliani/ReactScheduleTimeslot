import React, { useEffect } from 'react';
import Day from './Day';
import { listTimeslots } from '../actions/timeslotActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Month({ month }) {
  const timeslotList = useSelector((state) => state.timeslotList);
  const dispatch = useDispatch();
  const { loading, error, timeslot } = timeslotList;

  useEffect(() => {
    dispatch(listTimeslots());
  }, [dispatch]);

  useEffect(() => {
    console.log('TIMESLOT CAMBIO', { timeslot });
  }, [timeslot]);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              month={month}
              rowIdx={i}
              timeslot={timeslot}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
