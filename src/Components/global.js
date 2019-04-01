import React from "react";


function Global(props){
    return  <div className="global-company">
                <div>
                     <p className="company-txt">We are a global company with local culture</p>
                </div>
                <div className="znany">
                    {props.globalArr.map(el=><div>
                    <a className="znanyLinks" href={el}>
                    <img className="smallLogo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"/>
                    {el} </a>
                    </div>)}
                </div>
            </div>
}
export default Global