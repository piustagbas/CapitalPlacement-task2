import { useState ,useEffect ,useRef } from "react";
import "./Topitems.css"
import { UpOutlined ,TagOutlined,UserDeleteOutlined ,UserAddOutlined ,UserSwitchOutlined , MailOutlined} from '@ant-design/icons';

const optAr: { options: string; total: number; }[] = [{options: "Applied", total: 1745},
{options:"Shortlisted",total:453},{options:"Technical Interview",total:123},{options:"Opportunity Browsing",total:243},
{options:"Video Interview I",total:25},{options:"Video Interview II",total:25},
{options:"Video Interview III",total:25},
{options:"Offer",total:25},{options:"Withdrawn",total:25}];

function Topitems()
{
    const[togOpt,setTogopt]=useState<boolean>(false)
    const[currOpt,setCurropt]=useState<string>("Opportunity Browsing")
   const closeRef = useRef<null | HTMLDivElement>(null);

    function clickClose(e:any)
    {
        if(togOpt && closeRef.current && !closeRef.current.contains(e.target))
        {
            setTogopt(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",clickClose)
        return()=>document.removeEventListener("mousedown",clickClose)
    },[togOpt])
    return(
        <section id="topSec" >
            <div>
                <h2 style={{color:"#1D4ED8"}}>London Internship Program</h2>
                <p>London</p>
            </div>
            <div ref={closeRef} style={{position:"relative"}}>
                <div className={`select-items ${togOpt ? "cut-border":""}`} onClick={()=>(setTogopt(!togOpt))}>
                    <h4>{currOpt}</h4>
                    <UpOutlined className={`${togOpt ? "rotate180":""}`}/>
                </div>
                {togOpt && <div className="options-items">
                    {optAr.map((ele)=><div onClick={()=>{setCurropt(ele.options),setTogopt(false)}}>
                        <p>{ele.options}</p>
                        <p className="num-option">{ele.total}</p>
                    </div>)}  
                </div>}
            </div>
            <div style={{display:"flex"}}>
                <div className="top-icon">
                    <TagOutlined style={{fontSize:"24px"}}/>
                </div>
                <div className="top-icon">
                    <UserDeleteOutlined style={{fontSize:"24px" ,color:"#A80000"}}/>
                </div>
                <div className="top-icon">
                    <UserAddOutlined style={{fontSize:"24px"}}/>
                </div>
                <div className="top-icon">
                    <UserSwitchOutlined style={{fontSize:"24px"}}/>
                </div>
                <div className="top-icon">
                    <MailOutlined style={{fontSize:"24px"}}/>
                </div>
                <button className="edit-drop">
                    Move To Video Interview I 
                </button>
                <button className="topArrow">
                    <UpOutlined />
                </button>
            </div>
        </section>
    )
}
export default Topitems
