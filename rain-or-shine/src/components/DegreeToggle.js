import React from 'react';

const DegreeToggle = ({degreeType, updateDegreeType}) => {
  return (
    <>
    <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="celsius"
        value="celsius"
        checked={degreeType === "celsius"}
        onChange={updateDegreeType}
        />
        <label className="form-check-label" for="celsius">Celsius</label>
      </div>
      <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="farenheit"
        value="fahrenheit"
        checked={degreeType === "fahrenheit"}
        onChange={updateDegreeType}
        />
        <label className="form-check-label" for="farenheit">Farenheit</label>
      </div>
    </>
  )
}

export default DegreeToggle;