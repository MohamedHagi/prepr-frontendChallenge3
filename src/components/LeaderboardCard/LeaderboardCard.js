import React from "react";
import tableImg from "../LeaderboardCard/tableImg.png";
import "../LeaderboardCard/leader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function LeaderboardCard() {
  return (
    <div className="col-xl-8 col-md-8">
      <div
        className="card cstm-card tab-card leaderboardCard"
        style={{ maxHeight: 500 }}
      >
        <div className="cardheader">
          <h2 className="leaderBoardHeader">
            Leaderboard &nbsp;
            <FontAwesomeIcon icon={faQuestionCircle} />
          </h2>
          <a
            className="btn btn-success btn-cstm waves-effect waves-light"
            href="https://preprlabs.org/my-leader-board"
          >
            View Leaderboard
          </a>
        </div>
        <div className="card-body d-card-body pt-1">
          <form
            method="GET"
            action="https://preprlabs.org/my-leader-board"
            acceptCharset="UTF-8"
            className="filterBoard"
            id="filterBoard"
            name="filterBoard"
            autoComplete="off"
          >
            <div id="dropFiltersList">
              <div className="row">
                <div className="col-md-3 pr-lg-0 pr-xl-0 pr-md-0 pr-sm-3 pr-3">
                  <p className="filterHead">Organization</p>
                  <select
                    className="form-control dropRadius"
                    id="organisation_id"
                  >
                    <option value="" hidden="">
                      All Organizations
                    </option>
                    <option>Prepr</option>
                  </select>
                </div>
                <div className="col-md-3 pr-lg-0 pr-xl-0 pr-md-0 pr-sm-3 pr-3">
                  <p className="filterHead">Lab</p>
                  <select className="form-control dropRadius" id="lab_id">
                    <option value="" hidden="">
                      All Labs
                    </option>
                    <option>Web Developer</option>
                    <option>Career Planning</option>
                  </select>
                </div>
                <div className="col-md-3 pr-lg-0 pr-xl-0 pr-md-0 pr-sm-3 pr-3">
                  <p className="filterHead">Challenge</p>
                  <select className="form-control dropRadius" id="challenge_id">
                    <option>All Challenges</option>
                    <option>
                      DTP &amp; FUN - Team Business Innovation Challenge
                    </option>
                    <option>
                      Frontend Developer Challenge 1: Web Page Creation
                    </option>
                    <option>
                      Frontend Developer Challenge 2: Login System
                    </option>
                  </select>
                </div>
                <div className="col-md-2 pr-lg-0 pr-xl-0 pr-md-0 pr-sm-2 pr-2">
                  <p className="filterHead">Sort by</p>
                  <select className="form-control dropRadius" id="order_id">
                    <option value="point">Learning Points</option>
                    <option value="rank">Learning Rank</option>
                    <option value="achievement_count">Achievement</option>
                  </select>
                </div>
                <div className="col-md-1 pr-lg-0 pr-xl-0 pr-md-0 pr-sm-1 pr-1">
                  <p className="filterHead filterHead-padding" />
                  <a className="link-btn" id="clearFilterOrgData">
                    Clear filters
                  </a>
                </div>
              </div>
            </div>
          </form>

          <div className="col-md-12">
            <div className="row-loader-linear" id="loadLinear">
              <div className="row">
                <div className="col-xl-3 col-lg-5 col-md-5 col-sm-5 col-xs-12">
                  <div className="linear-background" />
                </div>
                <div className="col-xl-9 col-lg-7 col-md-7 col-sm-7 col-xs-12">
                  <div className="linear-background" />
                </div>
                <div className="divider" />
              </div>
            </div>
          </div>
          <div className="row-loader-appear">
            <div className="col-md-12">
              <div className="row" id="leaderboardData">
                <div className="table-responsive">
                  <img src={tableImg} style={{ width: "100%" }}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
