import { useCallback, useEffect, useState } from 'react';

export const useLongPress = (callback = () => {}, ms = 300) => {
  const [startLongPress, setStartLongPress] = useState(false);

  const start = useCallback(() => {
    setStartLongPress(true);
  }, []);
  const stop = useCallback(() => {
    setStartLongPress(false);
  }, []);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval> = setInterval(() => {}, 1000);
    if (startLongPress) {
      timerId = setInterval(callback, ms);
    } else {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [startLongPress, callback, ms]);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
};
