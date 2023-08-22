import style from "./Contactus.module.css"

export default function Contactus() {
  return (
    <div className="contactdetail" id="contact">
      <h1>Want to talk?</h1>
      <div className="contact">
       
          <h3  className={style.heading} >
            <i className="fas fa-check"></i>Hire me
          </h3>
          <p className={style.para}>If you have a project where you need my help, that's cool!</p>
          <h3 className={style.heading}>
            <i className="fas fa-check"></i>Collaborate
          </h3>
          <p className={style.para}>
            Want to build something together and have fun as well? I am
            listening!
          </p>
          <h3 className={style.heading}>
            <i className="fas fa-check"></i>Just talk
          </h3>
          <p className={style.para}>want to connect and talk regarding Tech and Web3</p>
        </div>
         
      
        <button className={style.btnContact}>
           <a href="mailto:rajputriya930@gmail.com">Mail Me</a> 
          </button>
    </div>
  );
}
