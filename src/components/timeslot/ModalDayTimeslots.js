import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';

import { ReactAgenda } from 'react-agenda';
import moment from 'moment';
import Timeslot from '../Timeslosts';
const ModalDayTimeslots = ({ timeslot, date, show, handleClose }) => {
  const now = new Date();
  console.log(date);
  return (
    <div>
      <Modal show={show} fullscreen={true} onHide={() => handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {timeslot.map((item, index) =>
              item.date === date ? (
                <Timeslot timeslot={item} index={index} />
              ) : null
            )}

            <Button onClick={handleClose}>Go back</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalDayTimeslots;
