import React from "react";
import "../App.css";
  
const Menu = ({ setLineColor, setLineWidth, 
setLineOpacity }) => {
  return (
    <div className="Menu">
      <label id="brush"></label>
      <label id="text">Width</label>
      <input
        type="range"
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label id="text">Color</label>
      <input
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <label id="text">Opacity</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
    </div>
  );
};
  
export default Menu;