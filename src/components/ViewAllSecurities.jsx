import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAllSecurities = () => {
  const[input,setInput]=new useState([])
  const getData=()=>{
    axios.get("http://localhost:3001/api/admin//viewallsecurities").then(
      (response)=>{
        setInput(response.data)
      }
    )
  }
  useEffect(()=>{getData()},[])
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <table class="table">
  <thead>
    <tr>
      <th scope="col">Name of Security:</th>
      <th scope="col">Age:</th>
      <th scope="col">Mobile:</th>
      <th scope="col">Address:</th>
      <th scope="col">Pincode:</th>
    </tr>
  </thead>
  <tbody>
    {
      input.map((value,index)=>{
        return <tr>
        <td>{value.name}</td>
        <td>{value.age}</td>
        <td>{value.mobile}</td>
        <td>{value.address}</td>
        <td>{value.pincode}</td>

      </tr>
      })
    }
    
  </tbody>
</table>
              </div>
            </div>
            <div style={{textAlign:"center"}}><a href="/signupsecurity">Back to Home</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllSecurities
