import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventList.css";

function EventList() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <h1 style={{ fontWeight: "bold" }}>EVENTS</h1>
      </div>

      <ul className="tilesWrap">
        <li>
          <h2>01</h2>
          <h3>NET CRICKET</h3>
          <p>
            It is an individual sports event in which participants must face the
            bowling of balling machine. Depending on registration fees, they can
            participate for 1 over or 2 overS. This event will be organized at
            volleyball ground. This event will start from 11 o’ clock.
          </p>
          <a >
            <button onClick={() => navigate("/events")}>Read more</button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default EventList;
