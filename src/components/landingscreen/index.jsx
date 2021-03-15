import React from 'react'
import Style from './index.module.css'
function Landingpage() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <button className={`${Style.playbutton} btn btn-outline`} type="submit"><i class="fa fa-play-circle"></i> Play</button>
        <button className={`${Style.infobutton} btn btn-outline`} type="submit"><i class="fa fa-info-circle"></i> More Info</button>
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className={`${Style.images} d-block w-100`} src="../assets/img/movie1.jpg" height={700} alt="First slide" />
            <div className={`${Style.info} carousel-caption d-none d-md-block`}>
              <h5>MONEY HEIST</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="carousel-item">
          <img className={`${Style.images} d-block w-100`} src="../assets/img/movie2.jpg" height={700} alt="Third slide" />
            <div className={`${Style.info} carousel-caption d-none d-md-block`}>
              <h5>LUCIFER</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="carousel-item">
          <img className={`${Style.images} d-block w-100`} src="../assets/img/movie3.jpg" height={700} alt="Third slide" />
            <div className={`${Style.info} carousel-caption d-none d-md-block`}>
              <h5>GAME OF THRONES</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="carousel-item">
          <img className={`${Style.images} d-block w-100`} src="../assets/img/movie4.jpg" height={700} alt="Second slide" />
            <div className={`${Style.info} carousel-caption d-none d-md-block`}>
              <h5>THE WITCHER</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
export default Landingpage;