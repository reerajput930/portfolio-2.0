import profile from "./images/profilepic.jpg"
import style from "./About.module.css"
import Skills from "./Skills"

export default function About(){
    return(
        <>
        <div  className={style.block}>
            <div id="about" className={style.upperBlock}>

           
            <div className={style.left}>
                <h2 ><span  className={style.colored}>01.</span> About Me</h2>
           <div className={style.para}>
           <p>Hi, I'm Riya! I started my career in <span className={style.hightlight} >frontend development but transitioned to cybersecurity and network security </span> as I found my passion for <span className={style.hightlight} > solving complex problems in the digital space </span>.</p>
           <p>After moving to Canada, I enrolled in a postgraduate diploma in cybersecurity, where I worked on  hands-on labs <span className={style.hightlight} > involving NAT, PAT, GRE tunnels, IPSEC, and routing protocols like OSPF.</span> I’ve earned certifications like <span className={style.hightlight} > ISC2 Certified in Cybersecurity (CC)</span> and <span className={style.hightlight} > CompTIA Network+ </span>, which boosted my understanding of secure network design and troubleshooting.</p>
           <p>I’m now focused on <span className={style.hightlight} > securing networks, analyzing threats, and improving system resilience </span>. My goal is to contribute to protecting organizations by applying my knowledge in <span className={style.hightlight} > advanced networking, security protocols, and system defense strategies. </span></p>
        
           </div>
           

            </div>
            <div className={style.right}>
                <div className={style.outline}>
                <img src={profile}/>
                </div>
            </div>
            </div>
            <div  id="skills--section"  className={style.skills}>
            <h2><span className={style.colored}>02.</span>Skills in which I am proficient</h2>
                <Skills/>
            </div>
        </div>

        </>
    )
}