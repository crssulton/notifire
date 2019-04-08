import React, { Component } from 'react';
import swal from 'sweetalert';
import Spinner from 'react-spinner-material';

class login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username    : '',
      password    : '',
      nama        : '',
      cabang      : '',
      alamat      : '',
      loading     : true
    }
    this.setNama = this.setNama.bind(this)
    this.setCabang = this.setCabang.bind(this)
    this.setAlamat = this.setAlamat.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
    this.submitRegister = this.submitRegister.bind(this)
    setTimeout(() => {
      this.setState({
         loading: false,
      })
    }, 1000)
  }

  setNama(e){ this.setState({ nama: e.target.value }) }
  setCabang(e){ this.setState({ cabang: e.target.value }) }
  setAlamat(e){ this.setState({ alamat: e.target.value }) }
  setUsername(e){ this.setState({ username: e.target.value }) }
  setPassword(e){ this.setState({ password: e.target.value }) }

  submitLogin(){
    if (this.state.username === '' || this.state.password === ''){
      swal('Terdapat form kosong.',  { icon:'error' })
    } else {
      window.location.href = '/';
    }
  }

  submitRegister(){
    if (this.state.nama === '' || this.state.cabang === '' || this.state.alamat === '' || 
      this.state.username === '' || this.state.password === ''){
      swal('Terdapat form kosong.',  { icon:'error' })
    } else {
      window.location.href = '/';
    }
  }

  render() {
    let data;
    if (this.state.loading) {
      data = 
      <div className="container" style={{paddingLeft: '50%', paddingRight: '50%', paddingTop: '250px', paddingBottom: '250px'}}>
        <Spinner size={50} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
    } else {
      data = 
      <div className="container" style={{paddingTop: '40px'}}>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-10">
              <h4 className="card-header">Login</h4>
              <form>
                <div className="card-body">
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Username</label>
                      <input type="text" className="form-control" onChange={this.setUsername}/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Password</label>
                      <input type="password" className="form-control" onChange={this.setPassword}/>
                    </div>
                  </div>
                </div>
              </form>
              <div className="card-footer text-right">
                <button onClick={this.submitLogin} className="btn btn-primary">Login</button> 
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <h4 className="card-header">Registrasi</h4>
              <form>
                <div className="card-body">
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Nama</label>
                      <input type="text" className="form-control" onChange={this.setNama}/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Cabang</label>
                      <input type="text" className="form-control" onChange={this.setCabang}/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Alamat</label>
                      <textarea className="form-control" onChange={this.setAlamat} maxLength="999" style={{resize:'none'}}></textarea>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Username</label>
                      <input type="text" className="form-control" onChange={this.setUsername}/>
                      <p className="help-block"></p>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>Password</label>
                      <input type="password" className="form-control" onChange={this.setPassword}/>
                    </div>
                  </div>
                </div>
              </form>
              <div className="card-footer text-right">
                <button className="btn btn-primary" onClick={this.submitRegister}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default login;