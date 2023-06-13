import React from "react";
import "./info.css";

let abc = [1, 2, 3];

const Info = ({ info, error, setError }) => {
  return (
    <div className="info">
      {!error && (
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
        </div>
      )}
      {error && <div className="info_city">Error</div>}
    </div>
  );
};

export default Info;
