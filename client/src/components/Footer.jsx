import React from "react";
import Logo from '../assets/Be-blog.png'

const Footer = () => {
  return(
  <footer>
    <img src={Logo} alt="" />
    <span>
      Made by <a className="link" href="https://github.com/kumarsuraj007">Suraj Kumar</a>.
    </span>
  </footer>
  )
};
export default Footer;
