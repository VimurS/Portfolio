import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import me from '../media/me.png';
import '../components/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
            setSelectedItem('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        closeMenu();
    };

    return (
        <nav className={`navbar ${isScrolled ? 'fixed' : ''}`}>
            <div className="navbar-logo">
                <img src={me} alt="Logo" />
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li className={selectedItem === 'ABOUT' ? 'active' : ''}>
                        <a href="#About" onClick={() => handleItemClick('ABOUT')}>ABOUT</a>
                    </li>
                    <li className={selectedItem === 'WORK' ? 'active' : ''}>
                        <a href="#Project" onClick={() => handleItemClick('WORK')}>WORK</a>
                    </li>
                    <li className={selectedItem === 'CONTACT' ? 'active' : ''}>
                        <a href="#ContactPage" onClick={() => handleItemClick('CONTACT')}>CONTACT</a>
                    </li>
                    <li className={selectedItem === 'RESUME' ? 'active' : ''}>
                        <a href="https://drive.google.com/file/d/10xpMiMsLj3F4UQMtHzsBKkAq9ktlnOtR/view?pli=1" target='_blank' rel="noopener noreferrer" onClick={() => handleItemClick('RESUME')}>RESUME</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vimur-s-0a1420308/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                            <FaLinkedin style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.900)', cursor: 'pointer', borderRadius: '2px' }} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
                <div className={`hamburger ${isOpen ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
