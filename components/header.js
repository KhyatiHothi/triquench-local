import React, { forwardRef, useState, useEffect } from 'react';
import Image from 'next/image';
import siteLogo from '../public/images/site-logo.svg';
import callIc from '../public/images/call-ic.svg';


const Header = forwardRef((props, ref) => {
    const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the open-menu class on body
  useEffect(() => {
    if (menuOpen) {
        document.body.classList.add('open-menu');
    } else {
      document.body.classList.remove('open-menu');
    }

    // Cleanup to remove the class when component is unmounted or menuOpen changes
    return () => {
      document.body.classList.remove('open-menu');
    };
  }, [menuOpen]);

  // Toggle menu state on hamburger icon click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return (
      <header className="site-header p-v-10" ref={ref}>
        <div className="container">
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <a href="/">
                        <Image src={siteLogo} alt="Triqunch" />
                    </a>
                </div>
                <nav className="navigation-wrapper">
                    <ul>
                       <li><a title="Home" href="/">Home</a></li>
                       <li><a title="Us" href="/about">About Us</a></li>
                       <li><a title="Products" href="/">Products</a></li>
                       <li><a title="Blogs" href="/">Blogs</a></li>
                       <li><a title="FAQ" href="/">FAQ</a></li>
                       <li><a title="Events" href="/">Events</a></li>
                       <li><a title="Services" href="/">Services</a></li>
                       <li><a title="Video" href="/">Corporate Video</a></li>
                    </ul>
                </nav>
                <div className="contact-wrapper d-flex align-center justify-end">
                    <a href="/" className="border-btn">CONTACT US <Image src={callIc} alt="call-ic" /></a>
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
  });

export default Header;