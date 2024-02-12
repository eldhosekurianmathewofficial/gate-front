import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Myvisitors = () => {
  const[input,setInput]= useState([])

const [output,setOutput] = new useState({
    "userid":sessionStorage.getItem("userId").toString()
})

console.log(output)

  const getData=()=>{
    axios.post("http://localhost:3001/api/security/viewmyvisitors",output).then(
      (response)=>{
       setInput(response.data)
       console.log(response.data)
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
              <table className="table">
  <thead>
    <tr>
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
      input.map(
        (value,index)=>{
        return <tr>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myvisitors
