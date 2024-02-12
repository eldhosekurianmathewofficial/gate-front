import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate=useNavigate()
    const[input,setInput]=new useState([
        {
            email:"",
            password:""
        }
    ])
    const inputHandler=(event)=>
    {
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        if ((input.email=="admin") && (input.password=="admin")) {

            alert("Succesfully Login ! Welcome onBoard")
            navigate("/signupsecurity")

            
        } else {

            alert("oops ! something went wrong")
        }
    }

  return (
    <div>
      <div>
      <div class="wrapper">
        <div class="logo">
            <img src="https://pbs.twimg.com/profile_images/720494732800094208/NA9smzel_400x400.jpg" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            FISAT SECURITY <br></br> ADMIN
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="email" placeholder="Username" value={input.email} onChange={inputHandler}/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password"  placeholder="Password" value={input.password} onChange={inputHandler}/>
            </div>
            <button class="btn mt-3" onClick={readValues}>Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="/loginsec">Security ? Sign in</a>
        </div>
    </div>
	</div>
    </div>
  )
}

export default AdminLogin
