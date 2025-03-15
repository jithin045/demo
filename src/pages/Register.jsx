import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Register() {
    const [status, setStatus] = useState(true)
    return (
        <>
            <div className='d-flex align-items-center justify-content-center w-100' style={{ height: '100vh' }}>
                <div className='bg-primary shadow p-4 border rounded w-50'>
                    <Row>
                        <Col sm={12} md={6}>

                            <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/biometric-security-4916162-4092822.png" alt="" />
                        </Col>
                        <Col sm={12} md={6}>
                            <h3>Register</h3>
                            <div className='mt-4'>

                                <FloatingLabel className='mb-3' controlId="user" label="Username">
                                    <Form.Control type="text" placeholder="username" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>


                                <button className='rounded btn' style={{ backgroundColor: '#18898d', color: 'white' }}  >

                                    <span >Register</span>

                                </button>



                                <button className='btn btn-link' style={{ color: '#18898d' }} >
                                    
                                            <span><b>Already A User?</b></span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

        </>
    )
}

export default Register