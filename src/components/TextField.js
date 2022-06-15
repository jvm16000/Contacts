import React from 'react'
import './TextField.css'
const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop:"1rem" }}>
      <div style={{width:"6rem", fontSize:"1.5rem"}}>
        <label>{label}:</label>
      </div>
      <div>
        <input
          className="textbox"
          style={{}}
          {...inputProps}
          onChange={onChange}
          value={value}
        />
        
      </div>
    </div>
  );
};

export default TextField