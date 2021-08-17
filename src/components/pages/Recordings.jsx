import React, { useState } from "react"
import { Card, CardBody, CardTitle, CardText, CardImg, Tooltip } from 'reactstrap';
import recordings from "../data/recordings"





const Recordings = ( ) => {
  console.log(recordings)
  return(
    <div className="main">
      <div className="mainDiv">
        <Record />
        <Record />
        <Record />

      </div>

    </div>
  )
}

const Record = props => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  
  return (
    <div style={{width: '20em', maxHeight:'35em', margin: '1em'}}>
      <a href={recordings[0].url} target="_blank" referrerPolicy='no-referrer' style={{textDecoration: 'none', color: 'var(--secondary)'}} id='test' >
        <Card className="pt pr pl pb " 
        style={{backgroundColor: 'var(--light)'}}
        // className='dark'
        >
          <CardImg top width="100%" src={recordings[0].photo} alt="Card image cap" style={{borderRadius: 'none'}} />
          <CardBody  style={{overflow: "scroll", backgroundColor: 'var(--primary'}}>
            <CardTitle tag="h5">{recordings[0].title}</CardTitle>
            <CardText >{recordings[0].desc}</CardText>
            <CardText>
              <small className="text-muted">Released {recordings[0].year}</small>
            </CardText>
          </CardBody>
        </Card>
      </a>
      {/* <Tooltip placement="right" isOpen={tooltipOpen} target='test' toggle={toggle}>
        <ul style={{listStyle: 'none'}}>
          {recordings[0].band.map(player=><li>{`${player.name}: ${player.instrument}`}</li>)}
        </ul>
      </Tooltip> */}
    </div>
  );
};


export default Recordings