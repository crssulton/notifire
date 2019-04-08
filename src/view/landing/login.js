import React, { Component } from 'react';

class login extends Component {
  render() {
    return (
      <div className="container" style={{paddingTop: '30px'}}>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div class="card h-10">
              <h4 class="card-header">Login</h4>
              <div class="card-body">
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Username</label>
                      <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your username."/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Password</label>
                      <input type="password" className="form-control" id="password" required data-validation-required-message="Please enter your password."/>
                    </div>
                  </div>
                  <div id="success"></div>
                </form>
              </div>
              <div class="card-footer">
                <button type="submit" className="btn btn-primary" id="login">Login</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div class="card h-100">
              <h4 class="card-header">Registrasi</h4>
              <div class="card-body">
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Nama</label>
                      <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name."/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Cabang</label>
                      <input type="text" className="form-control" id="cabang" required data-validation-required-message="Please enter your part."/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Alamat</label>
                      <textarea className="form-control" id="alamat" required data-validation-required-message="Please enter your address" maxLength="999" style={{resize:'none'}}></textarea>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Username</label>
                      <input type="text" className="form-control" id="username" required data-validation-required-message="Please enter your username."/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Password</label>
                      <input type="password" className="form-control" id="password" required data-validation-required-message="Please enter your password."/>
                    </div>
                  </div>
                  <div id="success"></div>
                  
                </form>
              </div>
              <div class="card-footer">
                <button type="submit" className="btn btn-primary" id="login">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;