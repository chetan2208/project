import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditHospitalDetails() {
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
    <div className="container" style={{width:900}}>
                <center   >   
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer01">Hospital name</label>
              <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" defaultValue="Mark" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServerUsername">Address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                </div>
                <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                <div className="invalid-feedback">
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03">City</label>
              <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
              <div className="invalid-feedback">
             </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer04">State</label>
              <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
              <div className="invalid-feedback">
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer05">Zip</label>
              <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
              <div className="invalid-feedback">
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input is-invalid" type="checkbox" defaultValue id="invalidCheck3" required />
              <label className="form-check-label" htmlFor="invalidCheck3">
              </label>
              <div className="invalid-feedback">
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>

        </center>
        </div>
        </> );
}

export default EditHospitalDetails;