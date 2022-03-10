import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateTimeslots } from '../actions/timeslotActions.js';

const ModalTimeslot = ({ timeslot, index, showM, handleShow }) => {
  //Modal
  const [show, setShow] = useState(showM);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  //States for inputs
  let [activity, setActivity] = useState(timeslot.activityName);

  let [date, setDate] = useState(timeslot.date);
  let [startTime, setStartTime] = useState(timeslot.startTime);
  let [endTime, setEndTime] = useState(timeslot.endTime);
  let [numberGuests, setNumberGuests] = useState(timeslot.numMaxGuests);
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
    <div>
      <Container>
        <Modal show={show} onHide={handleShow}>
          <Modal.Header>
            <Modal.Title>Update Timeslot</Modal.Title>
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
            <Button
              variant="secondary"
              onClick={() => {
                handleClose();
                handleShow();
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(
                  updateTimeslots(
                    {
                      activityName: activity,
                      date: date,
                      startTime: startTime,
                      endTime: endTime,
                      numMaxGuests: numberGuests,
                      isCancelled: false,
                    },
                    // {
                    //   activityName: 'Walking Tour Cambiado',
                    //   date: '2021-10-10',
                    //   startTime: '11:00',
                    //   endTime: '13:00',
                    //   numMaxGuests: 10,
                    //   isCancelled: false,
                    // },
                    index
                  )
                );
                handleClose();
                handleShow();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default ModalTimeslot;
