import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listTimeslots, appendTimeslots } from '../actions/timeslotActions';
import Timeslots from './Timeslosts.js';
const CalendarTimeSlot = ({ date_prop }) => {
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //show timeslots
  const timeslotList = useSelector((state) => state.timeslotList);
  const dispatch = useDispatch();
  const { loading, error, timeslot } = timeslotList;
  useEffect(() => {
    dispatch(listTimeslots());
  }, [dispatch]);
  //Add timeslot
  //States for inputs
  let [activity, setActivity] = useState('');

  let [date, setDate] = useState(date_prop);
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
    <>
      <Container>
        <h1 style={{ justifyItems: 'center', textAlign: 'center' }}>
          Schedule Timeslots
        </h1>

        <Row className="text-center">
          <Col>
            <Button className="btn-primary" onClick={handleShow}>
              Agregar
            </Button>
          </Col>
        </Row>
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
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          {timeslot.map((ts, index) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Timeslots timeslot={ts} index={index}></Timeslots>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default CalendarTimeSlot;
