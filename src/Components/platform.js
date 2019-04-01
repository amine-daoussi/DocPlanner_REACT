import React from"react";

function Plat (props){
return  <section className="big">
            <div className="world">
                    <h3 className="h3-txt">The world's 
                            biggest healthcare platform</h3>
                    <p className="lit-txt">We work from 6 offices all over the world, bringing Docplanner <br/>Group to life in almost 20 countries.</p>
                    <div>
                        <img className="hid" src="https://www.docplanner.com/img/logo.png"/>
                    </div>
            </div>
            <div className={props.sty}>         
            {props.platformArr.map(el=><div className="top">
            <img className="pngg" scr={el.scr} srcset={el.set}/>
            <p className="all-txt">{el.firstText}</p> 
            <p className="sub-all-txt">{el.secondText}</p>
            </div>)}
            </div> 
</section>
}
export default Plat;



