import profile from "./images/profilepic.jpg"
import style from "./About.module.css"
import Skills from "./Skills"

export default function About(){
    return(
        <>
        <div  className={style.block}>
            <div className={style.upperBlock}>

           
            <div className={style.left}>
                <h2 id="about"><span  className={style.colored}>01.</span> About Me</h2>
           <div className={style.para}>
           <p>Before we dive into my experiences and skills, let's take a  <span className={style.hightlight}>quick peek </span> at something that's often overlooked: <span className={style.hightlight}> failure </span>. Sure, success shines, but it's those missteps that truly shape us. I've always welcomed failure as a guiding companion on this rollercoaster called life.</p>
           <p>During my second year of computer science studies, something super exciting happened – I got a shot at the <span className={style.hightlight}> Google STEP Fellow internship </span>! My heart raced as I landed two <span className={style.hightlight}>interviews </span> with a kind <span className={style.hightlight}> Google employee </span> in India, all set for two consecutive days. Feeling a mix of nerves and excitement, I realized I needed some extra help with data structures and algorithms. I reached out to past fellows on LinkedIn and got lucky with a couple of helpful responses, boosting my confidence. When interview day came, Google threw two tough questions my way, kind of like brain teasers. I managed to solve them, but the super smart optimization part left me stumped. Sadly, about a month later, a <span className={style.hightlight}> rejection letter </span> popped up, a <a target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:6795942604317036544/" className={style.redirectLink}> little reminder </a> I posted on LinkedIn to keep the memory alive.</p>
           <p>on the same year , i applied for  <span className={style.hightlight}> MLH, a student hackathon league by Microsoft </span>. After making it past the first round, I was invited for an <span className={style.hightlight}>interview </span> with <span className={style.hightlight}>Microsoft employee </span>.  <span className={style.hightlight}>Unfortunately </span> , my project wasn't as advanced as others', but this setback became a motivating story in my journey.</p>
        
           </div>
           

            </div>
            <div className={style.right}>
                <div className={style.outline}>
                <img src={profile}/>
                </div>
            </div>
            </div>
            <div  className={style.skills}>
            <h2 id="skills--section" ><span className={style.colored}>02.</span>Skills in which I am proficient</h2>
                <Skills/>
            </div>
        </div>

        </>
    )
}