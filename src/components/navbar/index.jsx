import React from 'react'
import { useEffect, useState } from "react";
import Style from './index.module.css'
import {usestate} from 'react'
import $ from 'jquery';
function Navbar() {
  const [searchTerm, setSearchTerm] =useState('')
  useEffect(() => {
    $('.form-search').on('submit', function() {
        return false;
    });
    $('.form-search .btn').on('click', function(e) {
        // var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
        $('div.movies').each(function() {
            var $this = $(this);
            console.log($this)
            if ($this.text().toLowerCase().indexOf(searchTerm) === -1) $this.closest('div.movies').fadeOut();
            else $this.closest('div.movies').fadeIn();
        });
    });
});
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
                <input className="form-control mr-sm-2 search-query" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setSearchTerm(event.target.value)}} />
                <button className={`${Style.search} btn my-2 my-sm-0`} type="submit"><i class="fa fa-search"></i>Search</button>
              </form>
              <li className="nav-item"><a className={`${Style.navtext} nav-link`} href="#"><i className="fa fa-bell"></i></a></li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className={`${Style.account} btn dropdown-toggle`} type="button" id="dropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</button>
                    <div className={`${Style.accmenu} dropdown-menu`} aria-labelledby="dropDown">
                      <a className={`${Style.accinfo} dropdown-item`}>PRTAEEK NALWAYA</a>
                      <a className={`${Style.accinfo} dropdown-item`}>MY ACCOUNT</a>
                      <a className={`${Style.accinfo} dropdown-item`}>LOG OUT</a>
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