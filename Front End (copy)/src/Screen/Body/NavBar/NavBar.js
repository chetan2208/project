
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './NavBar.css'
import { useEffect, useState } from 'react';

function NavBar() {

    const history=useHistory();
    const [user,setuser]=useState("");

    useEffect(()=>{
        setuser(sessionStorage.getItem("userName"));
    },[]);

    const Login=()=>{
        if(user==null){
            history.push('/Login');
        }
        else if(user==""){
            history.push('/Login');
        }
       else if(user=="Doctor"){
            history.push('/DoctorHome');
        }
        else if(user=="Hospital"){
          history.push('/HospitalHome');
      }
        else if(user=="User"){
            history.push('/PatientHome');
        }
    }

    return ( 
 
//         <div class="header">
// 	<div class="header-left">
//         <a href="http://www.freetimelearning.com" target="_blank">
//             <img src="http://localhost:3000/Imgs/logo.png" width="231" height="75" />
//         </a>
//     </div>
//     <div class="header-right">
//     	<div class="header-right-top">
//         	<ul>
//             	{/* <li><a href=""><i class="fa fa-facebook"></i>&nbsp;</a></li>
//                 <li><a href=""><i class="fa fa-twitter"></i></a></li>
//                 <li><a href=""><i class="fa fa-linkedin"></i></a></li>
//                 <li><a href=""><i class="fa fa-google"></i></a></li> */}
//             </ul>
//             <a href="#"><input type="text" class="form"style={{display:'inline-block',width:400}}  placeholder="Search Hospitals"/><div className='btn'style={{height:40}}><i class="fa-solid fa-magnifying-glass fa-shake"></i></div></a></div>
        
//             <div class="header-right-mid"><button className='btn' onClick={Login}><i class="fa-solid fa-user"></i> {user}</button></div>
       
//         <div class="header-right-bottom">
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About Us</a></li>
//                 <li><a href="#">Consultants</a></li>
//                 <li><a href="#">Doctors</a></li>
//                 <li><a href="#">Services</a></li>
//                 <li><a href="#">Schedule</a></li>
//                 <li><a href="#">Gallery</a></li>
//                 <li><a href="#">Contact Us</a></li>
//             </ul>
//         </div>
//     </div>
    
// </div>
 <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a class="navbar-brand col-lg-3 me-0" href="#"><img src="http://localhost:3000/Imgs/logo.png" width="200" height="75" /></a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active">Contact Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
          <div class="header-right-mid"><button className='btn' onClick={Login}><i class="fa-solid fa-user"></i> {user}</button></div>
          </div>
        </div>
      </div>
    </nav> 


    

                
     );
}

export default NavBar;