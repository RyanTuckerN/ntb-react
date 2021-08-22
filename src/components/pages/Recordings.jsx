import React from "react"
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import recordings from "../data/recordings"

const Recordings = ( ) => {
  return(
    <div className="main">
      <div className="mainDiv">
        {recordings.sort((a,b)=>b.year-a.year).map((record, i)=><Record record={record} key={i}/>)}
      </div>
    </div>
  )
}

const Record = props => {
  const {title, year, band, url, photo} = props.record
  
  return (
    <div style={{width: '22em', height:'28em', margin: '1em'}} id='recordCard'>
      <a href={url} target="_blank" referrerPolicy='no-referrer' style={{textDecoration: 'none', color: 'var(--secondary)', minHeight:'30em'}}  title={`${band}: "${title}"`} >
        <Card className="pt pr pl pb" style={{backgroundColor: 'var(--darker-primary)', height:'28em'}} >
          <CardImg top width="100%" src={photo} alt={`Album art for ${title}`} />
          <CardBody  style={{overflow: "hidden", backgroundColor: 'var(--primary'}}>
            <CardTitle tag="h5" style={{fontSize: '1.1rem'}}>{`"${title}"`}</CardTitle>
            <CardText>{band}</CardText>
            <CardText>
              <small className="text-muted">Released {year}</small>
            </CardText>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};


export default Recordings