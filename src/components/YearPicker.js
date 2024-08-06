import React from 'react'

const YearPicker = ({ selectedYear, onYearChange }) => {
  const years = [2020, 2021, 2022, 2023, 2024];

  return (
    <div className="year-picker-container">
      <label htmlFor="year-select" className="year-picker-label">Year:</label>
      <select 
        id="year-select"
        className="year-select"
        value={selectedYear} 
        onChange={(e) => onYearChange(Number(e.target.value))}
      >
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default YearPicker;