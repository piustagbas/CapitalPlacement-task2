import "./Search.css"
import { FileTextOutlined ,UpOutlined } from '@ant-design/icons';
interface props {
  getnames: any,
  setGetnames:any
}
function Search({getnames,setGetnames}:props)
{
    return(
        <section id="searchfilter">
            <div>
                <input className="inp-Search" type="text" 
                placeholder="Serach by name, edu, exp or #tag" value={getnames} 
                onChange={(e:any)=>setGetnames(e.target.value)} autoFocus/>
            </div>
            <div style={{marginTop:"24px"}}>
                <div className="filter-item">
                    <p style={{fontWeight:"600"}}>Filters</p>
                    <p>0 Selected</p>
                </div>
                <div className="filter-item">
                    <p><FileTextOutlined/> Personal Information</p>
                    <UpOutlined style={{transform:"rotate(180deg)",color:"#1D4ED8"}}/>
                </div>
                <div className="filter-item">
                    <p><FileTextOutlined/> Education</p>
                    <UpOutlined style={{transform:"rotate(180deg)",color:"#1D4ED8"}}/>
                </div>
                <div className="filter-item">
                    <p><FileTextOutlined/> Work Experience</p>
                    <UpOutlined style={{transform:"rotate(180deg)",color:"#1D4ED8"}}/>
                </div>
                <div className="filter-item">
                    <p><FileTextOutlined/> Activity Filter</p>
                    <UpOutlined style={{transform:"rotate(180deg)",color:"#1D4ED8"}}/>
                </div>
                <div className="filter-item">
                    <p><FileTextOutlined/> Advanced Filter</p>
                </div>

            </div>
        </section>
    )
}
export default Search