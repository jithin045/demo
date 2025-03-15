import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <>
            <div className='d-flex align-items-center justify-content-center w-100' style={{ height: '100vh' }}>
                <div className='bg-primary shadow p-4 border rounded w-50'>
                    <Row>
                        <Col sm={12} md={6}>

                            <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/biometric-security-4916162-4092822.png" alt="" />
                        </Col>
                        <Col sm={12} md={6}>
                            <h3 className='text-dark'>Login</h3>
                            <div className='mt-4'>
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

                                    <span >Login</span>

                                </button>



                                <button className='btn btn-link' style={{ color: '#18898d' }} >

                                    <Link className='text-dark' to={'/'}><b>Are You New Here?</b></Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

        </>
    )
}

export default Login