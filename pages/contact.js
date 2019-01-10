import React from "react";
import Form from "../components/Form.js";
import Page from "../layouts/main";
import Head from "next/head";
import {Row, Col } from "reactstrap";
import {MdRoom, MdSchedule, MdEmail} from 'react-icons/lib/md';
import FaPhone from "react-icons/lib/fa/phone"
;

const pColor ={
  color:'black'
}
const formColor ={
  color: 'white'
}
const Contact = () => (
  <div>
    <Head>
      <title>Contact - Code Your Future</title>
      <meta name="description" content="Contact us if you have any enquiry"/>
    </Head>
    <Page>
      <Row>
      <Col className="main-container">
        <Col style={formColor} sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <h1 className='text-center'>CONTACT US</h1>
          <Form />
        </Col>
      </Col>
      </Row>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <br />
      <br />
      <Col >
        <p><MdSchedule /> We are open every Sunday</p>
        <p><a style={pColor} href="mailto:contact@codeyourfuture.io"><MdEmail /> contact@codeyourfuture.io</a></p>
        <p><a style={pColor} href="tel:02036999977"><FaPhone /> 02036336151</a></p>
        <p><MdRoom />  4 Pentonville Rd, London N1 9HF</p>
      </Col>
      <Col>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9927.89264401202!2d-0.1070469!3d51.5320521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15b75f53749880ac!2sTicketmaster+International%3A+Head+Office!5e0!3m2!1sen!2suk!4v1546742754401" width="100%" height="300" frameborder="0"  allowFullScreen></iframe>
      </Col>
      </Col>
      <br />
    </Page>
    <br />
  </div>
);

export default Contact;
