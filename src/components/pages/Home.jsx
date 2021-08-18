import React, { useState, useEffect } from "react"
import { Jumbotron, Container } from "reactstrap"
//
// import background from '../assets/Masthead.jpg'
// import background2 from '../assets/47-4.jpg'

const Home = () => {
  //PARALLAX?

  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="bgimg-1" style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'center'}}>
          <div className="titleWrapper">
            <div className="navTitleHome">
              
                <h1> NICK TUCKER </h1>
                <h3>bassist · composer</h3>
              
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home
