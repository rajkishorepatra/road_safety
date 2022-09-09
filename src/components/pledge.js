import React, { useState } from 'react'
import '../css/pledge.css'
import UnderLine from './common/underline'
// import Modal from './modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Pledge() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='pledge' id='pledge'>
                <h1 className='text-center mt-5 mb-4 head'>Take The Pledge</h1>
                <UnderLine />

                <div className="container text-center mt-3">
                    {/* <div className="row"> */}
                    <div className="col">
                        <h2 className='slogan'>Pledge To Drive<br />So Others Survive!</h2>
                    </div>
                    <div className="col">
                        <h1 className='mt-4 number'>5200</h1><br />
                        <h2>Already taken the pledge!</h2>
                    </div>
                    {/* </div> */}
                </div>
                <div className='text-center m-5'>
                    <button className='btn' onClick={handleShow}>Take Pledge</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Take The Pledge</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control type='text' placeholder='Your Name...' rows={3} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                            
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Pledge