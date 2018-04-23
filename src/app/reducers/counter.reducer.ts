/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { AppState } from '../app.state';
import {
  INCREMENT,
  DECREMENT
} from '../actions/counter.actions';

const initialState: AppState = { counter: 0, data: {id: 0, text: 'Ready!', completed: false}};
let counter: number;

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
      case INCREMENT:
        counter = state.counter + 1;
        return Object.assign({}, state, { counter: counter },
          {data: {id: counter, text: 'Incremented', completed: true}});
      case DECREMENT:
        counter = state.counter - 1;
        return Object.assign({}, state, { counter: counter },
          {data: {id: counter, text: 'Decremented', completed: true}});
      default:
       return state;
    }
  };
