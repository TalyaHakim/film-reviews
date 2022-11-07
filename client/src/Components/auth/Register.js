import React, {useContext, useState} from 'react';
import AuthContext from '../../Context/auth/authContext';

const Register = () => {

  const authContext = useContext(AuthContext);

  const {register} = authContext;

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const [showAlert, setShowAlert] = useState(false);

    const onChange = e => setUser({...user, [e.target.name] : e.target.value});

    const { name, email, password, password2 } = user;

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
          setShowAlert(!showAlert)
        }
        else{
          register({
            name, 
            email,
            password
          })
        }
    }

  return (
    <div className='container'>
      {showAlert && <p className='alert'>Password do not match</p>}
        <h1>
            Account <span className='text-success'>Register</span>
        </h1>
        <form className='form-container' onSubmit={onSubmit}>
            <div className="form-row">
            <div className="col">
                <label>Name</label>
                <input 
                type="text" 
                value={name}
                name="name"
                className="form-control" 
                required
                onChange={onChange}/>   
                <br/>
                <label>Password</label>
                <input 
                type="password" 
                value={password}
                name="password"
                className="form-control" 
                minLength="6"
                maxLength= "10"
                onChange={onChange}/>
            </div>
            <div className="col">
            <label>Email</label>
                <input 
                type="email" 
                value={email}
                name="email"
                className="form-control"
                required
                onChange={onChange}/>
                <br/>
                <label>Confirm password</label>
                <input 
                type="password"
                value={password2} 
                name="password2" 
                className="form-control"
                minLength="6"
                maxLength= "10"
                onChange={onChange}/>
            </div>
            </div>
            <input type='submit' value='Register' className='btn btn-success'/>
        </form>
    </div>
  )
}

export default Register