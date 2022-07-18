import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login=()=>{
    let history=useNavigate();
    const [user, setUser]=useState({
        email:"",
         password:""
        });
    const handleChange=(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendUser={
            email:user.email,
            password:user.password
        }

        // console.log(sendUser);
        axios.post('http://localhost/reactapp/super/reactphp/insert.php', sendUser)
        .then((result)=>{
            if (result.user.Status === 'Invalid') {
                alert("Invalid User")
            }
            else{
                history('/register');
            }
        })
    }



    return(
        <div className='main-box'>
            <form onSubmit={submitForm}>
        <div className='row'>
            <div className='col-md-12 text-center' ><h1>Login</h1></div>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-6 text-center' >Email</div>
            <div className='col-md-6' >
                <input type='text' name='email' className='form-control' 
                onChange={handleChange} value={user.email} />
            </div>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-6 text-center' >Password</div>
            <div className='col-md-6' >
                <input type='text' name='password' className='form-control' 
                onChange={handleChange} value={user.password} />
            </div>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <input type='submit' name='submit' value='Login' className='btn btn-primary' />
            </div>
        </div>
        </form>
        </div>
    )
}
export default Login;