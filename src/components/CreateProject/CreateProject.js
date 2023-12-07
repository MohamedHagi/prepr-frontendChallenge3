import React, { useState } from "react";
import "../CreateProject/createproject.css";
import ImageUpload from "./ImageUpload";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export default function CreateProject() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    projectname: "",
    editorDescription: "",
    project_slug: "",
    active_challenge: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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

  const handleCancel = () => {
    navigate("/");
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleContinue = () => {
    if (!formData.projectname.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.editorDescription.trim()) {
      toast.error("Description is required");
      return;
    }

    if (!formData.project_slug.trim()) {
      toast.error("Project slug is required");
      return;
    }
    if (!formData.active_challenge.value) {
      toast.error("Active Challenge is required");
      return;
    }

    setFormData({
      projectname: "",
      editorDescription: "",
      project_slug: "",
      active_challenge: "",
    });
    setStep(2);
  };

  const handleCreate = () => {
    if (!formData.projectname.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.editorDescription.trim()) {
      toast.error("Description is required");
      return;
    }

    if (!formData.project_slug.trim()) {
      toast.error("Project slug is required");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <Toaster position="bottom-left" toastOptions={{ duration: 3000 }} />
      <div
        style={{
          minHeight: "100%",
          height: "100vh",
          backgroundColor: "#f3f7fc",
          top: "55px",
          position: "relative",
        }}
      >
        <div className="container p-t-20 p-b-20">
          <div className="row">
            <div className="col-md-12">
              <div className="card bg-white border-r-0">
                <div className="p-l-20 p-r-20">
                  <div className="card-header bg-white p-l-0 p-r-0 p-tb-20">
                    <div className="card-title m-0 p-0">
                      <div className="row">
                        <div className="col-lg-6 col-sm-6 text-uppercase">
                          Create Project
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lab-step">
                    <ul className="step-list">
                      <li
                        id="c1_ProjectOverview_step"
                        className={`step c_step ${step === 1 ? "active" : ""}`}
                      >
                        <span>1</span> Details
                      </li>
                      <li
                        id="c4_TeamBuilding_step"
                        className={`step c_step ${step === 2 ? "active" : ""}`}
                      >
                        <span>2</span> Team building
                      </li>
                    </ul>
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
                                    <span id="chal_form">
                                      No active challenge selected
                                    </span>{" "}
                                    <b id="challengeData" />
                                  </p>
                                </div>
                              </div>
                              <div id="detailDesciption">
                                <div className="detail_wrap">
                                  <div id="showDescription">
                                    <div className="result_box not_ready_box">
                                      <h6 className="font-weight-bold text-dark mb-2">
                                        To browse challenge requirements here,
                                        you need to select an active challenge
                                        below.
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
                                      name="projectname"
                                      value={formData.projectname}
                                      onChange={(e) => handleInputChange(e)}
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
                                      value={formData.editorDescription}
                                      name="editorDescription"
                                      className="form-control form-control-textarea"
                                      onChange={(e) => handleInputChange(e)}
                                      defaultValue={""}
                                    />
                                    <span className="help-block text-danger editorDescriptionError" />
                                  </div>
                                  <div className="check_area mb-4">
                                    <div className="form-group m-0">
                                      <input type="checkbox" id="privacy" />
                                      <label
                                        htmlFor="privacy"
                                        className="f-s-15 m-0"
                                      >
                                        Allow users outside your team to view
                                        your project
                                      </label>
                                    </div>
                                  </div>
                                  <div className="check_area">
                                    <div className="form-group m-0">
                                      <input
                                        type="checkbox"
                                        id="file_download_privacy"
                                      />
                                      <label
                                        htmlFor="file_download_privacy"
                                        className="f-s-15 m-0"
                                      >
                                        Allow users outside your team to
                                        download your project files
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
                                      value={formData.project_slug}
                                      className="form-control"
                                      onChange={(e) => handleInputChange(e)}
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
                                      onChange={(selectedOption) =>
                                        setFormData((prevData) => ({
                                          ...prevData,
                                          active_challenge: selectedOption,
                                        }))
                                      }
                                      options={challengeOptions}
                                      placeholder="Select Challenge"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Associated Lab</label>
                                    <Select
                                      options={labOptions}
                                      placeholder="Select Lab"
                                    />
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
                    <div className="stepTab-btn">
                      {step == 1 ? (
                        <>
                          <button
                            type="button"
                            data-toggle="modal"
                            onClick={handleCancel}
                            className="btn cancel waves-effect waves-light"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn previous waves-effect waves-light"
                            onClick={handleContinue}
                          >
                            Continue
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn previous waves-effect waves-light"
                            onClick={handleBack}
                          >
                            Back
                          </button>

                          <button
                            type="submit"
                            className="btn next submit active waves-effect waves-light"
                            onClick={handleCreate}
                          >
                            Create Project
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
