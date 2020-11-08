import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-fluid">
                <div className="row">             
                    <div className="col offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/midlifemn/" target='_blank'><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/midlifeMN" target='_blank'><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/midlifegroove" target='_blank'><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://youtube.com/channel/UCCGtdGDVbtXuZzqjFRNHHaQ" target='_blank'><i className="fa fa-youtube" /></a> 
                    </div>
                    
                    <div className="col text-dark font-weight-bold">
                        <h5>Our Address</h5>
                        <address>
                            17000 11th Avenue North<br/>
                            Plymouth, MN 55447
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="midlifemn@gmail.com"><i className="fa fa-envelope-o" /> midlifemn@gmail.com</a>
                    </div>
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;