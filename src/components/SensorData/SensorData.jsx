import React, { useState, useEffect } from 'react';
import Widgets from '../../components/widgets/Widgets';
import './SensorData.css';
import { ref, get } from 'firebase/database';
import { database } from '../../lib/init-firebase';
import { fetchSensorData } from '../../api';

function SensorContainer() {
    const [sensorData, setSensorData] = useState({});
  const [initialFetchDone, setInitialFetchDone] = useState(false);

    const frequency = 10000;
  
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

    useEffect(() => {
      // Fetch data immediately when component mounts
      fetchData();
      setInitialFetchDone(true);
  
      // Fetch data periodically
      const intervalId = setInterval(fetchData, frequency);
  
      // Cleanup function to clear the interval when component unmounts or when dependencies change
      return () => clearInterval(intervalId);
    }, []); 
  
    const fetchData = () => {
      fetchSensorData().then((_data) => {
        setSensorData(_data[0].points)
        //console.log('Sensor data fetched successfully. : ',_data);
      }).catch(error => {
        console.error('Error fetching sensor data:', error);
      });
    };

    useEffect(()=>console.log(sensorData),[sensorData])
  
    return (
      <div className="sensor-container">
        {!!sensorData?.[1] && <Widgets
          title="Temperature"
          value={sensorData[1]?.measurement_value}
          unit="   °C"
          date={new Date(sensorData[1].time).toDateString()}
        />}
        {!!sensorData?.[0] && <Widgets
          title="pH"
          value={sensorData[0].measurement_value}
          unit=""
          date={new Date(sensorData.time).toDateString()}
        />}
      </div>
    );
  };
  
  export default SensorContainer;
  