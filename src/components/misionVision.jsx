import React from "react";

export const MisionVision = (props) => {
  return (
    <div id="features" className="text-center identidad">
      <div className="container" style={{ width: "70%" }}>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Identidad</h2>
        </div>
        <div className="row ">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-sm-6 col-md-6 col-lg-6"
                >
                  <div className="feature-item">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
