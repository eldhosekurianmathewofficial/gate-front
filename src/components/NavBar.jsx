import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg" style={{backgroundColor:'aquamarine'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Admin Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
    
        <li class="nav-item">
          <a class="nav-link" href="/signupsecurity">Add Security</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/visitorslist">View All Visitors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/securitylist">View All Securities</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
