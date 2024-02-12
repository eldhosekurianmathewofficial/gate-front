import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SignupSecuritybyAdmin = () => {
  const[input,setInput]=new useState([
    {
      name:"",
      age:"",
      mobile:"",
      address:"",
      pincode:"",
      username:"",
      password:""
    }
  ])
  const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})

  }
  const readValues=()=>{
    axios.post("http://localhost:3001/api/admin/addsecurity",input).then(
      (response)=>{
        console.log(response.data)
        if (response.data.status==="success") {
          alert("succesfully added")
          
        } else {
          alert("something went wrong")
          
        }
      }
    )
  }
  return (
    <div>
      <div className="data my-5">
      <h4 style={{textAlign:'center'}}><u>ADD SECURITY </u> </h4>
        <div className="container my-4">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-lab">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={input.name}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-lab">
                    Age:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="age"
                    value={input.age}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-lab">
                    Mobile:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    value={input.mobile}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-lab">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={input.address}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-lab">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="pincode"
                    value={input.pincode}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-lab">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={input.username}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-lab">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={input.password}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success" onClick={readValues} >
                    Add Details
                  </button>
                </div>
              </div>
              <div style={{textAlign:"center"}}><a href="/"><button className="btn btn-danger" >
                    Log Out
                  </button></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSecuritybyAdmin;
