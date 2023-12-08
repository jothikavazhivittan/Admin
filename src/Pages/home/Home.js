import React from 'react'
import "./home.css"
import Sidebar from '../../Component/SideBar/Sidebar'
import Navbar from '../../Component/NavBar/Navbar'
import Widget from '../../Widget/Widget'
import Fearued from '../../Fearued/Fearued'
import Chart from '../../Chart/Chart'
import Tab from '../../Tab/Tab'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homecontainer'>
        <Navbar/>
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order'/>
          <Widget type='earnings'/>
          <Widget type='blance'/>
        </div>
        <div className='charts'>
            <Fearued/>
            <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Transaction</div>
          <Tab/>
        </div>
      </div>
        </div>
  )
}

export default Home