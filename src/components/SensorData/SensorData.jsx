import React, { useState, useEffect } from 'react';
import Widgets from '../../components/widgets/Widgets';
import axios from 'axios';
import './SensorData.css';
import { ref, get } from 'firebase/database';
import { database } from '../../lib/init-firebase';

function SensorContainer() {
    const [sensorData, setSensorData] = useState({});
  
    useEffect(() => {
      const dataRef = ref(database, 'TEST');
  
      get(dataRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setSensorData(data);
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    
  
    return (
      <div className="sensor-container">
        <Widgets
          title="Temperature"
          value={sensorData.temperature}
          unit="   °C"
          date={sensorData.temperatureDate}
        />
        <Widgets
          title="pH"
          value={sensorData.ph}
          unit=""
          date={sensorData.phDate}
        />
      </div>
    );
  };
  
  export default SensorContainer;
  