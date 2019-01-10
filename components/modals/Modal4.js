import React from "react";
import { Row, Col } from 'reactstrap';

const Modal4 = ({ nextActivModal, previousActivModal, toggle }) => (
    <div>
        <h3>React JS</h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p>In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
        <Row>
            <Col>
                <button className='btn previous' onClick={previousActivModal}>&laquo; previous</button>
            </Col>
            <Col className='text-right'>
                <button className='btn' onClick={toggle}>Close</button>
                <button className='btn next' onClick={nextActivModal}>Next &raquo;</button>
            </Col>
        </Row>
    </div>
);
export default Modal4;
