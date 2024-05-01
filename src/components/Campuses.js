import React from "react";
import Map from "./Map";
import "../style/campus.css";

function Campuses() {
  const location = [
    { lat: 51.52221237478603, lng: -0.1549376147066559 },
    { lat: 51.517588076415635, lng: -0.14328396165706442 },
    {
      lat: 51.521130977966365,
      lng: -0.14011100828490236,
    },
  ];

  return (
    <>
      <div className="map-wrapper">
        <div className="map-card">
          <div className="map-card-body">
            <div>
              <h5 className="map-card-title">Marylebone Campus</h5>
              <p className="map-card-text">
                35 MARYLEBONE ROAD LONDON NW1 5LS.
                <br />
                DURING SEMESTER TIME
                <br />
                MON - FRI: 8AM - 9PM
                <br />
                SAT - SUN: 8AM - 6PM
                <br />
                TELEPHONE : +44 (0) 20 7911 5000
              </p>
            </div>
            <Map className="map-style" location={location[0]} />
          </div>
        </div>
        <div className="map-card">
          <div className="map-card-body">
            <div>
              <h5 className="map-card-title">Cavendish Campus</h5>
              <p className="map-card-text">
                115 NEW CAVENDISH STREET LONDON W1W 6UWb
                <br />
                DURING SEMESTER TIME
                <br />
                MON - FRI: 8AM - 9PM
                <br />
                SAT: 9AM - 6PM
                <br />
                SUN: CLOSED*
                <br />
                TELEPHONE : +44 (0) 20 7911 5000
              </p>
            </div>
            <Map className="map-style" location={location[1]} />
          </div>
        </div>
        <div className="map-card">
          <div className="map-card-body">
            <div>
              <h5 className="map-card-title">Regent's Campus</h5>
              <p className="map-card-text">
                309 Regent StreetLondon W1B 2HW.
                <br />
                During semester time
                <br />
                Mon – Fri:8am – 9pm
                <br />
                Sat: 9am – 5pM
                <br />
                Sun: 8am – 6pM.
                <br />
                Telephone+44 (0) 20 7911 5000
              </p>
            </div>
            <Map className="map-style" location={location[0]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Campuses;
