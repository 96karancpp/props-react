import React from 'react'

function Footer(){
return(
    <>
    <footer>
        <a to="#" className="logo">KG Blogs</a>
        <ul className="footerMenu">
            <li> <a to="#home"className="btn">Home</a></li>
        <li> <a to="#about"className="btn">About</a></li>
        <li> <a to="#post"className="btn">Blogs</a></li>
        <li> <a to="#contact"className="btn">Contact</a></li>
        </ul>
        <div className="icon-bar">
            <a to="https://www.facebook.com/kguniq" className="facebook"><i className="fa fa-facebook"></i></a> 
            <a to="https://twitter.com/Kgunique2019" className="twitter"><i className="fa fa-twitter"></i></a> 
            <a to="https://www.instagram.com/kgblogging/" className="instagram"><i className="fa fa-instagram"></i></a> 
          </div>
        <p className="copyright">&copy; Copyright 2021, KG Blog</p>
       
    </footer>
    </>
)
}
export default Footer;