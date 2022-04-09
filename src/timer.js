import React, { useEffect } from "react";

const TimerComponent = () => {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  useEffect(() => {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}</h3>
      <button>1씩 올려주세용!</button>
    </div>
  );
};

export default TimerComponent;
