import React from "react";
import "./info.css";

let abc = [1, 2, 3];

const Info = ({ info, cod }) => {
  return (
    <div className="info">
      <div className="info-general">
        <div className="info_city">
          City:<p>{info.name}, </p>
          <p>{info.country}</p>
        </div>
        <div className="info_item">
          Population: <p>{info.population}</p>
        </div>

        <div className="info_item">
          Lat: <p>{info.coord.lat}</p>
        </div>
        <div className="info_item">
          Long: <p>{info.coord.lon}</p>
        </div>
        {/* <div className="info_item">
          Cod: <p>{cod}</p>
        </div> */}
      </div>
      {/* <FontAwesomeIcon icon={icon({ name: "user-secret" })} /> */}
    </div>
  );
};

export default Info;
