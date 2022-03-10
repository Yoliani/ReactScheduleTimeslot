import dayjs from 'dayjs';
import React, { useContext, useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';

import { appendTimeslots } from '../../actions/timeslotActions';
import { useDispatch } from 'react-redux';
import GlobalContext from '../../context/GlobalContext';
export default function CalendarHeader() {
  const dispatch = useDispatch();

  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Add
  let [activity, setActivity] = useState('');

  let [date, setDate] = useState('');
  let [startTime, setStartTime] = useState('');
  let [endTime, setEndTime] = useState('');
  let [numberGuests, setNumberGuests] = useState('');
  const handleActivity = (e) => {
    setActivity(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };
  const handleNumberGuests = (e) => {
    setNumberGuests(e.target.value);
  };
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
      <button
        onClick={handleShow}
        className="border rounded py-2 px-4 mr-5 mx-2"
      >
        Create
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Timeslot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="my-2"
            style={{ justifyItems: 'center', textAlign: 'center' }}
          >
            <Col>
              <h4>Activity name</h4>
              <input
                type=""
                name=""
                value={activity}
                onChange={(e) => handleActivity(e)}
              />
            </Col>
            <Col>
              <h4>Date</h4>
              <input
                type="date"
                name=""
                value={date}
                asp-format="{0:yyyy-MM-dd}"
                onChange={(e) => handleDate(e)}
              />
            </Col>
          </Row>

          <Row
            className="my-2"
            style={{ justifyItems: 'center', textAlign: 'center' }}
          >
            <Col>
              <h4>Start time</h4>
              <input
                type="time"
                name=""
                value={startTime}
                onChange={(e) => handleStartTime(e)}
              />
            </Col>
            <Col>
              <h4>End time</h4>
              <input
                type="time"
                name=""
                value={endTime}
                onChange={(e) => handleEndTime(e)}
              />
            </Col>
          </Row>

          <Row
            className="my-2"
            style={{ justifyItems: 'center', textAlign: 'center' }}
          >
            <Col>
              <h4>Maximum number of guests</h4>
              <input
                type="number"
                name=""
                value={numberGuests}
                onChange={(e) => handleNumberGuests(e)}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                appendTimeslots({
                  activityName: activity,
                  date: date,
                  startTime: startTime,
                  endTime: endTime,
                  numMaxGuests: numberGuests,
                  isCancelled: false,
                })
              );
              // console.log({
              //   activityName: activity,
              //   date: date,
              //   startTime: startTime,
              //   endTime: endTime,
              //   numMaxGuests: numberGuests,
              //   isCancelled: false,
              // });
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}
