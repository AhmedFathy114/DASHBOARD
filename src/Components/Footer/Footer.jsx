import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
    return (
        <>
        <footer className="bg-footer text-white p-5">
            <div className="container row ">
                <div className="col-md-6 col-lg-3 mb-md-2 mb-0">
                    <h4>About Us</h4>
                    <p>ORVICO connects customers with trusted handymen in their area. 
                        From electricians to plumbers and carpenters, 
                        we make finding skilled professionals simple and reliable. 
                        Our mission is to make home repairs easier for everyone.

                    </p>

                </div>

                <div className="col-md-6 col-lg-3 mb-md-2 mb-0">
                    <h4> Availability</h4>
                    <ul>
                        <li>Sat: 10:00 – 14:00</li>
                        <li>Sun-Thus: 9:00 – 18:00</li>
                        <li>Fri: Closed</li>
                    </ul>

                </div>

                <div className="col-md-6 col-lg-3 ">
                    <h4>Quick Links</h4>
                    <ul className="">
                        <li><a className="text-white" href="#home">Home</a></li>
                        <li><a className="text-white" href="#our-mission">Our Mission</a></li>
                        <li>{<Link  className="text-white" to="/services">Services</Link>}</li>
                        <li>{<Link  className="text-white" to="/contacts">Contact Us</Link>}</li>
                    </ul>

                </div>

                <div className="col-md-6 col-lg-3 ">
                    <h4>Contact Details</h4>
                    <ul>
                        <li>Address: 123 Main Street, Cairo, Egypt</li>
                        <li>Phone: +20 100 123 4567</li>
                        <li>Email: hello@orvico.com</li>
                        <li>Social: Facebook | Instagram | LinkedIn | Twitter</li>
                    </ul>
                    

                </div>
            </div>
            <hr />

            <div className="d-flex justify-content-between px-5 pt-3 flex-wrap">
                <p>Copyright @ORVICO. All rights reserved.</p>

                <div className="social gap-5">
                    <i className="fa-brands fa-facebook facebook fs-4 me-3"></i>
                    <i className="fa-brands fa-instagram instagram fs-4 me-3"></i>
                    <i className="fa-brands fa-linkedin linkedin fs-4 me-3"></i>
                    <i className="fa-brands fa-twitter twitter fs-4 me-3"></i>
                </div>
            </div>

        </footer>
        </>
    )
}
