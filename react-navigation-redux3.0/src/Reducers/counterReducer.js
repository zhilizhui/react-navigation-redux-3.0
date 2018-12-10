import { incrementCounter, decrementCounter,asyncdecrementCounter } from "../Actions/actionTypes";
import {Alert} from 'react-native'
const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return { ...state, counter: state.counter + 1 };

    case decrementCounter:

      return { ...state, counter: state.counter - 1 };
    case asyncdecrementCounter:
      // Alert.alert('发大水'+state.counter)
      return { ...state, counter: state.counter - 2 };
    default:
      return state;
  }
};

export default counterReducer;
