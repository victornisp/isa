import React from 'react';

class NavLoginForm extends React.Component{
  render(){
    return(
      <nav className="nav navbar">
        <form>
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="RUT"></input>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="PSWD"></input>
          </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </nav>
    )
  }
}

export default NavLoginForm;
