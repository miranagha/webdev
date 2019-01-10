import React from "react";
import Link from 'next/link';
import Modal1 from "./modals/Modal1.js";
import Modal2 from "./modals/Modal2.js";
import Modal3 from "./modals/Modal3.js";
import Modal4 from "./modals/Modal4.js";
import Modal5 from "./modals/Modal5.js";


import { MdPeopleOutline, MdPersonAdd, MdAttachMoney } from 'react-icons/lib/md';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';


class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false,
            activModal: 0
        };

        this.toggle = this.toggle.bind(this);
    }
    nextActivModal = () => {
        this.setState(prevState => {
            return { activModal: prevState.activModal + 1 }
        })
    }
    previousActivModal = () => {
        this.setState(prevState => {
            return { activModal: prevState.activModal - 1 }
        })
    }
    toggle() {
        this.setState({
            modal: !this.state.modal,
            activModal: 0
        });
    }

    render() {
        const modals = [
            <Modal1 nextActivModal={this.nextActivModal} toggle={this.toggle} />,
            <Modal2 nextActivModal={this.nextActivModal} toggle={this.toggle} previousActivModal={this.previousActivModal} />,
            <Modal3 nextActivModal={this.nextActivModal} toggle={this.toggle} previousActivModal={this.previousActivModal} />,
            <Modal4 nextActivModal={this.nextActivModal} toggle={this.toggle} previousActivModal={this.previousActivModal} />,
            <Modal5 toggle={this.toggle} previousActivModal={this.previousActivModal} />
        ]
        return (
            <section>
                <div className="main-container col-lg-12">
                    <br />
                    <h1 className='text-center' >Code Your Future </h1>
                    <br />
                    <p className="text-eft">
                    We are a non-profit organisation supporting refugees with the dream of becoming developers. Last October we launched our first 6-month program to teach the fundamentals of web programming to refugees and provide the knowledge and skills needed to become a junior web developer.</p>
                    <br />
                    <br />
                    
                    <div>
                        <h2 className='text-center h2 types'>Would you like to <span className='typesofmoves'>Get Involve</span> with CYF?</h2>
                        <Container>
                            <Row className="text-center">
                                <Col>
                                    <p className="material-icon-lg material-icon"><MdPeopleOutline /></p>
                                    <a href='/apply'><button className="btn btn-cyf" >Student</button></a>
                                </Col>
                                <Col>
                                    <p className="material-icon-lg material-icon"><MdPersonAdd /></p>
                                    <a href='/mentor'><button className="btn btn-cyf" type="button">Mentor</button></a>
                                </Col>
                                <Col>
                                    <p className="material-icon-lg material-icon"><MdAttachMoney /></p>
                                    <a href='/donate'><button className="btn btn-cyf" type="button">Donate</button></a>
                                </Col>
                            </Row>

                        </Container>
                        <br />
                        <br />
                        <div className='text-center'>
                            <button className="btn btn-lg btn-tips" onClick={this.toggle}>{this.props.buttonLabel}WHAT WE TEACH</button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalBody>
                                    <div>{modals[this.state.activModal]}</div>
                                </ModalBody>
                            </Modal>
                        </div>
                        <br />
                    </div>
                </div>
                <article>
                    <br />
                    <div>
                        <iframe width="100%" height="490" 
                            src="https://www.youtube.com/embed/LpQUHt2N6rY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>

                    <br />
                    <br />

                    <p>
                        <strong>Ahmed</strong> is a Syrian refugee. In Aleppo, he had been accepted to study Economics at University, but he never even got to set foot on campus due to the civil war that had started and was forced to flee the country and seek sanctuary here in the UK. He had plans to pursue his programming interest alongside economics and find a way to become a professional developer. Instead, he spent a few years trying to start a life and be allowed to be safe and secure a job. Any job.</p>
                    <br />
                    <br />

                    <p>Today, Ahmed is a junior software developer at tech start-up WeGotPop. It took him only a few weeks after graduation to start working there, first as an intern, now in a permanent position. This first hire of one of our graduates closes a full cycle for us. It was the moment when, thanks to the support of our mentors, it altered the course of a person’s life. It was a path that had been distorted by external and powerful forces, and which the CYF community had to rectify. Ahmed didn’t imagine that a year after he wrote those first lines to us he would be a professional software developer. Perhaps he didn’t think of that because after so many setbacks it is hard to think big. But what matters is that he was ready to learn, to believe, and to give himself a chance by joining CodeYourFuture.</p>
                    <p>
                        Why not <Link href='/mentor' passHref><a className='a'> become a mentor </a></Link>
                        today</p>
                </article>
            </section>
        );
    }
}
export default Section;
