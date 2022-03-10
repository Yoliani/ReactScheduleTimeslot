import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeTimeslots } from '../actions/timeslotActions';
import ModalTimeslot from './ModalTimeslot.js';

const Timeslot = ({ timeslot, index }) => {
  const dispatch = useDispatch();
  const cancelled = timeslot.isCancelled;
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
    // console.log(show);
  };
  const handleShow = () => {
    setShow(false);
    // console.log(show);
  };

  return (
    <Card className="my-3 p-2 rounded">
      <Card.Body>
        <Card.Title as="h3">
          <strong>{timeslot.activityName}</strong>
        </Card.Title>
        <Card.Text as="div">
          <div className="my-3"> Start time: {timeslot.startTime}</div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3"> End time: {timeslot.endTime}</div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            {' '}
            Maximum number of guests: {timeslot.numMaxGuests}
          </div>
        </Card.Text>
        <Card.Text>Date: {timeslot.date}</Card.Text>
        {cancelled ? (
          <Card.Text as="h4">CANCELLED</Card.Text>
        ) : (
          <Container>
            <Button
              className="btn-danger"
              onClick={() => {
                dispatch(removeTimeslots(index));
              }}
            >
              Remove
            </Button>
            <Button className="btn-info" onClick={handleOpen}>
              Edit
            </Button>
          </Container>
        )}
        {show ? (
          <ModalTimeslot
            index={index}
            showM={show}
            timeslot={timeslot}
            handleShow={handleShow}
          />
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default Timeslot;
