import React, { Component } from 'react';
import Nav from "./Components/nav-menu.js";
import PatientsDoctors from "./Components/patients-doctors.js";
import Box from "./Components/green-blue-box.js";
import Global from "./Components/global.js";
import Plat from "./Components/platform.js";
import Album from "./Components/album.js";

  const source = "https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
  const navLink = [ {name: "About us",arr : []}, {name : "Career",arr : []}, {name : "Department",arr : ["Marketing & PR" ,"Customer Success and Sales","IT, Product, Design & UX",]}]
  const services =[{st:"green-box",stPhoto:"photo-doc",title:"For patients",desc:"Find a doctor, book a visit and solve any health-related doubt",src:"https://www.docplanner.com/img/screen-marketplace@2x.png",country:true},{st:"blue-box",stPhoto:"photo-doc2",title:"For doctors",desc:"Save time managing visits and cut no-shows by half",src:"https://www.docplanner.com/img/screen-saas@2x.png",country:false}];
  const znany=["ZnanyLekarz","Doctoralia","MioDottore","DoktorTakvimi","ZnamyLekar"]
  const platf=[{scr:"https://www.docplanner.com/img/flag.png",set:"https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",firstText:"Leader in 10 countries",secondText:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"}
,{scr:"https://www.docplanner.com/img/patients.png",set:"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",firstText:"30 million unique patients",secondText:"visit us every month"},
{scr:"https://www.docplanner.com/img/visits.png",set:"https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",firstText:"1 million appointments",secondText:"booked last month"},
{scr:"https://www.docplanner.com/img/doctors.png",set:"https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x",firstText:"2 million active doctors",secondText:"trust in our solutions"}]
 const Improve =() =>
 <div class="mid">
                <p class="all-txt">Improve the lives of millions. <br/>Change yours forever</p>
                <p class="sub-all-txt">More than 500 team mates share our same vision, goals and passion. <br/>With offices in Warsaw, Barcelona, Istanbul, Rome,
                Czech Republic, <br/>Mexico City, Colombia and Curitiba, our search for great talent never stops.</p>
  </div>
  const alb=[{scr:"https://www.docplanner.com/images/warsaw.png",set:"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",country:"Warsow"},
    {scr:"https://www.docplanner.com/images/barcelona.png",set:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",country:"Barcelona"},
  {scr:"https://www.docplanner.com/images/istanbul.png",set:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",country:"Istanbul"},
{scr:"https://www.docplanner.com/images/rome.png",set:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",country:"Rome"},
{scr:"https://www.docplanner.com/images/mexico-city.png",set:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",country:"Mexico City"},
{scr:"https://www.docplanner.com/images/curitiba.png",set:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",country:"Curitiba"}]
const Foot =()=><div className="foot">
  <p>We are leaders in 10 countries: <a href="#">Poland</a>, <a href="#">Turkey</a>, <a href="#">Spain</a>, <a href="#">Italy</a>, <a href="#">Czech Republic</a>, <a href="#">Mexico</a>, <a href="#">Colombia</a>, <a href="#">Brazil</a>, <a href="#">Argentina</a> and <a href="#">Chile</a></p><br/>
            <p>This site uses cookies to deliver services in accordance with this Privacy Policy.
                 You can specify the conditions for storing or accessing cookies on your browser.</p>
            <p>www.docplanner.com © 2019</p>
</div>



class App extends Component {
  render() {
    return (
      <section className="App">
        <header>          
          <Nav img = {source} navArr = {navLink} />
        </header>
        <main> 
          <PatientsDoctors/>          
          <Box tabServices={services}/>  
          <Global globalArr={znany}/>
          <Plat sty="white" platformArr={platf}/>
          <Improve/>
          <Album albumArr={alb}/>          
        </main>
        <Foot/>
      </section>
    );
  }
}

export default App;
