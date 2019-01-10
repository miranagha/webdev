import React from "react";
import Head from "next/head";
import Link from 'next/link'
import Page from "../layouts/main";
import { Container, Row, Col } from "reactstrap";

const Donate = () => (
  <div>
    <Head>
      <title> Donate - Code Your Future</title>
      <meta name="description" content="See the list of prices in here. If they are not working for you, we are more than happy to talk to you and give you the exact cost of your move."/>
    </Head>
    <Page>
      <article>
      <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
          <br />
            <h1 style={{ fontSize: "50px" }}>100% DONATION MODEL</h1>
            <p>
              All the support from individuals goes towards covering our student expenses including childcare, meals, transportation and mobile internet.            </p>
              <br />
              <br />
              <img src="/static/donate.jpg" width="100%" alt="donate" />    
              <br />        
           
            <br />
            </Col>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
        <div>
              <h2 className="h2"> How you can donate us:</h2>
              <ul>
                <li><strong>£300</strong> Covers the childcare of a student for 3 months</li>
                <li><strong>£600</strong> Covers the meals of the class for 3 months</li>
                <li><strong>£1,000</strong> Covers of training a student for 3-months</li>
                <li><strong>£2,000</strong> Average cost of training a student at CYF (student expenses included)</li>
                <li><strong>£5,000</strong> Become a Class Sponsor and cover expenses for 5 students (edited)</li>
              </ul>
            </div>
        </Col>
      </article>
    </Page>
  </div>
);

export default Donate;
