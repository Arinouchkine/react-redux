import { createStore } from 'redux';

import { LogsActionTypes } from './types/logs'; 

export interface ReduxState {
  lines: string[];
}

const defaultState: ReduxState = {
  lines: []
}

function reducer(state = defaultState, action: LogsActionTypes) {
  switch(action.type) {
    case 'ADD-LINE':
      return  {
        lines: [
            ...state.lines,
            action.payload
        ]
      }
    case 'CLEAR_LINE':

    default: 
      return state;
  }
}

const store = createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
