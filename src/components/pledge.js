import React, { useState } from 'react'
import '../css/pledge.css'
import UnderLine from './common/underline'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Pledge() {

    const [showImg, setShowImg] = useState(false);

    const handleCloseImg = () => setShowImg(false);
    const handleShowImg = () => setShowImg(true);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/api/v1/accept-data', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "name": name
            })
        })
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='pledge' id='pledge'>
                <h1 className='text-center mt-5 head'>Take The Pledge</h1>
                <UnderLine />

                <div className='pledge_data'>
                    <img src='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100' alt='pledge_img' className='pledge_img mb-3' onClick={handleShowImg} />

                    <Modal show={showImg} onHide={handleCloseImg}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body  style={{padding:'0'}}>
                            <img src='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100' alt='pledge_img'/>
                        </Modal.Body>
                    </Modal>


                    <div className='pledge_about my-auto'>
                        <div className="container text-center mt-3">
                            <div className="col">
                                <h2 className='slogan'>Take the pledge to be street smart and make our streets greener, safer and accessible for all. </h2>
                            </div>
                            {/* <div className="col">
                                <h1 className='mt-4 number'>5200</h1><br />
                                <h2>Already taken the pledge!</h2>
                            </div> */}
                        </div>
                        <div className='text-center m-5'>
                            <button className='btn mb-3' onClick={handleShow}>Take Pledge</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} className="my-4" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Take The Pledge</Modal.Title>
                </Modal.Header>
                <Form method='POST' onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control autoFocus type='text' name='name' id='name' placeholder='Your Name...' rows={3} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id='email' name='email' type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                            {/* <input type='submit' variant="warning" /> */}
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleClose} type='submit'>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default Pledge