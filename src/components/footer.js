import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="social-icons">
            {/* <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a> */}
          </div>

          <div className='newsletter'></div>

          <form id="newsletterform">
            <h4 className='sub'> Subscribe to Newsletter</h4>
            <input type='email' id="emailinput" placeholder='Enter email' required />
            <button type="submit" id="subscribebutton">Subscribe</button>
            <p className="copy">Copyright &copy; 2023 - Maria Johansson</p>
          </form>

        </div>
      </footer>
    </>
  );
}

export default Footer;

