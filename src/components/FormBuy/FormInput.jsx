import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

export default function FormInput({children, type, name, value, controlId, onChange}) {
    return (
        <Form.Group className="m-3" controlId={controlId}>
            <Row className="justify-content-md-center">
                <Form.Label column md={2}>
                    {children}
                </Form.Label>
                <Col md={4}>
                    <Form.Control
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required
                    />
                </Col>
            </Row>
        </Form.Group>
    )
}