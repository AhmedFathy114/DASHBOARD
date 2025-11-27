import { Link} from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {

    const [isLogged, setIsLogged] = useState(true); 
    setIsLogged
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container  ">

                    {/* logo */}
                    <Link className="  d-flex align-items-center logo me-lg-5" to="#">
                        {/* <i className="fa-solid fa-screwdriver-wrench"></i> */}
                        <h3 className='m-0'><i className="fa-regular fa-handshake"></i>  ORVICO</h3>
                    </Link>

                    <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavId">

                    {/* Nav Links */}
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0 fs-5 gap-lg-3">
                        <li className="nav-item">
                        <Link className="nav-link " to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/contacts'>Contact</Link>
                        </li>
                    </ul>
                    
                    
                    
                    <div className="d-flex align-items-center gap-5 ms-auto">
                        {/* check isLogged ? show profile section  and notifications */}
                        {isLogged?
                            
                            //notifications 
                            <>
                            <div className='btn-group'>
                                <li className=""
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                    <Link className="nav-link notifications-icon" >
                                        <i className="fa-solid fs-4 fa-bell"></i>
                                        <span className="badge  notifications-badge ">3</span>
                                    </Link>
                                </li>

                                <ul  className="dropdown-menu message-menu dropdown-menu-lg-end p-2 ">
                                    <li className=''>
                                        <Link to="services/details">
                                            <div className='d-flex gap-3 shadow-lg p-2 rounded-3'>
                                                <i className="fa-regular main-text fs-4 fa-bell"></i>
                                                <p>Congratulations! Your order is selected by the client, please contact him</p>
                                            </div>
                                        </Link>
                                        
                                    </li>
                                    <hr />
                                    <li className=''>
                                        <Link to="services/details">
                                            <div className='d-flex gap-3 shadow-lg p-2 rounded-3'>
                                                <i className="fa-regular main-text fs-4 fa-bell"></i>
                                                <p>Congratulations! Your order is selected by the client, please contact him</p>
                                            </div>
                                        </Link>
                                        
                                    </li>
                                    <hr />
                                    <li className=''>
                                        <Link to="services/details">
                                            <div className='d-flex gap-3 shadow-lg p-2 rounded-3'>
                                                <i className="fa-regular main-text fs-4 fa-bell"></i>
                                                <p>Congratulations! Your order is selected by the client, please contact him
                                                    Congratulations! Your order is selected by the client, please contact him
                                                </p>
                                            </div>
                                        </Link>
                                        
                                    </li>
                                </ul>
                            </div>
                            
                            
                            {/* //  Profile section  */}
                            <div className="btn-group">
                                
                                <button
                                    className="btn secondary-btn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    >
                                    Mariam 
                                </button>

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/myprofile">My Profile</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    <hr />
                                    <li><Link className='dropdown-item ' to=""> <button className="btn main-btn">Logout</button></Link></li>
                                </ul>
                            </div>
                            </>
                            : 
                            <>
                            {/* ***************************LogIN/SignUP Buttons*************************************** */}
                                {/* <button className="btn main-btn"><Link className='text-decoration-none text-light px-2' to='/login'>Login</Link></button>
                                <button className="btn secondary-btn"><Link className='text-decoration-none text-dark' to='/signup'>Register</Link></button> */}
                                {/* <button className="btn main-btn"> */}
                                    <Link className='text-decoration-none text-light ' to='/login'>
                                    <button  className="btn main-btn px-4">    
                                        Login
                                    </button>
                                    </Link>
                                {/* </button> */}
                                {/* <button className="btn secondary-btn"> */}
                                    <Link className='text-decoration-none text-dark' to='/signup'>
                                    <button className="btn secondary-btn px-3">
                                        Register
                                    </button>
                                    </Link>
                                {/* </button> */}
                            </>
                            
                        
                        }
                        

                        
                    </div>

                    </div>
                </div>
            </nav>
        
        </>
    )
}
