// create your App component here
import React,{useState,useEffect} from "react"
function App(){
    const [firstloading,setfirstloading] = useState(false)
     const [myImages,setmyImages] = useState([])

useEffect(
    ()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data)=>{
    setmyImages(data.message)
    setfirstloading(true)
        }
    )
    },[]);
    if(!firstloading)return <p>Loading...</p>
return(
    <div>
       <h1>Hello Guys</h1>
     <img src={myImages} alt="A Random Dog"/>
     
    </div>

)
}
export default App;