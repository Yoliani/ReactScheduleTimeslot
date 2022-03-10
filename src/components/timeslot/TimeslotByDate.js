import React, { useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import ModalTimeslotByDate from './ModalTimeslotByDate.js';

const TimeslotByDate = ({ date, timeslot }) => {
  useEffect(() => {
    console.log('CAMBIO DENTRO', { timeslot });
  }, [timeslot]);

  return (
    <Container>
      {timeslot.map((ts, index) => (
        <Col sm={12} md={6} lg={4} xl={3} key={index}>
          {console.log(ts.date, date, date === ts.date, date == ts.date)}
          {ts.date === date ? (
            <ModalTimeslotByDate timeslot={ts} index={index} />
          ) : null}
        </Col>
      ))}
    </Container>
  );
};

export default TimeslotByDate;
