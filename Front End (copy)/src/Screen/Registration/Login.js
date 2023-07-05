import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [error,setError]=useState("");
    const history = useHistory();

    const set1=(args)=>{
      setEmail(args.target.value);
    }
    const set2=(args)=>{
     
      setPassword(args.target.value);
    }

//Temp
const signIn=()=>{
    if(Email=="user@gmail.com"&&Password=="abc123"){
        sessionStorage.setItem("isLoggedIn","true");
        window.sessionStorage.setItem("userId",1);
        window.sessionStorage.setItem("userName","User");
        history.push('/');
    }
    if(Email=="hospital@gmail.com"&&Password=="abc123"){
      sessionStorage.setItem("isLoggedIn","true");
      window.sessionStorage.setItem("userId",1);
      window.sessionStorage.setItem("userName","Hospital");
      history.push('/HospitalHome');
  }
    if(Email=="doctor@gmail.com"&&Password=="abc123"){
      sessionStorage.setItem("isLoggedIn","true");
      window.sessionStorage.setItem("userId",1);
      window.sessionStorage.setItem("userName","Doctor");
      history.push('/DoctorHome');
  }
    else{
      setError("Enter valide Details First");
      window.setTimeout(()=>{
        setError("");
      },5000);
      }
    }



//Permenent
    // const signIn=()=>{
    //     if(Email!=""&&Password!=""){
    //       const helper=new XMLHttpRequest();
    //       helper.onreadystatechange=()=>{
    //         if(helper.status==200&&helper.readyState==4){
    //           let data=JSON.parse(helper.responseText);
    //           //console.log(data);
    //           debugger;
    //           if(Object.keys(data).length === 0){
                
    //             window.sessionStorage.setItem("isLoggedIn","false");
               
                
    //             setError("Invalide User Name and Password");
    //             window.setTimeout(()=>{
    //               setError("");
    //             },5000);

    //           }
    //           else{
    //             sessionStorage.setItem("isLoggedIn","true");
    //             window.sessionStorage.setItem("userId",data[0].id);
    //             window.sessionStorage.setItem("userName",data[0].first_name);
    //             history.push('/');

    //             }
    //         }
    //       }
          
    //       helper.open('GET','http://localhost:1234/login/'+Email+"/"+Password);
    //       helper.setRequestHeader("Content-Type","application/json");
    //       // var data=JSON.stringify({uEmail:Email,uPassword:Password});
    //       helper.send();
    //     }
    //     else{
    //       setError("Enter Details First");
    //       window.setTimeout(()=>{
    //         setError("");
    //       },5000);
    //     }
    // }

    const register=()=>{
      debugger;
      history.push('/register')
    }

    return ( 
        <>
        <center>
            <br/><br/><br/><br/><br/><br/><br/>
        <div style={{width:400}}>
                <main class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" name="Email" placeholder="name@example.com" value={Email} onChange={set1}/>
      <label for="floatingInput">Email address</label>
    </div>
    <br></br>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" name="Password" placeholder="Password" value={Password} onChange={set2}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" onClick={signIn}>Sign in</button>
    <br></br>
    <br></br>
    <div className="table-responsive">
      <table className="table">
        <tr>
          <td>
            <h4>Don't have account? </h4>
          </td>
          <td>
            <button class="btn btn-primary w-100 py-2" onClick={register}>Register</button>
          </td>
        </tr>
      </table>
    </div>
    
    <br/><br/>
    <div style={{color:'red'}}>{error}</div>
</main>
</div>
</center>
        </>
     );

}
export default Login;