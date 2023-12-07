import React from "react";
import "../AchievementCard/achievement.css";

export default function AchievementCard() {
  return (
    <div className="card cstm-card achievement-card">
      <div className="cardheader">
        <h2 className="achieveHeader">Latest Achievement</h2>
      </div>
      <div className="achievement-inner">
        <img src="https://preprlabs.org/assets/images/dashboard/achievement-icon.svg" />
        <div className="name-award">
          <h3 className="achiev-name" data-toggle="modal">
            Innovator &amp; Disruptor
          </h3>
          <div className="achiev-date">
            <a href="javascript:void(0)" target="_blank">
              <button className="btn btn-success waves-effect waves-light">
                View Detail
              </button>
            </a>
            <a data-toggle="modal" data-target="#achievement-certificate-share">
              <button className="btn waves-effect waves-light">
                <i className="iconlstd-Share" />
                Share
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
