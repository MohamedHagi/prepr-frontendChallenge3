import React, { useState } from "react";
import "../CreateProject/createproject.css";

export default function ImageUpload() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="step-content">
      <span className="bannerToggleClass">
        <div className="title">Upload Project Banner</div>
        <div className="sub-title p-0 m-0">
          Please select png, jpg or jpeg image with minimum dimension of width:
          625px, height: 355px
          <i className="float-right fa fa-angle-down" />
        </div>
      </span>
      <div id="bannerClass" className="row bannerCollapse" style={{}}>
        <div className="col-md-12 col-sm-12 mt-4">
          <div id="drag-and-drop-zone" className="dm-uploader p-5">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center">
                {file ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "50%" }}
                  >
                    <img src={file} style={{ width: "100%" }} />
                  </div>
                ) : (
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/upload_img.png"
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="col-md-6 col-md-6 mb-4 mt-4">
                <div className="btn btn-success mb-4 btnFile waves-effect waves-light">
                  <input
                    type="file"
                    onChange={handleChange}
                    className="loadFile1"
                  />
                  <span>Choose a project cover image</span>
                </div>
                <p style={{ fontSize: "smaller" }}>
                  Please select png, jpg or jpeg image with minimum dimension of
                  width: 625px, height: 355px
                </p>
              </div>
            </div>
            <span className="help-block" />
          </div>
          <span className="help-block text-danger" />
        </div>
      </div>
    </div>
  );
}
