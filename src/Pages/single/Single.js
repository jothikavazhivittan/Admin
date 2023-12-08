import React from 'react'
import Sidebar from "../../Component/SideBar/Sidebar"
import Navbar from "../../Component/NavBar/Navbar"
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
      </div>
    </div>
  )
}

export default Single