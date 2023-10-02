import "./Allusers.css"
import allPeople from "../data";
import { Checkbox } from 'antd';
import { PlayCircleOutlined,BookOutlined} from '@ant-design/icons';
interface props
{
    getnames:any
}
function Allusers({getnames}:props)
{
    const filterName = allPeople.filter((name) =>
    name.full_Name.toLowerCase().includes(getnames.toLowerCase())
  );
    return(
        <section id="allusers">
            <div className="div1-allusers">
            <div style={{display:"flex",alignItems:"center"}}>
                <Checkbox style={{marginRight:"32px"}}></Checkbox>
                <h4 style={{color:"#1D4ED8",marginTop:"3px"}}>247 Candidates</h4>
            </div>
            <ul className="userUl">
                <li><h4 style={{color:"#1D4ED8"}}>Qualified</h4></li>
                <li><h4>Task <span>25</span></h4></li>
                <li><h4>Disqualified <span>78</span></h4></li>
            </ul>
            </div>
            {filterName.map((ele)=><div className="div2-allusers" key={ele.id}>
                <Checkbox style={{marginRight:"32px"}}></Checkbox>
                <div className="alluser-circle">
                    AS
                </div>
                <div style={{width:"85%"}}>
                    <div style={{display:"flex" ,justifyContent:"space-between"}}>
                        <h3>{ele.full_Name}</h3>
                        {ele.vid && <div style={{display:"flex"}}>
                            <p className="play-btn"><PlayCircleOutlined/> 4</p>
                            <p className="book"><BookOutlined /> 5 Programs</p>
                        </div>}
                    </div> 
                    <p style={{marginTop:"8px",marginBottom:"8px"}}>{ele.city}, {ele.country}</p>
                    <p>Bachelor - {ele.college} (2023 - 2023)</p>
                    <div style={{display:"flex",marginTop:"8px"}}>
                        <p style={{color:"#1D4ED8"}}>#top_candidate</p>
                        <p style={{color:"#1D4ED8",marginLeft:"8px"}}>#top_candidate</p>
                    </div>
                    <div className="div-keywords">
                        <p className="keywords">New York</p>
                        <p className="keywords" style={{marginLeft:"8px",marginRight:"8px"}}>Marketing</p>
                        <p className="keywords">London</p>
                    </div>
                </div>
            </div>)}
        </section>
    )
}

export default Allusers