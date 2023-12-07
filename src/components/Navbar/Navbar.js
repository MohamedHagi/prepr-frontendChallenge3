import React, { useState } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="navbar bgWhite fixed-top navbar-expand-lg top-nw-nav-header">
        <div className="container-fluid">
          <ul className="navbar-nav flex-row d-md-flex top-nw-nv-l">
            <li className="nav-item">
              <a href="#" className>
                <img
                  src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/logoNew.png"
                  style={{ width: "100px!important" }}
                  className="preprLogo"
                  alt="prepr"
                />
              </a>
            </li>
          </ul>
          <li
            className={`${
              isOpen ? "nav-item hamburger-close" : "nav-item hamburger-open"
            }`}
            onClick={toggleOpen}
          >
            <a
              href="javascript:void(0)"
              className="nav-link button-collapse active"
            ></a>
          </li>
          <ul className="navbar-nav right_nav  top-nw-nav ">
            <span className="menuOptions">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>Explore</span>
                </a>
              </li>

              <li class="nav-item dropdown d-sm-flex d-md-flex d-lg-flex d-xl-flex show">
                <a
                  class="nav-link dropdown-toggle waves-effect waves-light"
                  id="new_org_dashboard"
                  href="#"
                >
                  <span class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    Dashboard
                  </span>
                </a>
                <ul class="dropdown-menu firstmenu show">
                  <li class="dropdown-submenu">
                    <Link
                      class="dropdown-item dropdown-toggle waves-effect waves-light"
                      to="/"
                    >
                      <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/user.png" />
                      User dashboard
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>My Challenges </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>My Labs</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>My Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>Career Explorer</span>
                </a>
              </li>
            </span>
            <li>
              <a className="waves-effect waves-block" href="#">
                <img src="https://preprlabs.org/assets/images/header/bell-icon.svg" />
                <span className="notifications-indicator"></span>
              </a>
            </li>
            <li>
              <a className="waves-effect waves-block" href="#">
                <img
                  src="https://preprlabs.org/assets/images/header/inbox-icon.svg"
                  style={{ width: 27, height: 27 }}
                />
              </a>
            </li>
            <li>
              <a className="waves-effect waves-block" href="#">
                <img src="https://preprlabs.org/assets/images/header/help-icon.svg" />
              </a>
            </li>
            <li className="nav-item searchbar">
              <div className="input-group" id="multiple-datasets">
                <div className="input-group-prepend">
                  <input
                    type="text"
                    className="form-control typeahead ui-autocomplete-input"
                    id="main_search"
                    style={{ width: 358 }}
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                href=""
                className="nav-link user_details_drop dropdown-toggle"
                role="button"
              >
                <img
                  className="header-profile-image"
                  src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/users/oBI7aBplH7uvY74q5SPHjFJcduxUR5PNfY7gqLjp.png"
                  title="Mohamed Hagi"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <ul className="user-settings-dropdown">
                  <li className="user-settings-dropdown-info">
                    <a href="# ">
                      <img
                        className="icon-circle bg-light-green"
                        src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/users/oBI7aBplH7uvY74q5SPHjFJcduxUR5PNfY7gqLjp.png"
                        title="Mohamed Hagi "
                      />
                    </a>
                    <div>
                      <a className="dropdown-username" href="#">
                        Mohamed Hagi
                      </a>
                      <div className="dropdown-rank">Learn Rank 2</div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="">
                      <div className="menu-info">Profile</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <div className="menu-info">Newsfeed</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <div className="menu-info">Settings</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect waves-block">
                      <div className="menu-info">Log out</div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`nav-item dropdown grid ${isOpen ? "show" : ""}`}
              onClick={toggleOpen}
            >
              <a
                href="#"
                className="nav-link user_details_drop dropdown-toggle"
                role="button"
              >
                <img src="https://preprlabs.org/assets/images/header/app-icon.svg" />
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right dropdownMenu ${
                  isOpen ? "show" : ""
                }`}
              >
                <ul className="app-dropdown">
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/lab-icon.svg" />
                      Labs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/lab-program-icon.svg" />
                      Lab programs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/project-icon.svg" />
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/challenge-icon.svg" />
                      Challenges
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/challenge-path-icon.svg" />
                      Challenge Paths
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/assessment-icon.svg" />
                      Assessments
                    </a>
                  </li>
                  <li>
                    <a href="#ffffff" className="">
                      <img src="https://preprlabs.org/assets/images/header/resource-module-icon.svg" />
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/skill-icon.svg" />
                      Career Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/achievement-icon.svg" />
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/organization-icon.svg" />
                      Organizations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/team-matching-icon.svg" />
                      Team Matching
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <img src="https://preprlabs.org/assets/images/header/leaderboard-icon.svg" />
                      Leaderboard
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <aside className={`side-nav ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-search">
            <div className="input-group" id="multiple-datasets">
              <div className="input-group-prepend">
                <input
                  type="text"
                  className="form-control typeahead ui-autocomplete-input"
                  placeholder="Search PreprLabs"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="sidebar-user-details">
            <a data-qa="Mobile Nav: View Profile - Icon" href="#">
              <img
                src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/users/oBI7aBplH7uvY74q5SPHjFJcduxUR5PNfY7gqLjp.png"
                alt="Profile"
              />
            </a>
            <div>
              <a
                data-qa="Mobile Nav: View Profile"
                className="dropdown-username"
                href="#"
              >
                Mohamed Hagi
              </a>
              <div className="dropdown-rank">Learn rank 2</div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ position: "relative", overflow: "hidden", width: "auto" }}
          >
            <div style={{ height: "547px", overflow: "hidden", width: "auto" }}>
              <ul>
                <li className="nav_icon nav_explore">
                  <a href="#">Explore</a>
                </li>
                <li className="nav_icon nav_dashboard">
                  <a href="#">Dashboard</a>
                </li>
                <li className="nav_icon nav_labs">
                  <a href="#">My Labs</a>
                </li>
                <li className="nav_icon nav_challenges">
                  <a href="#">My Challenges</a>
                </li>
                <li className="nav_icon nav_projects">
                  <a href="#">My Projects</a>
                </li>
                <li className="nav_chevron nav_browse">
                  <a href="javascript:void(0)">Browse</a>
                </li>
                <li className="nav_chevron nav_account">
                  <a href="javascript:void(0)">Account</a>
                </li>
                <li className="nav_icon nav_help">
                  <a href="#">Help center</a>
                </li>
                <li className="nav_icon nav_logout">
                  <a href="#">Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
