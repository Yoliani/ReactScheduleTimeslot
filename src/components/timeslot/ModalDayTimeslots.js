import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'react-calendar-timeline/lib/Timeline.css';
import Timeslot from '../Timeslosts';

const ModalDayTimeslots = ({ timeslot, date, show, handleClose }) => {
  return (
    <div>
      <Modal show={show} fullscreen={true} onHide={() => handleClose}>
        <Modal.Header>
          <Modal.Title>
            <Button onClick={handleClose}>Go back</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {timeslot.map((item, index) =>
            item.date === date ? (
              <Timeslot timeslot={item} index={index} />
            ) : null
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalDayTimeslots;
