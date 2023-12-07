import React from "react";
import ProgressChart from "./ProgressChart";
import "../ProgressCard/progress.css";

export default function ProgressCard() {
  return (
    <div className="col-xl-4 col-md-4">
      <div className="card cstm-card tab-card my-progress-card">
        <div className="cardheader">
          <h2 className="c-heading">My Progress</h2>
          <ul className="nav" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link waves-light active waves-effect waves-light"
                data-toggle="tab"
                href="#challenge-stats-tab"
                role="tab"
              >
                Challenges
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link waves-light waves-effect waves-light"
                data-toggle="tab"
                href="#labs"
                role="tab"
              >
                Labs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link waves-light waves-effect waves-light"
                data-toggle="tab"
                href="#resources"
                role="tab"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="challengeTab tab-pane fade show active">
            <p>
              You joined Preprlabs on Apr 8, 2020, here is your Challenge
              journey.
            </p>
            <div className="row chartRow">
              <div className="challeng-chart">
                <p>
                  <span>
                    <span>1</span>/17
                  </span>
                  Challenges
                </p>
                <ProgressChart />
              </div>
              <ul>
                <li>
                  <span>Project Submitted: </span>
                  <span>1</span>
                </li>
                <li>
                  <span>Project Created: </span>
                  <span>2</span>
                </li>
                <li>
                  <span>Invited: </span>
                  <span>2</span>
                </li>
                <li>
                  <span>Followed: </span>
                  <span>0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
