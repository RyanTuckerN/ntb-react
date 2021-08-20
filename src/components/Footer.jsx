import React, { useState, useEffect } from 'react'

const Footer = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener('resize', ()=>setWidth(window.innerWidth))
    return window.removeEventListener('resize', ()=>setWidth(window.innerWidth))
  }, [])

  // console.log(width)
    {return width > 768  ?
    (<div className="footer">
      <div>Copyright &copy; 2021 Nick Tucker </div> <div> Bassist · Composer </div>  All Rights Reserved
    </div>)
      :
    (<div className="footer">
      <div>Nick Tucker 🎵 Bassist </div>
    </div>)}
   
}
 
export default Footer;  