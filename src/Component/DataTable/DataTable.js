import React from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { userRows ,userColumns} from '../../datatableSource';
import './datatable.css'
const DataTable = () => {
  const actionColumn=[{
    field:'action',
    headerName:'Action',
    width:200,
    renderCell:()=>{
      return(
        <div className="cellAction">
          <div className="viewButtom">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }
  }]
  return (
    <div className='datatable'>
           <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection/>
   
    </div>
  )
}

export default DataTable