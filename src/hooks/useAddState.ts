import { useState } from 'react';

const useAddState = <T>(initialState: T[] = []): [
  T[],
  (newEl: T) => void
] => {
  const [arr, setArr] = useState(initialState);

  return [
    arr,
    (newEl) => setArr(old => [...old, newEl])
  ];
};

export default useAddState;
