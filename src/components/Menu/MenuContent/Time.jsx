import { useEffect, useState } from "react";

const Time = () => {
  let newDate;
  const [date, setDate] = useState("");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const updateDate = () => {
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours > 12 ? hours - 12 : hours;
    const formattedDayOfMonth = dayOfMonth < 10 ? " " + dayOfMonth : dayOfMonth;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    newDate = `${dayOfWeek} ${formattedDayOfMonth}. ${month} ${formattedHours}:${formattedMinutes} ${amOrPm}`;
    setDate(newDate);
  };

  useEffect(() => {
    updateDate();
    setInterval(updateDate, 1000);
  });

  return <span>{date}</span>;
};

export default Time;
