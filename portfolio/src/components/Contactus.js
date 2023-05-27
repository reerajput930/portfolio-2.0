import github from "./icons/github.png"
import insta from "./icons/insta.png"
import linkdin from "./icons/linkdin.png"

export default function Contactus(){
    return(
        <div className="contactdetail" id="contact">
        <h1>Want to talk?</h1>
        <div className="contact">

            <div className="leftpart">
                <h3><i className="fas fa-check"></i>Hire me</h3>
                    <p>If you have a project where you need my help, that's cool!</p>
                    <h3><i className="fas fa-check"></i>Collaborate</h3>
                        <p>Want to build something together and have fun as well? I am listening!</p>
                        <h3><i className="fas fa-check"></i>Just talk</h3>
                            <p>want to connect and talk regarding Tech and Web3</p>
            </div>
            <div className="rightpart">
                <h2> Email id:</h2>
                <p style={{marginBottom:"1.5em", fontFamily:"'Courier New', Courier, monospace"}}>rajputriya930@gamil.com</p>

                <h2>My Active Social handles:</h2>
                <div className="socialhandles">
                <a href="https://github.com/reerajput930" target="_blank"><img src={github}/></a>
                    <a href="https://www.linkedin.com/in/riya-rajput-23400a200/" target="_blank"><img
                            src={linkdin}/></a>
                    <a style={{position:"relative",top:"-10px"}} href="https://www.instagram.com/rajputriya930/" target="_blank"><img src={insta}/></a>
                </div>
            </div>
        </div>
    </div>
    )
}