import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import CalendarHeader from './components/header/Calendar';
import Month from './components/Month';
import GlobalContext from './context/GlobalContext';
import { getMonth } from './util';

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
