
function RegisterPatient() {
    return ( 
        <>
            <div>
          <meta charSet="utf-8" />
          <title>Formicon-Flat Forms Pack</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="icons/styles.css" />
          <link rel="stylesheet" href="css/bootstrap-custom.css" />
          <link rel="stylesheet" href="css/registration-form.css" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,600" rel="stylesheet" type="text/css" />
          {/* Register Form */}
          <div className="form-wrapper"> {/* Form-wrapper only for positioning */}
            <form action="#non" method="post" className="fcorn-register container">
              <p className="register-info">Note: All fields are required.</p>
              <div className="row">
                <p className="col-md-6"><input type="text" placeholder="First Name" required /></p>
                <p className="col-md-6"><input type="text" placeholder="Last Name" required /></p>
              </div>
              <p><input type="email" placeholder="Email Address" required />
                <span className="extern-type">We'll keep this private.</span>
              </p>
              <p><input type="password" placeholder="Password" required />
                <span className="extern-type">Atleast 8 characters long.</span>
              </p>
              <p><input type="password" placeholder="Verify Password" required /></p>
              <div className="row">
                <p className="col-md-4"><input type="text" placeholder="Date (dd)" required /></p>
                <p className="col-md-4"><input type="text" placeholder="Month (mm)" required /></p>
                <p className="col-md-4"><input type="text" placeholder="Year (yyyy)" required /></p>
                <p className="col-md-12"><input type="text" placeholder="Membership code" /><span className="extern-type">Enter your membership code, if you do not have one, leave it blank.</span></p>
              </div>
              <div className="row">
                <p className="col-md-6 city-wrap">
                  <select>
                    <option value={0} selected disabled>City</option>
                    <option value={1}>San José</option>
                  </select>
                </p>
                <p className="col-md-6 country-wrap">
                  {/* Add more country name */}
                  <select>
                    <option value={0} selected disabled>Country</option>
                    <option value={1}>U.S. Only</option>
                    <option value={2}>Outside U.S.</option>
                  </select>
                </p>
                <div> 
                  <p className="col-xs-12">
                    Upload your personal photo:
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" defaultValue="Upload Image" name="submit" required />
                  </p>
                </div>
                <br />
                <p className="register-toggle">
                  <label htmlFor="register-agree" className="toggle-label" data-on="YES" data-off="NO">
                    <input type="checkbox" id="register-agree" className="toggle-input" />
                    <span className="toggle-handle" />
                  </label>
                  <span className="info">Do you agree to the <a href="#">terms and conditions?</a></span>
                </p>
                <p className="register-submit"><input type="submit" defaultValue="Register Now" /></p>
              </div></form>
           
              
              
              
          </div></div>
        </>
     );
}

export default RegisterPatient;