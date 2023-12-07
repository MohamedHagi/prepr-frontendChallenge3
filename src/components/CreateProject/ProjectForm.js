import React from "react";
import "../CreateProject/createproject.css";
import Select from "react-select";
import ImageUpload from "./ImageUpload";

export default function ProjectForm({ step, inputChange }) {
  const challengeOptions = [
    { value: "challenge1", label: "Challenge 1" },
    { value: "challenge2", label: "Challenge 2" },
    { value: "challenge3", label: "Challenge 3" },
  ];
  const labOptions = [
    { value: "lab1", label: "Lab 1" },
    { value: "lab2", label: "Lab 2" },
    { value: "lab3", label: "Lab 3" },
  ];
  const recruitOptions = [
    { value: "option1", label: "Not currently recruiting" },
    { value: "option1", label: "Currently recruiting" },
  ];
  const skillOptions = [
    { value: "skill1", label: "Skill 1" },
    { value: "skill2", label: "Skill 2" },
    { value: "skill3", label: "Skill 3" },
  ];
  return (
    <>
      {step == 1 ? (
        <>
          <div className="requirecurrent">
            <div className="step-content" id="step-content">
              <div className="challenge_action">
                <div className="mb-3 align-items-center">
                  <span className="icon-time" />
                  <p className="d-inline-block mb-0">
                    <span id="chalTitle">Challenge</span>:{" "}
                    <span id="chal_form">No active challenge selected</span>{" "}
                    <b id="challengeData" />
                  </p>
                </div>
              </div>
              <div id="detailDesciption">
                <div className="detail_wrap">
                  <div id="showDescription">
                    <div className="result_box not_ready_box">
                      <h6 className="font-weight-bold text-dark mb-2">
                        To browse challenge requirements here, you need to
                        select an active challenge below.
                      </h6>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="tab current" id="c1_ProjectOverview">
            <div className="step-content">
              <div className="title mb-4">Project overview</div>
              <div className="row mb-3">
                <div className="col-sm-6">
                  <div className="form-group validation-group mb-4">
                    <label className="active">
                      Title <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="projectname"
                      handleChange={inputChange}
                      className="form-control"
                      defaultValue=""
                    />
                    <span className="help-block text-danger projectnameError" />
                  </div>
                  <div className="form-group validation-group mb-4">
                    <label className="active">
                      Description <sup>*</sup>
                    </label>
                    <textarea
                      name="editorDescription"
                      id="editorDescription"
                      className="form-control form-control-textarea"
                      handleChange={inputChange}
                      defaultValue={""}
                    />
                    <span className="help-block text-danger editorDescriptionError" />
                  </div>
                  <div className="check_area mb-4">
                    <div className="form-group m-0">
                      <input type="checkbox" id="privacy" />
                      <label htmlFor="privacy" className="f-s-15 m-0">
                        Allow users outside your team to view your project
                      </label>
                    </div>
                  </div>
                  <div className="check_area">
                    <div className="form-group m-0">
                      <input type="checkbox" id="file_download_privacy" />
                      <label
                        htmlFor="file_download_privacy"
                        className="f-s-15 m-0"
                      >
                        Allow users outside your team to download your project
                        files
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-4 validation-group">
                    <label>
                      Project slug <sup>*</sup>
                    </label>

                    <input
                      type="text"
                      name="project_slug"
                      className="form-control"
                      handleChange={inputChange}
                      defaultValue=""
                      placeholder="Project slug"
                    />

                    <span className="help-block text-danger project_slugError" />
                  </div>
                  <div className="form-group mb-4 validation-group">
                    <label>
                      Active Challenge <sup>*</sup>
                    </label>
                    <Select
                      name="active_challenge"
                      options={challengeOptions}
                      placeholder="Select Challenge"
                    />
                  </div>
                  <div className="form-group">
                    <label>Associated Lab</label>
                    <Select options={labOptions} placeholder="Select Lab" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ImageUpload />
        </>
      ) : (
        <div className="step-content">
          <div className="title">Building your team</div>
          <div className="sub-title pb-3">
            Building a team is important for your project.
          </div>
          <div className="row mb-0">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Recruiting status</label>
                <Select
                  options={recruitOptions}
                  placeholder="Select Recruiting status for your project"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Required skills</label>
                <Select
                  options={skillOptions}
                  placeholder="Find teammates with these skills"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
