import React from 'react'
import { useEffect, useState } from "react";
import Style from './index.module.css'
import {usestate} from 'react'
function Navbar() {
  const [searchTerm, setSearchTerm] =useState('')
  function store(){
    alert("as")
  var userEmail = document.getElementById('email');
  var userPwd = document.getElementById('pw');
  if(userEmail.value!=null && userPwd.value!=null ){
   localStorage.setItem('email', userEmail.value);
   localStorage.setItem('pw', userPwd.value);
  }
}
  return (
    <nav className={`${Style.navbg} navbar navbar-expand-lg navbar-dark`}>
      <a className="navbar-brand" href="#"><img src="../assets/img/logo movie.png" alt="Logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item "><a className={`${Style.navtext} nav-link`} href="#home">Home</a></li>
            <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#tv">TV Shows</a></li>
            <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#movies">Movies</a></li>
            <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#originals">Originals</a></li>
            <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#movies">Recently Added</a></li>
            <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#home">Portfolio</a></li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setSearchTerm(event.target.value)}} />
                <button className={`${Style.search} btn my-2 my-sm-0`} type="submit"><i class="fa fa-search"></i>Search</button>
              </form>
              <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#"><i className="fa fa-bell"></i></a></li>
              <li className="nav-item">
              <button type="button" className={`${Style.account} btn`} data-toggle="modal" data-target="#exampleModal"><i className="fa fa-user"></i> Login</button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                       <h6 className="modal-title" id="exampleModalLabel">User Profile</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className={`${Style.imguser} userphoto`}>
                         <img src="../assets/img/user.png" alt="Avatar" class="avatar" />
                      </div>  
                      <div className={`${Style.details} logindetails`}>
                        <label for="uname"><b>Useremail</b></label>
                        <input className={`${Style.intext} text`} type="text" id="email" placeholder="Enter Username" name="uname" required />
                       <div>
                       <label for="psw"><b>Password</b></label>
                        <input className={`${Style.intext} text`}type="password" id="pw" placeholder="Enter Password" name="psw" required />
                       </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" onClick={()=>{store()}} className={`${Style.login} btn btn-danger`}>Login</button>
                      </div>
                   </div>
                  </div>
                </div>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    )
}
export default Navbar;