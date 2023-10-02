import "./Sidenav.css"
import { TeamOutlined ,HomeOutlined ,ShareAltOutlined,ScheduleOutlined 
    ,FileTextOutlined ,HeartOutlined ,LeftOutlined ,SettingOutlined } from '@ant-design/icons';

function Sidenav()
{
    return(
        <nav>
            <div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className="top-circle"></div>
                </div>
                <div className="nav-icon current"><HomeOutlined style={{fontSize:"24px"}}/></div>
                <div className="nav-icon"><TeamOutlined  style={{fontSize:"24px"}}/></div>
                <div className="nav-icon"><ScheduleOutlined style={{fontSize:"24px"}}/></div>
                <div className="nav-icon"><ShareAltOutlined style={{fontSize:"24px"}}/></div>
                <div className="nav-icon"><FileTextOutlined style={{fontSize:"24px"}}/></div>
                <div className="nav-icon"><HeartOutlined style={{fontSize:"24px"}}/></div>
                <div className="nav-icon"><LeftOutlined style={{fontSize:"24px"}}/></div>
            </div>
            <div>
                <div className="nav-icon">
                    <SettingOutlined style={{fontSize:"24px"}}/>
                </div>
                <div className="nav-icon">
                    <div className="bottom-circle">AS</div>
                </div>
            </div>
        </nav>
    )
}

export default Sidenav

