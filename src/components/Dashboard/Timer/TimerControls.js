import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimerActive } from '../../../actions/app';
import Card from 'react-bootstrap/Card';

const TimerControls = ({ newEntry, failEntry }) => {
  const timerActive = useSelector((state) => state.app.timerActive);
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);

  let timerInterval;

  useEffect(() => {
    if (timerActive) {
      timerInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(timerActive);
    }
    return () => clearInterval(timerInterval);
  }, [timerActive]);

  // format seconds to M:SS
  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }

  function startAndAddEntry() {
    dispatch(setTimerActive(true));
    newEntry();
  }

  function stopAndResetTimer() {
    dispatch(setTimerActive(false));
    failEntry();
    setTime(0);
  }

  return (
    <Card.Body>
      <div className='timer-display'>{fmtMSS(time)}</div>
      <div className='timer-controls'>
        <button onClick={() => startAndAddEntry()}>Start</button>
        <button onClick={() => stopAndResetTimer()}>Cancel</button>
      </div>
    </Card.Body>
  );
};

export default TimerControls;
