import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function HospitalHome() {

    const history=useHistory();

    const Home=()=>{
        history.push("/");
    }

    const addDoctor=()=>{
        history.push('/AddDoctor');
    }

    const viewDoctor=()=>{
        history.push('/ViewDoctors');
    }

    const viewAppointments=()=>{
        history.push('/ViewAppointments');
    }

    const UpdateHospitalDetails=()=>{
        history.push('/EditHospitalDetails');
    }

    const Logout=()=>{
        sessionStorage.removeItem("userName");
        history.push("/");
    }

    return ( 
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a class="navbar-brand col-lg-1 me-0" href="#">Hospital Name</a>
          <a class="navbar-brand col-lg-2 me-0" style={{textAlign:'center'}} href="#"></a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
                <div class="nav-link active btn" aria-current="page" onClick={Home}>Home</div>
              {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li class="nav-item" style={{marginLeft:20}}>
            <div class="nav-link active btn" aria-current="page" onClick={addDoctor}>Add Doctor</div>
              {/* <a class="nav-link" href="#">Set Schedule</a> */}
            </li>
            <li class="nav-item" style={{marginLeft:20}}>
            <div class="nav-link active btn" aria-current="page" onClick={viewDoctor}>View Doctors</div>
              {/* <a class="nav-link disabled">Update Profile</a> */}
            </li>
            
            <li class="nav-item" style={{marginLeft:20}}>
            <div class="nav-link active btn" aria-current="page" onClick={viewAppointments}>view Appointments</div>
              {/* <a class="nav-link disabled">Update Profile</a> */}
            </li>
            <li class="nav-item" style={{marginLeft:20}}>
            <div class="nav-link active btn" aria-current="page" onClick={UpdateHospitalDetails}>Update Hospital Details</div>
              {/* <a class="nav-link disabled">Update Profile</a> */}
            </li>
           
            <li class="nav-item"></li>
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <button class="btn btn-primary" onClick={Logout}>LogOut</button>
          </div>
        </div>
      </div>
    </nav>
        </>
     );
}

export default HospitalHome;