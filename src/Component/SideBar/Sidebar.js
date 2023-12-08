import React  from 'react'
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='top'>
        <span className='logo'>Jothika Admin</span>
    </div>
    <div className='center'>
        <hr/>
        <ul>
            <p className='name'>MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>DashBoard</span>
            </li>
            <p className='name'>LIST</p>

            <li>
                <PersonOutlineOutlinedIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
                <ProductionQuantityLimitsRoundedIcon className='icon'/>
                <span>Product</span>
            </li>
            <li>
                <LocalShippingOutlinedIcon className='icon'/>
                <span>Delivery</span>
            </li>
            <p className='name'>USEFULL</p>

            <li>
                <QueryStatsIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsActiveOutlinedIcon className='icon'/>
                <span>Notification</span>
            </li>
            <p className='name'>SERIVICE</p>

            <li>
                <SettingsSystemDaydreamIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyOutlinedIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsSuggestOutlinedIcon className='icon'/>
                <span>Settings</span>
            </li>
            <p className='name'>USER</p>

            <li>
                <AccountCircleOutlinedIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutOutlinedIcon className='icon'/>
                <span>LogOut</span>
            </li>
        </ul>
    </div>
   </div>
  )
}

export default Sidebar