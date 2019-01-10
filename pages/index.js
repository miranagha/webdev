import React from "react";
import Head from "next/head";
import Form from "../components/Form.js";
import Section from "../components/Section.js";
import Page from "../layouts/main";
import "../static/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "reactstrap";
import { TwitterTimelineEmbed} from "react-twitter-embed";



const Home = () => (
  <div>
    <Head>
      <title>Code Your Future</title>
      <meta name="description" content='Code Your Future is a six month course for refugees'/>
    </Head>
    <Page>
      <Row>
        <Col md="8">
          <Section />
        </Col>
        <Col md="4">
        <div className="centerContent">
          <div className="selfCenter standardWidth">
            <TwitterTimelineEmbed sourceType="profile" screenName="CodeYourFuture_" options={{height: 600}}/>
          </div>
        </div>
        <br />
        <Form />
        </Col>
      </Row>
    </Page>
  </div>
);

export default Home;