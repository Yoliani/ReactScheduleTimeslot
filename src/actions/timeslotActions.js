import {
  TIMESLOT_FAIL,
  TIMESLOT_SUCCESS,
  TIMESLOT_REQUEST,
} from '../constants/constants.js';

export const listTimeslots = () => async (dispatch) => {
  try {
    dispatch({ type: TIMESLOT_REQUEST });

    const initialData = [
      {
        activityName: 'Walking Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10,
      },
      {
        activityName: 'Walking Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10,
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
