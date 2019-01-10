import React from "react";
import Form from "../components/Form.js";
import Page from "../layouts/main";
import Head from "next/head";
import Link from 'next/link'

import {Col} from "reactstrap";

const Mentors = () => (
  <div>
    <Head>
      <title>Mentors - CYF</title>
      <meta name="description" content="if you have spare time, please we need you"/>
    </Head>
    <Page>
      <Col className="main-container">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <h1>JOIN US</h1>
          <img src="/static/mentoring.jpg" width="100%" alt="join us" />
          <br />
          <br />
          <div className="text-right">
            <Link href="/contact">
              <button className="btn btn-lg btn-cyf" type="button">Contact to be a mentor</button>
            </Link>
          </div>
          <br />
        </Col>
      </Col>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <br />

        <p>Welcome to a community where your knowledge and experience will help to transform the lives of refugees in the UK.
        <br />
        <br />
        We are looking for experienced web developers (HTML/CSS, JavaScript, Node, Angular, React, Database) to participate in our classes.
        <br />
        <br />        
        We are also looking for technology managers and entrepreneurs to give workshops on modern software practices and methodologies.
        </p>
        <br />
        <Form />
        <br />
      </Col>
    </Page>
    <br />
  </div>
);

export default Mentors;
