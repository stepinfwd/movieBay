import React from "react";
import "./ScheduleCard.css"
function ScheduleCard(props) {
  return (
      <div className="schedule_card">
        <p className="schedule_header">21:00</p>
        <div className="container">
          <div className="flexing">
            <div className="schedule_time_container">
              <p className="schedule_time">20:00</p>
              <p className="schedule_channel">NBC</p>
            </div>
            <div className="schedule_name_container">
              <p className="schedule_name">The Bachelorette</p>
              <p className="schedule_week">Week 8</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ScheduleCard;
