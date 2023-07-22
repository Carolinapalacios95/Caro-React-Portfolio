import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    const [form, setForm] = useState({});
    const [errors, Validate] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const validateErrors = () => {
        const { name, email, message } = form;
        const newErrors = {};

        if (!name || name === '') {
            newErrors.name = 'Please enter your name.';
        }

        if (!email || email === '') {
            newErrors.email = 'Please enter your email.';
        } else if (!/@/.exec(email)) {
            newErrors.email = 'Please enter a valid email.';
        }

        if (!message || message === '') {
            newErrors.message = 'Please enter a message.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateErrors();

        if (Object.keys(newErrors).length > 0) {
            Validate(newErrors);
            return;
        }
    }

    const button = {
        marginTop: "25px",
    }

    return (
        <div>
            <h1>Contact</h1>
            <Form style={{ width: '550px' }}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        onChange={e => setField('name', e.target.value)}
                        onBlur={e => Validate(e.target.value === '' ? { name: 'Please enter your name.' } : {})}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email"
                        onChange={e => setField('email', e.target.value)}
                        onBlur={e => Validate(e.target.value === '' ? { email: 'Please enter your email.' } : {})}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message"
                        onChange={e => setField('message', e.target.value)}
                        onBlur={e => Validate(e.target.value === '' ? { message: 'Please enter a message.' } : {})}
                        isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="outline-light" type="submit" onClick={handleSubmit} size="md" style={button} >Submit</Button>
            </Form>
        </div>
    );
}
