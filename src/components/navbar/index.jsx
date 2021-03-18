import React from 'react'
import { useEffect, useState } from "react";
import Style from './index.module.css'
import { usestate } from 'react'
import $ from 'jquery';
function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    $('.form-search').on('submit', function () {
      return false;
    });
    $('.form-search .btn').on('click', function (e) {
      // var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
      $('div.movies').each(function () {
        var $this = $(this);
        if ($this.text().toLowerCase().indexOf(searchTerm) === -1) $this.closest('div.movies').fadeOut();
        else $this.closest('div.movies').fadeIn();
      });
    });
  });
  const [name, setName]=useState('')
  function store(){
  var userEmail = document.getElementById('email');
  var userPwd = document.getElementById('pw');
  if(userEmail.value!=null && userPwd.value!=null ){
   localStorage.setItem('email', userEmail.value);
   localStorage.setItem('pw', userPwd.value);
    setName(userEmail)
  }
}
const logout = () => {
  window.localStorage.clear();
  window.location.href = "login";
}
useEffect(()=>{
  let userName =localStorage.getItem("email");
  setName(userName)
}, [name])
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
            <form className="form-inline my-2 my-lg-0 form-search">
              <input className="form-control mr-sm-2 search-query" type="search" placeholder="Search" aria-label="Search" onChange={(event) => { setSearchTerm(event.target.value) }} />
              <button className={`${Style.search} btn my-2 my-sm-0`} type="submit"><i class="fa fa-search"></i>Search</button>
            </form>
            <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#"><i className="fa fa-bell"></i></a></li>
            {!name ? <li className="nav-item">

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
                      <img src="../assets/img/user.png" alt="Profile Image" className="profile" />
                    </div>
                    <div className={`${Style.details} logindetails`}>
                      <label for="uname"><b>Useremail</b></label>
                      <input className={`${Style.intext} text`} type="text" id="email" placeholder="Enter Useremail" name="uemail" required />
                      <div>
                        <label for="psw"><b>Password</b></label>
                        <input className={`${Style.intext} text`} type="password" id="pw" placeholder="Enter Password" name="psw" required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={() => { store() }} data-dismiss="modal" className={`${Style.login} btn btn-danger`}>Login</button>
                    </div>
                  </div>
                </div>
              </div>
              </li> :  <div className="dropdown">
                  <button className={`${Style.account} btn dropdown-toggle`} type="button" id="dropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i> Account</button>
                    <div className={`${Style.accmenu} dropdown-menu`} aria-labelledby="dropDown">
                      <a className={`${Style.accinfo} dropdown-item`}>PRTAEEK NALWAYA</a>
                      <a className={`${Style.accinfo} dropdown-item`}>MY ACCOUNT</a>
                      <button onClick={logout} className={`${Style.accinfo} dropdown-item`}>LOG OUT</button>
                </div>
              </div>

            }
          </ul>
        </span>
      </div>
    </nav>
  )
}
export default Navbar;