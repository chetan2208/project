import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SetDoctorSchedule() {
    const history=useHistory()

    const Home=()=>{
        history.push('/DoctorHome');
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
          
        
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            
          </ul>
        </div>
      </div>
    </nav>
    <div className="container" style={{marginTop:40}}>
        <div className="table-responsive text-center">
            <h2>Set Your In And Out Time</h2>
        <table className="table">
            <tr>
                <td><h4>In Time</h4></td>
                <td><h4><input type="datetime-local" className="form-control"></input></h4></td>
            </tr>
            <tr>
                <td><h4>Out Time</h4></td>
                <td><h4><input type="datetime-local" className="form-control"></input></h4></td>
            </tr>
           
            <tr>
                <td><br></br></td>
            </tr>
            <tr>
                <td colSpan={2}><button className="btn btn-success" style={{width:200}}>Submit</button></td>
            </tr>
        </table>
        </div></div>
        </>
    );
}

export default SetDoctorSchedule;