import React from "react"

function Nav (props){
    return <div className="header-menu">
        <img className="header-logo" src={props.img}/>
        <div className="main-menu">
        {props.navArr.map( el =><div>
            <a href="#">{el.name} </a> 
       {<div className="sub-menu dropdown-menu">  {el.arr != [] ?  el.arr.map( y=><a href="#">{y}</a>) : null }</div> }
        </div>       
                          )}
     
            </div>
        </div>




}

export default Nav;