import React from "react";
import Link from 'next/link'

import {FaFacebook, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/lib/fa'

const Footer = () => (
    <footer className="container text-center col-xs-12">
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <a rel="noopener noreferrer" className="social-media" href="https://www.facebook.com/codeyourfuture.io/" target="_blank"><FaFacebook /></a>
        <a className="social-media" href="https://www.instagram.com/codeyourfuture_/" target="_blank"><FaInstagram /></a>
        <a className="social-media" href="https://twitter.com/CodeYourFuture_" target="_blank"><FaTwitter /></a>
        <br />
        <Link href='/contact' passHref><a className='copyRight' >CONTACT US</a></Link>
        <br />
        <Link href='/report' passHref><a className='copyRight' >MY REPORT</a></Link>

        <p className='text-center copyRight'>Copyright @ 2018 Code Your Future | all rights reserved</p>
    </footer>
);

export default Footer;
