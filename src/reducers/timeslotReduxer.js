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

    case TIMESLOT_UPDATE:
      let newArray = [...state.timeslot];
      newArray[action.index]['activityName'] = action.payload['activityName'];
      newArray[action.index]['date'] = action.payload['date'];
      newArray[action.index]['startTime'] = action.payload['startTime'];
      newArray[action.index]['endTime'] = action.payload['endTime'];
      newArray[action.index]['numMaxGuests'] = action.payload['numMaxGuests'];
      newArray[action.index].isCancelled = action.payload.isCancelled;

      return {
        loading: true,
        ...state,
        newArray,
      };
    default:
      return state;
  }
};
