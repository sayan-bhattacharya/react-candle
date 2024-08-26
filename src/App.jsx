import  { useState, useEffect } from 'react';

const Candle = () => {
  const [height, setHeight] = useState(100); // Initial height at 100%

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight((prevHeight) => {
        if (prevHeight > 10) {
          return prevHeight - 5; // Reduce height by 5% every 2 seconds
        } else {
          return 100; // Reset to 100% when it reaches 10%
        }
      });
    }, 2000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="exercise">
      <div className="candleContainer" style={{ height: `${height}%` }}>
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;