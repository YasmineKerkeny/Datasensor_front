import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { fetchSensorData } from './api'; 


function App() {
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const frequency = 30000; // in ms 

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
    fetchSensorData().then(() => {
      console.log('Sensor data fetched successfully.');
    }).catch(error => {
      console.error('Error fetching sensor data:', error);
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route path="userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route path="productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
