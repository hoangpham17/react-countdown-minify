import { useEffect, useState } from 'react';

import { defaultStyle, formatTime } from '../features';

const CountdownTimer = ({
  duration = 0,
  format = "hh:mm:ss",
  onEnd = () => {},
  style = {},
}) => {
  // Convert duration (minutes) to seconds for easier calculations
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (timeLeft === 0) {
      onEnd(); // Call the onEnd callback when countdown reaches zero
      return;
    }

    // Start an interval that decrements the timer every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId); // Stop the timer when it reaches zero
          return 0;
        }
        return prevTime - 1; // Decrease the remaining time by 1 second
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [timeLeft, onEnd]);

  return (
    <div style={{ ...defaultStyle, ...style }}>
      {formatTime(timeLeft, format)}
    </div>
  );
};

export default CountdownTimer;
