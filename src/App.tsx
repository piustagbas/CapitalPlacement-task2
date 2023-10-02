import './App.css'
import Allusers from './Components/Allusers/Allusers'
import Search from './Components/Search/Search'
import Sidenav from './Components/Sidenav/Sidenav'
import Topitems from './Components/Topitems/Topitems'
import {useState} from "react"

function App() {
const [getnames, setGetnames] = useState<any>("")
  return (
    <>
    <Sidenav></Sidenav>
    <Topitems></Topitems>
    <div className='userInfo'>
    <Search getnames={getnames} setGetnames={setGetnames}></Search>
    <Allusers getnames={getnames}></Allusers>
    </div>
    </>
  )
}

export default App
