import CalendarTimeslot from './components/CalendarTimeslot';

import GlobalContext from './context/GlobalContext';
import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import { getMonth } from './util';
import Calendar from './components/Calendar';
import CalendarHeader from './components/header/Calendar';
import Month from './components/Month';
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
