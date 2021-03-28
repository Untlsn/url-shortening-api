import { useReducer } from 'react';

type Actions = {
  type: 'ADD_AT_END',
  payload: string
} | {
  type: 'REMOVE_BY_INDEX',
  payload: number
}

const reducer = (state: string[], action: Actions): string[] => {
  switch (action.type) {
    case 'ADD_AT_END': return [
      ...state,
      action.payload
    ];
    case 'REMOVE_BY_INDEX': return [
      ...state.slice(0, action.payload),
      ...state.slice(action.payload+1)
    ];
    default: return state;
  }
};

const useThisReduce = (initializerArg: string[]) => {
  const [state, dispatch] = useReducer(reducer, initializerArg);

  return {
    state,
    addAtEnd: (payload: string) => dispatch({ type: 'ADD_AT_END', payload }),
    removeByIndex: (payload: number) => dispatch({ type: 'REMOVE_BY_INDEX', payload }),
  };
};

export default useThisReduce;
