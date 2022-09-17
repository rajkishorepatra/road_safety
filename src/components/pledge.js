import React, { useEffect, useState } from 'react'
import '../css/pledge.css'
import UnderLine from './common/underline'
// import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Pledge() {


    const [data,setData] = useState([{}])
    useEffect(()=>{
        fetch("/data").then(res=>res.json()).then(
            data=>{
                setData(data)
                console.log(data)
            }
        )
    },[])



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

            <Modal show={show} className="my-4" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Take The Pledge</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form method='post' action='/acceptData'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Your Name</Form.Label>
                            <input autoFocus className="mx-5" type='text' name='name' id='name' placeholder='Your Name...' />
                            {/* <Form.Control type='text' name='name' id='name' placeholder='Your Name...' rows={3} /> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Email address</Form.Label>
                            <input className="mx-5" id='email' name='email' type="email" placeholder="name@example.com" />
                            {/* <Form.Control id='email' name='email' type="email" placeholder="name@example.com" /> */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="warning" onClick={handleClose}>
                        Submit
                    </Button>
                    {/* <input type='submit' value='submit'/> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Pledge