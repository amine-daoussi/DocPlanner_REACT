import React from"react";


function Album (props){
    return <section className="album">
    {props.albumArr.map(el =><div className="prot">
    <a href="#">
        <img className="pict" scr={el.scr} srcset={el.set}/>
    </a>
    <div class="bot">
        <p class="coun">{el.country}</p>
        <a class="but" href="#">SEE OPENINGS</a>
    </div>
                            </div>)}
    </section>


}
export default Album;