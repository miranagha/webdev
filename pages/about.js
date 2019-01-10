import React from "react";
import Head from "next/head";
import Link from 'next/link'
import Page from "../layouts/main";
import { Container, Row, Col } from "reactstrap";

const About = () => (
  <section>
    <Head>
      <title>About - Code Your Future</title>
      <meta name="description" content="Find out more about Code Your Future" />
    </Head>
    <Page>
      <article>
        <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <br />
            <h1>About Us</h1>
            <br />
            <img src="/static/about.jpg" width="100%" alt="about CYF" />    

            <br />
          <br />
            <div className="text-right">
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
          <p>
          We are a non-profit organisation supporting refugees with the dream of becoming developers.
          <br />
          <br />          
          In their journey of interrupted lives, unfinished studies and integration challenges, many asylum seekers and refugees yearn to update their tech skills, but lack learning opportunities. We want to change this.
          <br />
          <br />
          Last year we launched the first cohort of our 6-month web development programme, coached by a group of professional developers. Today we are running new classes in London and Glasgow. This is just the beginning. With your help we will be expanding to other regions and cities.
          <br />
          <br />
          If you are interested in participating as a student, coach or volunteer, sign up!
          <br />
          For all other inquiries please contact us at <a href="mailto:contact@codeyourfuture.io">contact@codeyourfuture.io</a>
          </p>
          <br />
          
        </Col>
      </article>
    </Page>
  </section>
);
export default About;
