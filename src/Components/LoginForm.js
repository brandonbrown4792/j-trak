import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { login } from '../Services/api';

const handleSubmit = (e) => {
    e.preventDefault();

    login(e.target.email.value, e.target.password.value);
}

const LoginForm = () => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email or Username</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email or username" />
                <Form.Control type="password" name="password" placeholder="Password" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form.Group>
        </Form>
    )
}

export default LoginForm;