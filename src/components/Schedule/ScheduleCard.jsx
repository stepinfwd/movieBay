import React from "react";
import "./ScheduleCard.css";
import Loader from "../common/Loader/Loader";
function ScheduleCard({ schedule }) {
  return (
    <>
      {schedule ? (
        schedule.slice(0, 3).map((s) => (
          <div className="schedule_card" key={s.id}>
            <p className="schedule_header">{s.airtime}pm</p>
            <div className="container">
              <div className="row">
                <div className="schedule_time_container col-lg-6 col-sm-6">
                  <p className="schedule_time">{s.airtime}</p>
                  <p className="schedule_channel">{s.type}</p>
                </div>
                <div className="schedule_name_container col-lg-6 col-sm-6">
                  <p className="schedule_name">{s.name}</p>
                  <p className="schedule_week">{s.show.language}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ScheduleCard;
