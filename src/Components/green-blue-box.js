import React from"react";
const Box =(props)=>
<section className="box" >     
{ props.tabServices.map( el => <div className={el.st}>         
         <span className="small-txt">{el.title}</span>
         <p className="big-txt">{el.desc}</p>
            <div>
                <div>{el.country==false?null:
                     <select className="country">
                     <option>CHOOSE COUNTRY</option>
                     <option value="http://www.doctoralia.com.au">Argentina</option>
                     <option value="http://www.doctoralia.com.au">Australia</option>
                     <option value="http://www.doctoralia.com.au">Brazil</option>
                     <option value="http://www.doctoralia.com.au">Chile</option>
                     <option value="http://www.doctoralia.com.au">Colombia</option>
                     <option value="http://www.doctoralia.com.au">Czech</option>
                     <option value="http://www.doctoralia.com.au">France</option>
                     <option value="http://www.doctoralia.com.au">Italy</option>
                     <option value="http://www.doctoralia.com.au">Mexico</option>
                     <option value="http://www.doctoralia.com.au">Peru</option>
                     <option value="http://www.doctoralia.com.au">Poland</option>
                     <option value="http://www.doctoralia.com.au">Portugal</option>
                     <option value="http://www.doctoralia.com.au">Turkey</option>
                     <option value="http://www.doctoralia.com.au">UK</option> 
                 </select>}
                </div>
                <div>
                    <img className={el.stPhoto} src={el.src}/>
                </div>
            </div>
        
            
                              </div>) }
        </section>
     
   

export default Box;