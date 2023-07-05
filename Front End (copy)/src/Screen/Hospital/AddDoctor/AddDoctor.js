
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './AddDoctor.css'

function AddDoctor() {

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
          <div class="navbar-brand col-lg-1 me-0 " aria-current="page" ></div>
        
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            
          </ul>
          
        </div>
      </div>
    </nav>
            <div>
          <center>
          <h4 className="font-weight-bold py-3 mb-4">
            ADD DOCTOR
             </h4>
          </center>


          <div className="card overflow-hidden">
            <div className="row no-gutters row-bordered row-border-light">
              <div className="col-md-3 pt-0">
                <div className="list-group list-group-flush account-settings-links">
                  <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
                  <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
                  <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
                  <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social links</a>
                  <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>
                  <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">Notifications</a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="account-general">
                    <div className="card-body media align-items-center">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="d-block ui-w-80" />
                      <div className="media-body ml-4">
                        <label className="btn btn-outline-primary">
                          Upload new photo
                        </label> &nbsp;
                        
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control mb-1" placeholder="Enter the username"/>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"  placeholder="Enter The Name"/>
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input type="text" className="form-control mb-1" defaultValue="abc@mail.com" />
                       
                      </div>
                      <div className="form-group">
                        <label className="form-label">DepartMent</label>
                        <input type="text" className="form-control" placeholder="Enter the Department" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="account-change-password">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Current password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Repeat new password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                  </div>
                                 </div>
              </div>
            </div>
          </div>
          <div className="text-right mt-3">
            <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
            <button type="button" className="btn btn-default">Cancel</button>
          </div>
        </div>
        </>
     );
}

export default AddDoctor;