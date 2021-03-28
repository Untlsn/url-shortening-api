import { useReducer } from 'react';

type Actions = {
  type: 'ADD_AT_END',
  payload: string
} | {
  type: 'REMOVE_BY_INDEX',
  payload: number
} | {
  type: 'INIT_FROM_LOCAL'
}

const localKey = 'YOURS_LINKS';

const reducer = (state: string[], action: Actions): string[] => {
  const bootstrap = () => {
    switch (action.type) {
      case 'ADD_AT_END': return [
        ...state,
        action.payload
      ];
      case 'REMOVE_BY_INDEX': return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload+1)
      ];
      case 'INIT_FROM_LOCAL': {
        const data = window.localStorage.getItem(localKey);
        return JSON.parse(data || '[]');
      }
      default: return state;
    }
  };
  state = bootstrap();
  window.localStorage.setItem(
    localKey,
    JSON.stringify(state)
  );
  return state;
};

const useThisReduce = (initializerArg: string[]) => {
  const [state, dispatch] = useReducer(reducer, initializerArg);

  return {
    state,
    addAtEnd: (payload: string) => dispatch({ type: 'ADD_AT_END', payload }),
    removeByIndex: (payload: number) => dispatch({ type: 'REMOVE_BY_INDEX', payload }),
    initFromLocal: () => dispatch({ type: 'INIT_FROM_LOCAL' }),
  };
};

export default useThisReduce;
