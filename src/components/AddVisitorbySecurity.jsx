import axios from 'axios'
import React, { useState } from 'react'

const AddVisitorbySecurity = () => {
  const[input,setInput]=useState({
      userid:sessionStorage.getItem("userId"),
      name: "",
      age: "",
      mobile: "",
      address: "",
      pincode: "",
      purposeofVisit: ""
  })
  const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }
  const readValues=()=>{
    axios.post("http://localhost:3001/api/security/addvisitor",input).then(
      (response)=>{
        console.log(response.data)
        if (response.data.status==="success") {
          alert("succesfully added ")
          
        } else {
          alert("oops ! something went wrong")
        }
      }
    )
  }
  return (
    <div>
       <div className="data my-5">
      <h4 style={{textAlign:'center'}}><u>ADD VISITORS </u> </h4>
        <div className="container my-4">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='name'
                    value={input.name}
                    onChange={inputHandler}
                    
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Age:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='age'
                    value={input.age}
                    onChange={inputHandler}
 
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Mobile:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='mobile'
                    value={input.mobile}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='address'
                    value={input.address}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='pincode'
                    value={input.pincode}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Purpose of Visit
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='purposeofVisit'
                    value={input.purposeofVisit}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success" onClick={readValues} >
                    Add Visitor
                  </button>
                </div>
              </div>
              <div style={{textAlign:"center"}}><a href="/loginsec"><button className="btn btn-danger" >
                    Log Out
                  </button></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddVisitorbySecurity
