export async function fetchSensorData() {
    try {
      const response = await fetch('http://localhost:3000/RTdata/SensorData');
      if (!response.ok) {
        throw new Error('Failed to fetch sensor data');
      }
      const data = await response.json();
      console.log(data);
      return data; 
    } catch (error) {
      console.error('Error fetching sensor data:', error.message);
      throw error; 
    }
  }

