import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listTimeslots } from '../actions/timeslotActions';
import Timeslots from './Timeslosts.js';
const CalendarTimeSlot = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const timeslotList = useSelector((state) => state.timeslotList);
  const dispatch = useDispatch();

  const { loading, error, timeslot } = timeslotList;
  useEffect(() => {
    dispatch(listTimeslots());
  }, [dispatch]);
  console.log(timeslot);
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
                <input type="" name="" value="" />
              </Col>
            </Row>
            <Row
              className="my-2"
              style={{ justifyItems: 'center', textAlign: 'center' }}
            >
              <Col>
                <h4>Fecha</h4>
                <input type="date" name="" value="" />
              </Col>
            </Row>
            <Row
              className="my-2"
              style={{ justifyItems: 'center', textAlign: 'center' }}
            >
              <Col>
                <h4>Start time</h4>
                <input type="time" name="" value="" />
              </Col>
            </Row>
            <Row
              className="my-2"
              style={{ justifyItems: 'center', textAlign: 'center' }}
            >
              <Col>
                <h4>End time</h4>
                <input type="time" name="" value="" />
              </Col>
            </Row>
            <Row
              className="my-2"
              style={{ justifyItems: 'center', textAlign: 'center' }}
            >
              <Col>
                <h4>Maximum number of guests</h4>
                <input type="number" name="" value="" />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          {timeslot.map((ts) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Timeslots timeslot={ts}></Timeslots>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default CalendarTimeSlot;
