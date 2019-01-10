import React from "react";
import Header from "../components/Header";
import Link from 'next/link'


export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <Header />
        <p>
          {this.props.statusCode
                ? <p className='text-center' style={{paddingTop:'88px'}}> {this.props.statusCode} | This page could not be found. Return to <Link href='/' passHref><a>HOME</a></Link> </p>
            : "An error occurred on client"}
        </p>
      </div>
    );
  }
}
