import React from 'react';
import { Card } from 'react-bootstrap';
const Timeslot = ({ timeslot }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Card.Title as="div">
          <strong>{timeslot.activityName}</strong>
        </Card.Title>

        <Card.Text as="div">
          <div className="my-3"></div>
        </Card.Text>
        <Card.Text as="h3">{timeslot.date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Timeslot;
