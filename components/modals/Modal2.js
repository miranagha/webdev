import React from "react";
import { Row, Col } from 'reactstrap';

const Modal2 = ({ nextActivModal, previousActivModal, toggle }) => (
    <div>
        <h3>JavaScript DOM </h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p> The DOM defines a standard for accessing documents: "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.</p>
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

export default Modal2;
