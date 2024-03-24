import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss'; 
import SensorData from '../../components/SensorData/SensorData';
import Chart from '../../components/charts/Chart';
//import Table from '../../components/table/Table';


const Home = () => {

  const data1 = [
    {name:"January",Total:7},
    {name:"February",Total:17},
    {name:"March",Total:18},
    {name:"April",Total:23},
    {name:"May",Total:25},
    {name:"June",Total:30},
  ];

  const data2 = [
    {name:"January",Total:7},
    {name:"February",Total:6},
    {name:"March",Total:4},
    {name:"April",Total:5},
    {name:"May",Total:3},
    {name:"June",Total:4},
  ];
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
          <SensorData />
          </div>
         
          {/* <div className="listContainer">
           <div className="listTitle">
                transactionns
            </div>
            <Table/> 
          </div>*/}
         </div>
    </div>
  );
};

export default Home;