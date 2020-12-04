import React, { useState, useEffect } from "react";
import ScheduleCard from "./ScheduleCard";
import "./ScheduleCard.css";
import axios from "axios";

function Schedule(props) {
    const [schedule, setSchedule] = useState();
    // var date = new Date().toLocaleString();
    //   const day=date.slice(1,2)
    useEffect(() => {
        axios
            .get(" http://api.tvmaze.com/schedule?country=US&date=2014-12-01")
            .then((res) => setSchedule(res.data));
    }, []);
    //   console.log("TODAYS DATE", schedule);
    return (
        <div className="schedule-container">
            <p className="schedInfo_global_header">
            <span className="schedule-date">Dec 03</span>            </p>
     
            <ScheduleCard schedule={schedule} />
        </div>
    );
}

export default Schedule;
