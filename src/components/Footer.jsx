import React from 'react'

const Footer = (props) => {
let width = window.innerWidth
console.log(width)
    {return window.innerWidth > 768  ?
    (<div className="footer">
      <div>Copyright © 2021 Nick Tucker </div> <div> Bassist · Composer </div> 🎵 All Rights Reserved.
    </div>)
      :
    (<div className="footer">
      <div>Nick Tucker 🎵 Bassist </div>
    </div>)}
   
}
 
export default Footer;