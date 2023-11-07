import { useEffect, useState } from "react";

import "./TimerOffer.css";
export default function TimerOffer() {
  const [timeDays, setTimeDays] = useState(null);
  const [timeHours, setTimeHours] = useState(null);
  const [timeMin, setTimeMin] = useState(null);
  const [timeSec, setTimeSec] = useState(null);
  useEffect(() => {
    if (timeSec < 0) {
      if (timeMin === 0) {
        setTimeHours(timeHours - 1);
        return setTimeMin(60);
      }
      setTimeSec(60);
      return setTimeMin(timeMin - 1);
    }
    const lol = setInterval(() => {
      setTimeSec(timeSec - 1);
    }, 1000);
    return () => {
      clearInterval(lol);
    };
  }, [timeSec]);
  useEffect(() => {
    const now = new Date().getTime();
    const iNeed = new Date("december, 2023 ").getTime();
    const countDown = iNeed - now;
    // const gog = Date.now()
    // const countDown = (gog + (1000*60*380*10) ) - gog
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    console.log(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    setTimeDays(days);
    setTimeHours(hours);
    setTimeMin(minutes);
    setTimeSec(seconds);
  }, []);
  return (
    <>
      <div className="timer-countdown d-flex align-items-center ms-3 ms-sm-0">
        <span>{timeDays < 10 ? "0" + timeDays : timeDays}</span>
        <i>:</i>
        <span>{timeHours < 10 ? "0" + timeHours : timeHours}</span>
        <i>:</i>
        <span>{timeMin < 10 ? "0" + timeMin : timeMin}</span>
        <i>:</i>
        <span>{timeSec < 10 ? "0" + timeSec : timeSec}</span>
      </div>
    </>
  );
}
