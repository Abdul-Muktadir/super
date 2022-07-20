import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    let navigte=useNavigate();
    const [auth, setAuth]=useState('');
    useEffect(()=>{
      var auth=localStorage.getItem("email");
      if (auth === null) {
        navigte('/login');
      }
      setAuth(auth);
    },
    [])
    return(
        <div>Welcome to Dashboard Page</div>
    )
}
export default Dashboard;