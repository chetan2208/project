import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ViewAppointments() {
    const history=useHistory();

    const Home=()=>{
        history.push("/HospitalHome");
    }

    return ( 
        <>
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
      <th scope="col">sr no</th>
      <th scope="col">Patient name</th>
      <th scope="col">Gender</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      
      <td>Otto</td>
      <td>male</td>
      <td>20-10-23</td>
      <td>10:15 am</td>
      <td>active</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      
      <td>Thornton</td>
      <td>Female</td>
      <td>20-10-23</td>
      <td>11:15 am</td>
      <td>inactive</td>
    </tr>
    <tr>
      <th scope="row">3</th>
     
      <td>the Bird</td>
      <td>Female</td>
      <td>20-10-23</td>
      <td>12:15 am</td>
      <td>active</td>
    </tr>
  </tbody>
</table>
    </div>
        </>
     );
}

export default ViewAppointments;