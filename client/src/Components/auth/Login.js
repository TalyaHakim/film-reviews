import React from 'react';

const Login = () => {
  return (
    <div className='container'>
        <h1>
            Account <span className='text-success'>Login</span>
        </h1>
        <form className='form-container'>
            <div className="form-row">
            <div className="col">
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="col">
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
            </div>
            <button type="button" class="btn btn-success">Login</button>
        </form>
    </div>
  )
}

export default Login