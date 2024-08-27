import Countdown from "react-countdown";

/* eslint-disable react/prop-types */
export const CountDown = ({ deadline }) => {
  const renderer = (dev) => {
    const { hours, minutes, seconds, completed, days } = dev;
    if (completed) {
      // Render a completed state
      // eslint-disable-next-line react/no-unescaped-entities
      return <span>Time's up!</span>;
    } else {
      return (
        <div className="timer ">
          <div className="days text-nowrap">
            <span>days</span>
            <p>{days}</p>
          </div>
          <div className="hours text-nowrap">
            <span>hours</span>
            <p>{hours}</p>
          </div>
          <div className="minutes text-nowrap">
            <span>minutes</span>
            <p>{minutes}</p>
          </div>
          <div className="seconds text-nowrap">
            <span>seconds</span>
            <p>{seconds}</p>
          </div>
        </div>
      );
    }
  };
  return <Countdown date={deadline} renderer={renderer} />;
};
