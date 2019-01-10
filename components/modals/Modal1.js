import React from "react";
const Modal1 = ({ nextActivModal, toggle }) => (
	<div>
		<h3>HTML and CSS</h3>
		<hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
		<p>HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.</p>
		<div className='text-right'>
			<button className='btn' onClick={toggle}>Close</button>
			<button className='btn next' onClick={nextActivModal}>Next &raquo;</button>
		</div>
	</div>
);

export default Modal1;
