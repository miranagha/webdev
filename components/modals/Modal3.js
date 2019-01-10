import React from "react";
import { Row, Col } from 'reactstrap';

const Modal3 = ({ nextActivModal, previousActivModal, toggle }) => (
    <div>
        <h3>Node JS</h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p> Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.</p>
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
export default Modal3;
