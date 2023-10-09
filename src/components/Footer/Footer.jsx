import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-white rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Event</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <FaTwitter className='text-blue-500 text-3xl'></FaTwitter>
    <FaYoutube className='text-red-500 text-3xl'></FaYoutube>
    <FaFacebookF className='text-blue-500 text-3xl'></FaFacebookF>
    <FaInstagram className='text-red-500 text-3xl'></FaInstagram>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by sports event</p>
  </aside>
</footer>
    );
};

export default Footer;