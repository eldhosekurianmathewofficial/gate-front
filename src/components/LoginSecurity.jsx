import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginSecurity = () => {
	const navigate=useNavigate()
	const [input,setInput]=useState({
		username:"",
		password:""
	})
	const inputHandler=(event)=>{
setInput({...input,[event.target.name]:event.target.value})
	}
	const readValues=()=>{
		axios.post("http://localhost:3001/api/admin/loginsecurity",input).then(
			(response)=>{
				console.log(response.data)
				if (response.data.status==="success") {
					console.log(response.data.userdata._id)
					alert("Succesful Login ! Welcome")
					sessionStorage.setItem("userId",response.data.userdata._id)
					navigate("/AddVisit")
				} else {
					alert("oops ! something went wrong")
				}
			}
			
		)
	}
  return (
	<div>
	  <div class="wrapper">
        <div class="logo">
            <img src="https://pbs.twimg.com/profile_images/720494732800094208/NA9smzel_400x400.jpg" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            FISAT SECURITY <br></br> LOGIN
        </div>

            <div class="form-field d-flex align-items-center">
                
                <input type="text" name="username" value={input.username} placeholder="username" onChange={inputHandler}/>
            </div>
            <div class="form-field d-flex align-items-center">
    
                <input type="password" name="password"  value={input.password}  placeholder="password"onChange={inputHandler}/>
            </div>
            <button class="btn mt-3" onClick={readValues}>Login</button>

        <div class="text-center fs-6">
            <a href="/">Admin ? Sign in</a>
        </div>
    </div>
	</div>
  )
}

export default LoginSecurity
