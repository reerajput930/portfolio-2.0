import github from "./icons/github.png"
import linkdin from "./icons/linkdin.png"
import insta from "./icons/insta.png"


export default function Icons(){
    return(
       <>
      <a href="https://github.com/reerajput930" target="_blank"> <img style={{    height: "4em",margin:"2px",cursor:"pointer"}} src={github}/></a>
      
      <a href="https://www.linkedin.com/in/riya-rajput-23400a200/" target="_blank">
       <img  style={{    height: "4em",margin:"2px",marginLeft:"4px",marginRight:"4px", cursor:"pointer"}}  src={linkdin}/></a>

       <a style={{position:"relative",top:"-7px"}} href="https://www.instagram.com/rajputriya930/" target="_blank">
       <img  style={{    height: "3em",margin:"2px",cursor:"pointer",position:"relative",}}  src={insta}/></a>
       
       </>
    )
}