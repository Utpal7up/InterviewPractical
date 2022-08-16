import React from 'react';
import logo from './earth.jpg';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <img style={{width: "2%", height: "2%"}} src={logo} alt="Earth" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./Searching">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./ApiTable.js">
                  Table
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;