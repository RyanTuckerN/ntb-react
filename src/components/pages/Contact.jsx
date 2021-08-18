import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const Contact = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <div>
          <h3 style={{textAlign: 'center'}}>Send me an email- I'd love to have a conversation!</h3>
          <br />
          <form action="https://formspree.io/f/xayabwea" method="POST" >
            <FormGroup style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center'}}>
              <Label for="email">Email Address</Label>
              <Input
                name="email"
                id="exampleText"
                style={{ width: "50vw" }}
                placeholder="yourAddress@gmail.com"
              />
              <br />
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="exampleText"
                style={{ width: "50vw", height: "25vh" }}
                placeholder="Your message here"
              />
            </FormGroup>
            <br />
            <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center'}}><Button>Submit</Button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
