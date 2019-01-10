import React from "react";

const Modal5 = ({ previousActivModal, toggle }) => (
    <div>
        <h3>SQL</h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p>SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.</p>
        <button className='btn previous' onClick={previousActivModal}>&laquo; previous</button>
        <button className='btn' onClick={toggle}>Close</button>
    </div>
);
export default Modal5;