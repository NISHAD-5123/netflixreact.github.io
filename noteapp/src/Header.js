import React from 'react';
import images from './images/img1.jpeg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const Header = () => {
  return (
    <>
    <div className='Font'>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <a class="navbar-brand" href="">
      <img src={images} alt="Logo" width="40" height="32" class="d-inline-block align-text-top" />
      &nbsp;&nbsp;&nbsp;Arun Note
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="">Save</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Header;