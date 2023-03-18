import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({ authenticate }) {

    const [formData, setFormData] = useState(
        { email: "", password: "" }
    )

    //Handling state if I want to add real-time validation
    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handldeOnSubmit(event) {
        event.preventDefault();
        authenticate(formData)
    }

    return (
        <Form className='card  p-5 text-white' onSubmit={handldeOnSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={FormData.email}
                    name="email" />
                <Form.Text className="text-muted ">
                    See documentation for who has access.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={FormData.email}
                    name="password" />
            </Form.Group>

            <Button className='mt-2' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;