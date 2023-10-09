import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav=()=>{
  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link className="nav-link" to='/'> Navbar </Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/'> Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/add'> Add Product </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/update'> Update Product </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/logout'> Logout </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/profile'> Profile </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/signup'> Sign Up </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;