import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import Landing from "./Components/Landing"
import StartGame from "./Components/StartGame"



const App = () => {

   const [displayName,setDisplayName] = useState('NoName');



  const getName = (val) =>{
    console.log(val)
    setDisplayName(val);
  }

  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Landing onStart={getName}/>}/>
          <Route path="/start" element={<StartGame displayName={displayName} />}/>
        </Routes>
        
      </div>
    </Router>
  )

}



export default App
