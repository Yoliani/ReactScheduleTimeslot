import CalendarTimeslot from './components/CalendarTimeslot';
function App() {
  return (
    <>
      <CalendarTimeslot
        calendar={new Date('2022-03-09').toISOString().slice(0, 10)}
      />
    </>
  );
}

export default App;
