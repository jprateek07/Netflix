import React from 'react'
import Styles from './index.module.css'
function Footer() {
    return (
        <>
            <div className={Styles['footer-section']}>
                <div className="container">
                    <div className="row">
                        <div className={`${Styles['social-icon']} py-3 py-md-4`}>
                            <a href="#"><i className="fab fa-facebook fa-3x pl-4 pl-md-2" aria-hidden="true"></i></a>
                            <a href="#"><i className="fab fa-instagram fa-3x" aria-hidden="true"></i></a>
                            <a href="#"><i className="fab fa-twitter fa-3x" aria-hidden="true"></i></a>
                            <a href="#"><i className="fab fa-youtube fa-3x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={`${Styles.primary} ${Styles['footer-links']} row  py-0 py-md-4`}>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Audio and Subtitles</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Audio Description</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Help Center</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Gift Cards</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Media Center</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Investor Relations</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Jobs</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Terms of Use</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Privacy</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Legal Notices</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Corporate Information</h4></a></div>
                        <div className="col-md-3"><a href="#"><h4 className="text-center text-md-left">Contact Us</h4></a></div>
                    </div>
                </div>
                <div className="footer-bottom py-3 py-md-4">
                    <h2 className="text-center">Netflix &copy; All rights reserved.</h2>
                </div>
            </div>
        </>
    )
}
export default Footer;
