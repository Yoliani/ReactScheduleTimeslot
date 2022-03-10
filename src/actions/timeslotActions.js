import {
  TIMESLOT_FAIL,
  TIMESLOT_SUCCESS,
  TIMESLOT_REQUEST,
  TIMESLOT_ADD,
  TIMESLOT_REMOVE,
  TIMESLOT_UPDATE,
} from '../constants/constants.js';

export const listTimeslots = () => async (dispatch) => {
  try {
    dispatch({ type: TIMESLOT_REQUEST });

    const initialData = [
      {
        activityName: 'Walking Tour',
        date: '2022-03-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10,
        isCancelled: false,
      },
      {
        activityName: 'Walking Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10,
        isCancelled: false,
      },
    ];

    dispatch({ type: TIMESLOT_SUCCESS, payload: initialData });
  } catch (error) {
    dispatch({
      type: TIMESLOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const appendTimeslots = (data) => async (dispatch) => {
  try {
    dispatch({ type: TIMESLOT_ADD, payload: data });
  } catch (error) {
    dispatch({
      type: TIMESLOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeTimeslots = (index) => async (dispatch) => {
  try {
    dispatch({ type: TIMESLOT_REMOVE, payload: index });
  } catch (error) {
    dispatch({
      type: TIMESLOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateTimeslots = (data, index) => async (dispatch) => {
  try {
    dispatch({ type: TIMESLOT_UPDATE, payload: data, index: index });
  } catch (error) {
    dispatch({
      type: TIMESLOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
