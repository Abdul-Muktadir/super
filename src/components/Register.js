import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register=(props)=>{
    let history = useNavigate();
    const [data, setData]=useState({
        full_name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // const cors=require('cors');
    // Register.use(cors());

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData={
            full_name:data.full_name,
            email:data.email,
            password:data.password
        }
        // console.log(sendData);
        axios.post('http://localhost/reactapp/super/reactphp/insert.php', sendData)
        .then((result)=>{
            if(result.data.Status === 'Invalid'){
                alert('Invalid User');
            }
            else{
                history(`/login`);
            }
        })
    }
    return(
        <div className='main-box'>
            <form onSubmit={submitForm}>
        <div className='row'>
            <div className='col-md-12 text-center' ><h1>Register</h1></div>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-6 text-center' >Full Name</div>
            <div className='col-md-6' >
                <input type='text' name='full_name' className='form-control' 
                onChange={handleChange} value={data.full_name} /> 
            </div>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-6 text-center' >Email</div>
            <div className='col-md-6' >
                <input type='text' name='email' className='form-control' 
                onChange={handleChange} value={data.email}/>
            </div>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-6 text-center' >Password</div>
            <div className='col-md-6' >
                <input type='password' name='password' className='form-control' 
                onChange={handleChange} value={data.password}/>
            </div>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <input type='submit' name='submit' value='Register' className='btn btn-success' />
            </div>
        </div>
        </form>
        </div>
    )
}

export default Register;