
import ContactsForm from './ContactsForm'
import { Link } from 'react-router-dom'

export default function Contacts() {
  return <>
  <div className="container-fluid p-md-5 px-4 py-5 mt-5">
    <div className="contacts-Container row  g-5 justify-content-between">
        <div className="left col-md-5">
            <h2 class="display-5 fw-bolder text-center pb-4">
                <span class="text-gradient">Get in touch</span>
            </h2>
            <p className='text-muted'>We're here to help you connect with the best craftspeople.<br/> Reach out with any questions or for support.</p>
            <div className="email shadow rounded-4 p-4 mb-4 d-flex align-items-start gap-3 bg-light">
                <i class="fa-solid fa-envelope"></i>
                <div className="email-caption">
                    <h5 className='mb-1'>Email</h5>
                    <p className='mb-0 text-muted'>Our team will get back to you within 24 hours.</p>
                    <Link to='#' className='text-decoration-none link'>support@orvico.com</Link>
                </div>
            </div>
            <div className="phone shadow bg-light rounded-4 p-4 mb-4 d-flex align-items-start gap-3">
                <i class="fa-solid fa-phone"></i>
                <div className="phone-caption">
                    <h5 className='mb-1'>Phone</h5>
                    <p className='mb-0 text-muted'>Mon-Fri from 8am to 5pm</p>
                    <Link to='#' className='text-decoration-none link'>+20(111)123-345</Link>
                </div>
            </div>
            <div className="office shadow bg-light rounded-4 p-4 d-flex align-items-start gap-3">
                <i class="fa-solid fa-location-dot"></i>
                <div className="office-caption">
                    <h5 className='mb-1'>Office</h5>
                    <p className='mb-0 text-muted'>Com say hello at our workshop.</p>
                    <p className='mb-0 link'>123 Main Street, Benha </p>
                </div>
            </div>
        </div>
        <div className="right col-md-6">
            <ContactsForm/>
        </div>
    </div>
  </div>
  </>
}
