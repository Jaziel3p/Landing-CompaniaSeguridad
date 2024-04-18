import React from "react";
/*Se rige en style.css con 'features'*/

export const Valores = (props) => {
  return (
    <div
      id="features"
      className="text-center"
      style={{
        background:
          "linear-gradient(to right, rgb(106, 135, 232) 0%, #d8d8d8 100%)",
      }}
    >
      <div className="container" style={{ width: "90%" }}>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Valores</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-sm-6 col-md-6 col-lg-4"
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
