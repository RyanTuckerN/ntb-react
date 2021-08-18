import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const Contact = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <div>
          <h3>Send me an email- I'd love to have a conversation!</h3>
          <br />
          <form action="https://formspree.io/f/xayabwea" method="POST" >
            <FormGroup>
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
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
