import React from 'react'
import './sidebar.scss'; 
import logoImage from '../images/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
      <span className="logo">
      <img src={logoImage} alt="Logo"  
      style={{ maxWidth: '150px', height: '70px',  marginTop: '50px' }}
      />
       </span>
       </div>

      <hr/>
      <div className="center">
        <ul>
          <div className="step" style={{alignItems:'center', padding: '70px', color:'#0971B8', fontWeight: 'bold'}}> </div>
          {/*
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
            </li>
            <p className='title'>LISTS</p>
          <li>
            <GroupIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            < ProductionQuantityLimitsIcon className='icon'/>
            <span>Products</span>
            </li>
      */}
        </ul>
      </div>
     
    </div>
  )
}

export default Sidebar