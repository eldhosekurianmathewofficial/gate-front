import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListofVisitors = () => {
  const[input,setInput]=new useState([])
  const getData=()=>{
    axios.get("http://localhost:3001/api/admin/viewallvisitors").then(
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
      <th scope="col">Added By (Security Name):</th>
      <th scope="col">Name of Visitor:</th>
      <th scope="col">Age:</th>
      <th scope="col">Mobile:</th>
      <th scope="col">Address:</th>
      <th scope="col">Pincode:</th>
      <th scope="col">Purpose of Visit:</th>
      <th scope="col">Time:</th>
    </tr>
  </thead>
  <tbody>
    {
      input.map((value,index)=>{
        return <tr>
        <th scope="row">{value.userid.name}</th>
        <td>{value.name}</td>
        <td>{value.age}</td>
        <td>{value.mobile}</td>
        <td>{value.address}</td>
        <td>{value.pincode}</td>
        <td>{value.purposeofVisit}</td>
        <td>{value.time}</td>
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

export default ListofVisitors
