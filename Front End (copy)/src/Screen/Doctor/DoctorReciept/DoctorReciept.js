import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function DoctorReciept() {
    const history=useHistory();
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
          <div class="navbar-brand col-lg-1 me-0 " aria-current="page" ></div>
        
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            
          </ul>
          
        </div>
      </div>
    </nav>
        <div className="container">
            <br></br><br></br>
            <div className="table-responsive">
                <table className="table text-center">   
                    <tr>
                        <td colSpan={2}><h2>Generate Reciept</h2></td>
                    </tr>
                    <tr>
                        <td><br></br></td>
                    </tr>
                    <tr>
                        <td><h3>Enter Meds</h3></td>
                        <td><textarea className="form-control"></textarea></td>
                    </tr>
                    <tr>
                        <td><br></br></td>
                    </tr>
                    <tr>
                        <td><h3>Any Helth Suggession</h3></td>
                        <td><textarea className="form-control"></textarea></td>
                    </tr>
                    <tr>
                        <td><br></br></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button style={{width:200}} className="btn btn-success">Print</button></td>
                    </tr>
                </table>
            </div>
        </div>
        </>
     );
}

export default DoctorReciept;