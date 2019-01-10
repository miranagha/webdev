import React from "react";
import Head from "next/head";
import Page from "../layouts/main";
import Link from 'next/link'

import {Col } from "reactstrap";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
  <div>
    <Head>
      <title>Code Your Future Events</title>
      <meta name="description" content="find out more about our events"/>
    </Head>
    <Page>
      <Col className="main-container">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <h1>Our Upcoming Events</h1>
          <img src="/static/events.jpg" width="100%" alt="donate" />    
          <div className="text-right">
          <br />
          <Link href="/contact">
              <button className="btn btn-lg btn-cyf" type="button">
                  Get in touch
              </button>
          </Link>
          </div>
          <br />
        </Col>
      </Col>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <div className="events">
             
              <div className="container col-md-6">
                <img src="/static/mentors.jpg" className="event-img"  alt="mentor training" />
                <div className="text-block">
                  <h4>Mentor Training</h4>
                  <p>Attend our training session</p>
                </div>
                <br />
                <Button color="warning" onClick={this.toggle}>Read more</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    Nothing available at this moment please try again later
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
             
              <div className="container col-md-6">
                <img src="/static/course.jpeg" className="event-img" alt="mentor training" />
                <div className="text-block">
                  <h4>New Course</h4>
                  <p>find out about starting date</p>
                </div>
                <br />
                <Button color="warning" onClick={this.toggle}>Read more</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    Nothing available at this moment please try again later
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              
              <div className="container col-md-6">
                <img src="/static/conf.jpeg" className="event-img" alt="mentor training" />
                <div className="text-block">
                  <h4>Conferences</h4>
                  <p>We have Conferences every year</p>
                </div>
                <Button color="warning" onClick={this.toggle}>Read more</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    Nothing available at this moment please try again later
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
           </div>
         
      </Col>
    </Page>
  </div>
  );
}
}

export default Events;
