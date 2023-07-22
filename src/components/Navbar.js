import React from 'react';

const name = {
    marginBottom: '2px',
    paddingTop: '10px',
    paddingLeft: '25px',
    paddingRight: '32px',
    paddingBottom: '10px',
}

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className='navbar'>
        <h4 style={name}>Carolina Bermeo</h4>
        <ul className="nav nav-tabs justify-content-end">
            <li className="nav-item">
                <a
                    href="#AboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                   
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                Resume
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                   
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
        </ul>
        </div>
    );
}