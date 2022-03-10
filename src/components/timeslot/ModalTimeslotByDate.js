import React, { useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeTimeslots } from '../../actions/timeslotActions';
import ModalTimeslot from './../ModalTimeslot.js';

const ModalTimeslotByDate = ({ timeslot, index }) => {
  console.log('ACA DENTRO', timeslot);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const dispatch = useDispatch();
  const cancelled = timeslot.isCancelled;
  const handleOpen = () => {
    setShow(true);
    // console.log(show);
  };
  const handleShow = () => {
    setShow(false);
    // console.log(show);
  };
  const handleOpenE = () => {
    setShowEdit(true);
    // console.log(show);
  };
  const handleShowE = () => {
    setShowEdit(false);
    // console.log(show);
  };

  return (
    <div>
      <Button
        style={{ justifyItems: 'center', textAlign: 'center' }}
        className="btn-info my-2 block-center"
        onClick={handleOpen}
      >
        {timeslot.activityName}
      </Button>
      {show ? (
        <Modal show={show} onHide={handleShow}>
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
                  <Button className="btn-info" onClick={handleOpenE}>
                    Edit
                  </Button>
                </Container>
              )}
              {showEdit ? (
                <ModalTimeslot
                  index={index}
                  showM={showEdit}
                  timeslot={timeslot}
                  handleShow={handleShowE}
                />
              ) : null}
            </Card.Body>
          </Card>
        </Modal>
      ) : null}
    </div>
  );
};
export default ModalTimeslotByDate;
