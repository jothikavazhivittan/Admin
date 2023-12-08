import React from 'react'
import "./list.css"
import Sidebar from '../../Component/SideBar/Sidebar'
import Navbar from '../../Component/NavBar/Navbar'
import DataTable from '../../Component/DataTable/DataTable'
const List = () => {
  return (
<div className="list">
  <Sidebar/>
  <div className="listContainer">
    <Navbar/>
    <DataTable/>
  </div>
</div>
  )
}

export default List