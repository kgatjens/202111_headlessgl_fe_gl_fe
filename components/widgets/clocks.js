import AnalogClock from "analog-clock-react";
import { useEffect, useState } from "react";
import styles from "../../styles/custom/clocks.module.css";

export default function Clocks(props) {
  const [minutes, setMinute] = useState();
  const [seconds, setSeconds] = useState();
  const [hours, setHours] = useState();
  const [displayTime, setDisplayTime] = useState();

  function updateClock() {
    let placeTime = new Date().toLocaleString("en-US", {
      timeZone: props.timeZone,
    });
    let date = new Date(placeTime);

    setMinute(date.getMinutes());
    setSeconds(date.getSeconds());
    setHours(date.getHours());

    setDisplayTime(
      date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  }

  useEffect(() => {
    updateClock();
    setInterval(updateClock, 1000);
  }, []);

  let options = {
    useCustomTime: true,
    width: "63px",
    border: true,
    borderColor: "#ffffff",
    baseColor: props.color ?? "#243c77",
    centerColor: "#ffffff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "black",
      minute: "#ffffff",
      hour: "#ffffff",
    },
    seconds: seconds,
    minutes: minutes,
    hours: hours,
  };

  return (
    <>
      <div className={styles["clock-elements"]}>
        <span>{props.place}</span>
        <div style={{marginTop:"1rem", marginBottom:"1rem"}}>
        <AnalogClock {...options} />
        </div>
        <span>{displayTime}</span>
      </div>
    </>
  );
}
