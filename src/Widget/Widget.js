import React from 'react'
import "./widget.css"
import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
const Widget = ({type}) => {
 let data;

 const amout=1000;
 const diff=20
switch(type){
    case 'user':
        data={
            title:'USERS',
            isMoney:false,
            link:'See all users',
            icon:<PersonOutlined className='symbol'
            style={{
                backgroundColor:"rgba(218,165,32,0.2)",
                color:'crimson',
                }}/>
            };
        break;
        case 'order':
            data={
                title:'ORDER',
                isMoney:false,
                link:'View all order',
                icon:<ShoppingCartOutlined className='symbol' 
                style={{
                    backgroundColor:"rgba(218,165,32,0.2)",
                    color:'goldenrod',
                    }}/>
            };
            break;
            case 'earnings':
                data={
                    title:'EARNINGS',
                    isMoney:true,
                    link:'View net earnings',
                    icon:<MonetizationOnOutlined className='symbol'
                    style={{
                        backgroundColor:"rgba(218,165,32,0.2)",
                        color:'green',
                        }}
                    />,
                };
                break;
                case 'blance':
                    data={
                        title:'BLANCE',
                        isMoney:true,
                        link:'see details',
                        icon:<AccountBalanceWalletOutlined className='symbol'
                        style={{
                            backgroundColor:"rgba(218,165,32,0.2)",
                            color:'purple',
                            }}
                        />,
                    };
                    break;
                     default:
            break;
}
return (
    <div className='widget'>
        <div className='left'>
        <span className='head'>{data.title}</span>
        <span className='number'>{data.isMoney && '$'}{amout}</span>
        <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage negative'>
                <KeyboardArrowUp/>
                {diff}
                </div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget