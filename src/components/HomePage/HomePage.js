import React from "react";
import TabCard from "../TabCard/TabCard";
import labData from "../../dummyJson/labData.json";
import challengeData from "../../dummyJson/challengeData.json";
import projectData from "../../dummyJson/projectData.json";
import Navbar from "../Navbar/Navbar";
import ProgressCard from "../ProgressCard/ProgressCard";
import ContinueCard from "../ContinueCard/ContinueCard";
import DeadlineCard from "../DeadlineCard/DeadlineCard";
import AchievementCard from "../AchievementCard/AchievementCard";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";

export default function HomePage() {
  return (
    <>
      <div className="dashContainer">
        <div>
          <p>
            <b className="welcomeMessage">Good afternoon, Mohamed. </b>{" "}
            <a href="#">
              {" "}
              <u>Complete profile</u>
            </a>
          </p>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="cardContainer">
              <ProgressCard />
              <ContinueCard />
              <div className="col-md-4">
                <DeadlineCard />
              </div>
            </div>
            <div className="cardContainer">
              <LeaderboardCard />
              <div className="col-md-4">
                <AchievementCard />
              </div>
            </div>
            <div className="cardContainer">
              <div className="col-md-4">
                <TabCard category="Lab" data={labData} />
              </div>
              <div className="col-md-4">
                <TabCard category="Challenge" data={challengeData} />
              </div>
              <div className="col-md-4">
                <TabCard category="Project" data={projectData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
