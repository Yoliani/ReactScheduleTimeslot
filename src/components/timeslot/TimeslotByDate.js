import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'react-bootstrap';
import ModalTimeslotByDate from './ModalTimeslotByDate.js';
import { listTimeslots, appendTimeslots } from '../../actions/timeslotActions';
import { useDispatch, useSelector } from 'react-redux';
import Timeslots from '../Timeslosts';
const TimeslotByDate = ({ date }) => {
  const timeslotList = useSelector((state) => state.timeslotList);
  const dispatch = useDispatch();
  const { loading, error, timeslot } = timeslotList;
  useEffect(() => {
    dispatch(listTimeslots());
  }, [dispatch]);
  // console.log(date);
  // {console.log(ts.date)}
  // {console.log('Date ts: ', typeof ts.date)}
  // {console.log('Date date: ', typeof date)}

  return (
    <Container>
      {timeslot.map((ts, index) => (
        <Col sm={12} md={6} lg={4} xl={3}>
          {ts.date == date && (
            <ModalTimeslotByDate timeslot={ts} index={index} />
          )}
        </Col>
      ))}
    </Container>
  );
};

export default TimeslotByDate;
