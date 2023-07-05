import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ViewDoctors() {
    const history=useHistory();

    const Home=()=>{
        history.push("/HospitalHome");
    }

    return ( <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          {/* <a class="navbar-brand col-lg-3 me-0" href="#">Home</a> */}
         
          <div class="navbar-brand col-lg-1 me-0 btn" aria-current="page" onClick={Home}>Home</div>
          <div class="navbar-brand col-lg-1 me-0" aria-current="page"></div>
          <div class="navbar-brand col-lg-1 me-0 " aria-current="page"></div>
        
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            
          </ul>
         
        </div>
      </div>
    </nav>
    <div className="container" style={{marginTop:20}}>
    <table class="table text-center">
  <thead>
    <tr>
    <th scope="col">Index</th>
      <th scope="col">Doctor Name</th>
      <th scope="col"> Experiance</th>
      <th scope="col">Speciality</th>
      <th scope="col">Charges</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      
      <td>Otto</td>
      <td>5 yrs</td>
      <td>Dermatology</td>
      <td>500 rs</td>
      <td class="nav-item" style={{marginLeft:20}}> 
            <div class="nav-link active btn" aria-current="page">Remove Doctor</div>
            </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      
      <td>Thornton</td>
      <td>10 yrs</td>
      <td>Pediatrics</td>
      <td>100 rs</td>
      <td class="nav-item" style={{marginLeft:20}}> 
            <div class="nav-link active btn" aria-current="page">Remove Doctor</div>
            </td>
    </tr>
    <tr>
      <th scope="row">3</th>
     
      <td>the Bird</td>
      <td>8 yrs</td>
      <td>Ophthalmology</td>
      <td>400 rs</td>
      <td class="nav-item" style={{marginLeft:20}}> 
            <div class="nav-link active btn" aria-current="page">Remove Doctor</div>
            </td>
    </tr>
  </tbody>
</table>
    </div>
    </> );
}

export default ViewDoctors;