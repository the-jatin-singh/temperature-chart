const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// random temperature
const generateData = () => {
  const data = {};
  for (let year = 2020; year <= 2024; year++) {
    data[year] = {};
    cities.forEach(city => {
      // btwn 15-35°C
      data[year][city] = months.map(() => Math.floor(Math.random() * 20) + 15);
    });
  }
  return data;
};

const temperatureData = generateData();

export const getTemperatureData = (year) => {
  return temperatureData[year];
};