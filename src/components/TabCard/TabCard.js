import React, { useState } from "react";
import "../TabCard/tabcard.css";
import projectImage from "../../dummyJson/projectPlaceholder.png";
import { Link } from "react-router-dom";

export default function TabCard({ category, data }) {
  //change the icon for each tabcard
  let tabIcon;
  if (category === "Lab") {
    tabIcon = "https://d3f06rtlkr354b.cloudfront.net/public/front/img/Lab.svg";
  } else if (category === "Challenge") {
    tabIcon =
      "https://d3f06rtlkr354b.cloudfront.net/public/front/img/Challenge.svg";
  } else {
    tabIcon =
      "https://d3f06rtlkr354b.cloudfront.net/public/front/img/Project.svg";
  }

  //changing state for active tab
  const [activeTab, setActiveTab] = useState("categoryType");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="card cstm-card tab-card">
      <div className="cardheader">
        <a className="c-heading" href="">
          <img style={{ height: 20, width: 20 }} src={tabIcon} />
          &nbsp;{data.length}&nbsp; {category}s
        </a>
        {category == "Project" && (
          <Link to="/create-project">
            <button className="btn btn-success btn-cstm waves-effect waves-light">
              Create
            </button>
          </Link>
        )}
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item waves-effect waves-light">
          <a
            className={`nav-link ${
              activeTab === "categoryType" ? "active" : ""
            }`}
            onClick={() => handleTabClick("categoryType")}
            role="button"
          >
            My {category}s
            <span className="green_circle_number">{data.length}</span>
          </a>
        </li>
        <li className="nav-item waves-effect waves-light">
          <a
            className={`nav-link ${activeTab === "Invited" ? "active" : ""}`}
            onClick={() =>
              handleTabClick(
                category == "Project" ? "Need to Assess" : "Invited"
              )
            }
            role="button"
          >
            {category === "Lab" || category === "Challenge"
              ? "Invited"
              : category === "Project"
              ? "Need to Assess"
              : ""}
          </a>
        </li>
        <li
          className="nav-item waves-effect waves-light"
          style={{ display: category == "Lab" ? "none" : "" }}
        >
          <a
            className={`nav-link ${activeTab === "Following" ? "active" : ""}`}
            onClick={() => handleTabClick("Following")}
            role="button"
          >
            Following <span className="green_circle_number">{data.length}</span>
          </a>
        </li>
      </ul>
      <div className="add-usr-project-tab">
        <div
          className="slimScrollDiv"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "auto",
            height: 585,
          }}
        >
          <div
            className="tab-content project-tab-scroll"
            style={{ overflow: "hidden", width: "auto", height: 585 }}
          >
            <div
              className={`tab-pane ${
                activeTab === "categoryType" || activeTab === "Following"
                  ? "active"
                  : ""
              }`}
            >
              {category == "Lab" && (
                <div className="accordion d-card-accordion">
                  {data.map((data, index) => (
                    <div className="card">
                      <div className="card-body d-card-body pt-1">
                        <div className="d-row">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">
                              <b className="f-s-16 text-light-green f-semibold">
                                <a
                                  href="https://preprlabs.org/labs/web-developer-career-lab"
                                  className="text-light-green"
                                >
                                  {data.title}
                                </a>
                              </b>
                            </p>
                            <p className="m-0 f-s-14 f-regular text-gray-shade-1">
                              <span className="d-flex">
                                <i className="icon-friends" />{" "}
                                <b className="f-regular f-s-10 ml-1">
                                  {" "}
                                  {data.followers}{" "}
                                </b>
                              </span>
                            </p>
                          </div>
                          <div className="img-wth-dec">
                            <img src={data.imageUrl} alt="Web Developer" />
                            <div className="p-txt">{data.description}</div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {category == "Challenge" && (
                <div className="accordion d-card-accordion">
                  {data.map((data, index) => (
                    <div className="card">
                      <div className="card-body d-card-body pt-1">
                        <div className="d-row">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">
                              <b
                                className="f-s-16 text-light-green f-semibold"
                                style={{ fontSize: "14px" }}
                              >
                                <a
                                  className="text-light-green"
                                  href="https://preprlabs.org/challengeManager/dtp-FUN-team-business-innovation-challenge"
                                >
                                  {data.title}
                                </a>
                              </b>
                            </p>
                          </div>
                          <div className="img-wth-dec">
                            <img
                              src={data.imageUrl}
                              alt="DTP & FUN - Team Business Innovation Challenge"
                              onerror="this.onerror=null;this.src='https://d3f06rtlkr354b.cloudfront.net/public/front/img/no-img.jpg';"
                            />
                            <div className="p-txt">{data.title}</div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center f-nav uniq">
                            <div className="l-nv">
                              <span className="l-dt">
                                {" "}
                                <i className="icon-last-date-to-register-team" />{" "}
                                {data.lastDate}
                              </span>
                            </div>
                            <div className="r-nv">
                              <span>
                                <i className="icon-friends" />
                                {data.followers}
                              </span>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {category == "Project" && (
                <div className="accordion d-card-accordion">
                  {data.map((data, index) => (
                    <div className="card">
                      <div className="card-body d-card-body pt-1">
                        <div className="d-row">
                          <img className="projectImage" src={projectImage} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className={`tab-pane ${activeTab === "Invited" ? "active" : ""}`}
            >
              <div className="accordion d-card-accordion">
                <div className="card">
                  <div className="card-body d-card-body">
                    <b>
                      <p className="text-center m-t-10">
                        No pending {category} invitations
                      </p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane ${
                activeTab === "Need to Assess" ? "active" : ""
              }`}
            >
              <div className="accordion d-card-accordion">
                <div className="card">
                  <div className="card-body d-card-body">
                    <div className="text-center">
                      <img
                        src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/project_submissions_dashboard.png"
                        className="action_image_project"
                        alt="prepr"
                      />
                      <p className="action_image_text_project">
                        This area will display project submissions for you to
                        assess in a challenge if you’re invited to be an
                        assessor!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slimScrollBar"
            style={{
              background: "rgb(111, 192, 92)",
              width: 2,
              position: "absolute",
              top: 0,
              opacity: "0.4",
              display: "none",
              borderRadius: 7,
              zIndex: 99,
              right: 1,
              height: 585,
            }}
          />
          <div
            className="slimScrollRail"
            style={{
              width: 2,
              height: "100%",
              position: "absolute",
              top: 0,
              display: "none",
              borderRadius: 7,
              background: "rgb(206, 207, 208)",
              opacity: "0.2",
              zIndex: 90,
              right: 1,
            }}
          />
        </div>
      </div>
      <div className="card-footer" style={{ textAlign: "center" }}>
        <a href="https://preprlabs.org/joinedLab">
          <button className="btn btn-success btn-cstm waves-effect waves-light">
            Explore more
          </button>
        </a>
      </div>
    </div>
  );
}
