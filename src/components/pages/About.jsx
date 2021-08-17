import React from "react"
import backstage from "../assets/47-4.jpg"

const About = (props) => {
  return (
    <div className="main">
      <div className="mainDiv">
        <div className="aboutText pt pb col-md-7">
        
          <h4 className="pt pb">About</h4>
          <p>
            Bassist <strong>Nick Tucker</strong> is an active freelance
            musician in Central and Southern Indiana. He currently resides in
            his hometown, Indianapolis. Nick is the house bassist for the
            <i> American Pianists Association</i> Jazz Piano Competition. Nick
            performs extensively in all areas of music with numerous jazz,
            Latin, and rock groups throughout the Midwest. He has performed
            with such greats as Rich Perry, Alan Pasqua, Peter Erskine, Randy
            Brecker, Mike Clark, Bobby Watson, Stefon Harris, and many others.
            Nick has performed all over the United States, as well as in
            Europe and South America. Nick holds a Bachelor’s degree in Jazz
            Studies and Music Recording/Technology from the
            <strong> University of Indianapolis</strong> and a Master’s degree
            in Jazz Studies from
            <strong> Indiana University Jacobs School of Music</strong> in
            Bloomington. Nick is an alumnus of the Stean’s Institute Jazz
            Program at Ravinia where he studied with David Baker, Curtis
            Fuller, Rufus Reid, and Nathan Davis. He co-leads the
            <i>Tucker Brothers</i> with his brother Joel Tucker, and is a
            member of the <i>Indianapolis Jazz Collective</i>,
            <i> Eliot Bigger</i>, and <i> Clint Breeze and the Groove</i>.
          </p>
        </div>
          <img src={backstage} alt="" className="abtPhoto pl pt pr pb"/>

      </div>
    </div>
  )
}

export default About
