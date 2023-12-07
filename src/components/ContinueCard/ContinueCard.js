import React from "react";
import ContinueChart from "./ContinueChart";
import "../ContinueCard/continue.css";

export default function ContinueCard() {
  return (
    <div className="col-xl-4 col-md-4">
      <div className="card cstm-card continue-card">
        <div className="cardheader">
          <h2 className="c-heading">Continue Where You Left Off</h2>
        </div>
        <div
          className="lastVisited-chart"
          id="dataAvail"
          style={{ display: "block" }}
        >
          <p id="last-visited-message">
            We found that you were working on this Challenge last time, do you
            want to continue working on it?
          </p>
          <div className="row chartRow">
            <div className="visited-chart challenge-asset">
              <div
                className="chartjs-size-monitor"
                style={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  pointerEvents: "none",
                  visibility: "hidden",
                  zIndex: -1,
                }}
              >
                <div
                  className="chartjs-size-monitor-expand"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: -1,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: 1000000,
                      height: 1000000,
                      left: 0,
                      top: 0,
                    }}
                  />
                </div>
                <div
                  className="chartjs-size-monitor-shrink"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: -1,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "200%",
                      height: "200%",
                      left: 0,
                      top: 0,
                    }}
                  />
                </div>
              </div>
              <p id="circleValue">Not started</p>

              <ContinueChart />
            </div>
            <div>
              <h3 id="last-visited-heading">
                Frontend Developer Challenge 4: Accessibility Integration
              </h3>
              <p id="last-visited-desc">
                Frontend Developer Challenge 4: Accessibility Integration
              </p>
              <a
                id="last-visited-rdr-btn"
                href="/challengeManager/frontend-developer-challenge-4-accessibility-integration"
                target="_blank"
              >
                <button className="btn btn-success waves-effect waves-light">
                  Continue
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
