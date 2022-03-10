import {
  TIMESLOT_FAIL,
  TIMESLOT_SUCCESS,
  TIMESLOT_REQUEST,
  TIMESLOT_ADD,
  TIMESLOT_REMOVE,
  TIMESLOT_UPDATE,
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
    case TIMESLOT_ADD:
      return {
        loading: false,
        ...state,
        timeslot: [...state.timeslot, action.payload],
      };

    case TIMESLOT_REMOVE:
      const changedVal = (state.timeslot[action.payload].isCancelled = true);
      return {
        loading: false,
        ...state,
        changedVal,
      };
    // timeslot: state.timeslot.filter(
    //   (timeslot) => timeslot.id !== action.payload
    // ),
    //timeslot: (state.timeslot[action.payload].isCanceled = true),
    case TIMESLOT_UPDATE:
      return {
        loading: false,
        ...state,
        // timeslot: state.timeslot.map((timeslot) => {
        //   if (timeslot.id === action.payload.id) {
        //     return action.payload;
        //   }
        //   return timeslot;
        // }),
        timeslot: state.timeslot
          .slice(0, action.payload.id)
          .concat(action.payload, state.timeslot.slice(action.payload.id + 1)),
      };
    default:
      return state;
  }
};
