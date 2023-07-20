import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    const [form, setForm] = useState({});
    const [validated, setValidated] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const validateErrors = () => {
        const { name, email, message } = form;
        const errors = {};

        if (!name || name === '') {
            errors.name = 'Please enter your name.';
        }

        if (!email || email === '') {
            errors.email = 'Please enter your email.';
        } else if (!/@/.exec(email)) {
            errors.email = 'Please enter a valid email.';
        }

        if (!message || message === '') {
            errors.message = 'Please enter a message.';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        event.preventDefault();

        const errors = validateErrors();

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
    }

    return (
        <div>
            <h1>Contact</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        onChange={e => setField('name', e.target.value)}
                        onBlur={e => setErrors(e.target.value === '' ? { name: 'Please enter your name.' } : {})}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    );
}
