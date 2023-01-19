import React, { useState, useRef } from 'react'
import '../css/pledge.css'
import UnderLine from './common/underline'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import pledge from '../img/Pledge.png'

function Pledge() {

    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbytznTxlGysHndSeo9_kAQbtnyzjYLHppZ7amZH2IA3x-N4U2i2Z9NR2V_l2ImoU8Xy/exec"

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(scriptUrl, {
            method: 'POST',
            'mode': 'no-cors',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
        })
            .catch(err => console.log(err))
    }
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch('http://localhost:5000/api/v1/accept-data', {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "email": email,
    //             "name": name
    //         })
    //     })
    // }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='pledge' id='pledge' onLoad={handleShow}>
                <h1 className='text-center mt-5 head' style={{ color: '#ed1b24' }}>Take The Pledge</h1>
                <UnderLine />
                <div className='pledge_data'>
                    <img src={pledge} alt='pledge_img' className='pledge_img mb-1 m-auto' />
                    <div className='pledge_about my-auto'>
                        <div className='text-center m-3'>
                            <button className='btn mb-3' onClick={handleShow}>Take Pledge</button>
                        </div>
                    </div>
                </div>
            </div>





            <Modal show={show} className="my-4" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Take The Pledge</Modal.Title>
                </Modal.Header>
                <Form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                    <Modal.Body>
                        <img src={pledge} alt='pledge_img' className='pledge_img1 mb-1 m-auto' />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control autoFocus type='text' name='name' id='name' placeholder='Your Name...' rows={3} />
                            {/* onChange={(e) => setName(e.target.value)}  value={name}/> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id='email' name='email' type="email" placeholder="name@example.com" />
                            {/* onChange={(e) => setEmail(e.target.value)} value={email}/> */}
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button id='sub' variant="warning" onClick={handleClose} type='submit'>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default Pledge