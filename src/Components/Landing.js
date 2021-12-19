import LandingTop from "./LandingTop"
import { useState } from "react"

import {useNavigate} from 'react-router-dom';


const Landing = (props) => {
    
    const [name,setName] = useState('')

    let navigate = useNavigate();

    const start = () =>{
        props.onStart(name)
       
        
        navigate("/start",{replace:true})
    }
    
    return (
            <div className="container flex-center">
                <LandingTop/>
                <div className="body flex-center"> 
                    <h3>Select A Display Name:</h3>
                    <input type="text" className="inputName" placeholder="BakedPotato" 
                    value={name} onChange={(e)=>setName(e.target.value)}/>
                    <div>
                        <p> Display name : <span className="displayName"> {name} </span> </p>
                    </div>  
                    <button className="btnStart">
                        <span className="front" onClick={start}>Start</span>    
                    </button>  

                </div>
            </div>
        
    )
}



export default Landing
