import React from 'react'
import Style from './index.module.css'
function Navbar() {
  return (
    <nav className={`${Style.navbg} navbar navbar-expand-lg navbar-dark`}>
      <a className="navbar-brand" href="#"><img src="../assets/img/netlogo.png" alt="Logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className={`${Style.navtext} nav-link`} href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className={`${Style.navtext} nav-link`} href="#tv">TV Shows</a>
          </li>
          <li className="nav-item">
            <a className={`${Style.navtext} nav-link`} href="#movies">Movies</a>
          </li>
          <li className="nav-item">
            <a className={`${Style.navtext} nav-link`} href="#originals">Originals</a>
          </li>
          <li className="nav-item">
            <a className={`${Style.navtext} nav-link`} href="#movies">Recently Added</a>
          </li>
          <li className="nav-item">
            <a className={`${Style.navtext} nav-link`} href="#home">Portfolio</a>
          </li>
        </ul>
        <span className="navbar-text">
          <ul className="navbar-nav mr-auto">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit"><i class="fa fa-search"></i>Search</button>
            </form>
            <li className="nav-item">
              <a className={`${Style.navtext} nav-link`} href="#"><i className="fa fa-bell"></i></a>
            </li>
            <li className="nav-item">
              <a className={`${Style.navtext} nav-link`} href="#">Account</a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  )
}
export default Navbar;