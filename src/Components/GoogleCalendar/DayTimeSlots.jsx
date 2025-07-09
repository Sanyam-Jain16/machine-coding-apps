import React from "react";

const DayTimeSlots = () => {
  const slots = Array.from({ length: 24 }, (_, i) => i + 1);
  return slots.map((slot) => (
    <div key={slot} className="slot">
      {slot}:00
    </div>
  ));
};

export default DayTimeSlots;
