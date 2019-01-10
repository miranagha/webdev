import React from "react";
import Head from "next/head";
import Link from 'next/link';
import Page from "../layouts/main";
import { Container, Row, Col } from "reactstrap";

const Apply = () => (
  <div>
    <Head>
      <title>Apply - Code Your Future</title>
      <meta name="description" content="Apply for six month course at Code Your Future"/>
    </Head>
    <Page>
      <article>
        <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
          <br />
            <h1>THE BEGINNING OF YOUR PROGRAMMING CAREER</h1>
            <br />
            <p>
            Welcome to our community. Here, you will learn all the technical skills needed to become a professional developer
            <br />
            <br />
            Welcome to our community. Here, you will learn all the technical skills needed to become a professional developer
            <br />
            <br />
            During the course you will learn the whole web development stack, including HTML/CSS, JavaScript, React and Node technologies. We’ll complement the training with workshops on modern software methodologies and job interview practices.
            <br />
            <br />
            Our 8-month web development program has proven a success. For our next London course, we are partnering with Capgemini – a global consultancy organisation – to bring you the most comprehensive course possible. Exceptional graduates from the course will have an opportunity to join Capgemini.
            <br />
            </p>
            <br />
            <div className="text-right">
            <Link href="/contact">
                <button className="btn btn-lg btn-cyf" type="button">
                  Apply
                </button>
              </Link>
            </div>
            <br />
          </Col>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
        <div className="events">
        <div className="col-md-6">
          <h2 className="h2">REQUIREMENTS</h2>
          <ul className="text-left">
            <li>Live in the UK</li>
            <li>Speak good English</li>
            <li>Ready to commit to over 30 hours of learning per week</li>
            <li>Availability for face to face sessions on weekends</li>
          </ul>
        </div>
        <br />
        <div className="col-md-6">
          <h2 className="h2">START LEARNING NOW</h2>
          <p>As part of the selection process, applicants are asked to learn the basics of coding. No previous experience is required!</p>
          <h3 className="h3"><strong>From a computer/laptop:</strong></h3>
          <ul className="text-left"><li>Join&nbsp;<a className="a" target="_blank" rel="noopener noreferrer" href="https://www.khanacademy.org/computing/computer-programming/html-css">Khan Academy</a>&nbsp;and complete Intro to HTML/CSS: Making webpages</li>
           <li>Complete the Codecademy &nbsp;<a className="a" target="_blank" rel="noopener noreferrer" href="https://www.codecademy.com/learn/learn-html">HTML</a> and <a target="_blank" className="a" rel="noopener noreferrer" href="https://www.codecademy.com/learn/learn-css">CSS</a> courses</li>
          </ul>
          <h3 className="h3"><strong>From a smartphone:</strong></h3>
          <ul className="text-left">
            <li>Join&nbsp;<a className="a" target="_blank" rel="noopener noreferrer" href="https://sololearn.com">SoloLearn app</a>&nbsp;and complete the modules on HTML and CSS Fundamentals</li>
          </ul>
        </div>
        </div>
        </Col>
      </article>
    </Page>
  </div>
);

export default Apply;
