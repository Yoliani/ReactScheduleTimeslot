import {
  TIMESLOT_FAIL,
  TIMESLOT_SUCCESS,
  TIMESLOT_REQUEST,
} from '../constants/constants.js';

export const timeslotListReducer = (state = { timeslot: [] }, action) => {
  switch (action.type) {
    case TIMESLOT_REQUEST:
      return {
        loading: true,
        timeslot: [],
      };
    case TIMESLOT_SUCCESS:
      return {
        loading: false,
        timeslot: action.payload,
      };
    case TIMESLOT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
