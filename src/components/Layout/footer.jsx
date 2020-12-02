import React from 'react';


// ECMA 6
const Footer = ({ footerText }) => {
    return(
    <footer className="footer"><p className="footer-text">{ footerText }</p></footer>
    
    );
};

export default Footer;