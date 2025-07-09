import React from "react";
import DayTimeSlots from "./DayTimeSlots";
import Events from "./Events";
import events from "./events.json";

// If you want to expand
// Create events (CRUD)
// overlapping events

const DayView = () => {
  return (
    <div className="calendar">
      <h1>Google Calender</h1>
      <div className="horizontal-line"></div>
      <DayTimeSlots />
      <Events events={events} />
    </div>
  );
};

export default DayView;
