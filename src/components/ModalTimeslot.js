import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateTimeslots } from '../actions/timeslotActions.js';

const ModalTimeslot = ({ index, showM }) => {
  //Modal
  const [show, setShow] = useState(showM);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  //States for inputs
  let [activity, setActivity] = useState('');

  let [date, setDate] = useState();
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
    <div>
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
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
            <Button variant="secondary" onClick={handleClose}>
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
                    index
                  )
                );
                handleClose();
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
