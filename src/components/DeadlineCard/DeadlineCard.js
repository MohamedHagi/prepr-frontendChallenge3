import React from "react";
import "../DeadlineCard/deadline.css";

export default function DeadlineCard() {
  return (
    <div className="card cstm-card deadline-card">
      <div className="cardheader">
        <h2 className="c-heading">Upcoming Challenge Deadlines</h2>
      </div>
      <div
        className="deadlines-chart main-tab-scroll-part"
        style={{ height: "543.715px" }}
      >
        <div
          className="deadlineContainer"
          style={{ overflow: "hidden", width: "auto", height: "495.715px" }}
        >
          <a href="javascript:void(0)">
            <div>
              <h3>Frontend Developer Challenge 1: Web Page Creation</h3>
              <p>Due November 21 at 5:52PM</p>
            </div>
          </a>
          <a href="javascript:void(0)">
            <div>
              <h3>DTP &amp; FUN - Team Business Innovation Challenge</h3>
              <p>Due December 1 at 11:59PM</p>
            </div>
          </a>
          <a href="javascript:void(0)">
            <div>
              <h3>Career Planning 1: Assess Yourself</h3>
              <p>Due December 17 at 2:05AM</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
