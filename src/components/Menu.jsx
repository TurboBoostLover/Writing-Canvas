import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity , wipeBoard}) => {
  return (
    <div className="Menu">
      <label>Brush Color</label>
      <input
        type="color"
        onChange={(event) => {
          setLineColor(event.target.value);
        }}
      />
      <label>Brush Width</label>
      <input
        type="range"
        min="3"
        max="20"
        onChange={(event) => {
          setLineWidth(event.target.value);
        }}
      />
      <label>Brush Opacity</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(event) => {
          setLineOpacity(event.target.value / 100);
        }}
      />
      <button onClick={wipeBoard}>CLEAR</button>
    </div>
  );
};

export default Menu;
