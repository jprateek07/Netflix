import React from 'react'
import Style from './index.module.css'
function Landingpage(){
    return(
        
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
  <button className={`${Style.playbutton} btn btn-primary play-button my-2 my-sm-0`}  type="submit"><i class="fa fa-play-circle"></i>Play</button>
  <button className={`${Style.infobutton} btn btn-danger info-button my-2 my-sm-0`} type="submit"><i class="fa fa-info-circle"></i>More Info</button>
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/assets/img/movi1.jpg" height={500} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="assets/img/movie2.jpg" height={500} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="assets/img/movie3.jpg" height={500} alt="Third slide" />
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