import React, { useState, useEffect } from 'react';
import YearPicker from './components/YearPicker';
import Chart from './components/Chart';
import { getTemperatureData } from './services/temperatureData';
import './styles/App.css';

function App() {
  const [selectedYear, setSelectedYear] = useState(2020);
  const [temperatureData, setTemperatureData] = useState(null);

  useEffect(() => {
    const data = getTemperatureData(selectedYear);
    setTemperatureData(data);
  }, [selectedYear]);

  return (
    <div className='app-container'>
      <div className="App">
        <h1>Indian Cities Temperature Chart</h1>
        <YearPicker selectedYear={selectedYear} onYearChange={setSelectedYear} />
        {temperatureData && <Chart data={temperatureData} />}
      </div>
    </div>
  );
}

export default App;