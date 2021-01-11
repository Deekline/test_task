import React, { useCallback, useRef, useState } from 'react';
import { useFetchData } from './hooks/useFetchData';
import { Board, HistoryCards } from './components';
import { Button, Picker } from './shared';

import './App.scss';
import { usePrepareMatrix } from './hooks/usePrepareMatrix';

const App = () => {
  const { data, loading, error } = useFetchData();
  const [state, setState] = useState<number>();
  const matrix = usePrepareMatrix(state);
  const pickerRef = useRef();
  const [triggeredHistory, setTriggeredHistory] = useState<string[] | []>([]);

  const setFieldSize = useCallback(() => {
    const ref = pickerRef.current;
    setTriggeredHistory([]);
    // @ts-ignore
    setState(ref?.state.value?.value);
  }, [pickerRef?.current]);

  const triggerTile = (tileName: string) => {
    setTriggeredHistory([tileName, ...triggeredHistory]);
  };

  return (
    <div className='main'>
      {!error ? (
        <div className='main__board'>
          <div className='main__picker'>
            {!loading && data ? (
              <Picker modes={data} ref={pickerRef} />
            ) : (
              <p className='main__loader'>Loading....</p>
            )}
            <Button
              setFieldSize={setFieldSize}
              className={data && !loading ? '' : 'disabled'}
            >
              START
            </Button>
          </div>
          {state && <Board matrix={matrix} triggerTile={triggerTile} />}
          <HistoryCards triggeredHistory={triggeredHistory} />
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default App;
