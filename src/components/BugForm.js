import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BugForm = (props) => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBug(name);
        setName("");
    }

    return (
       
        <Form className="form" onSubmit={handleSubmit}>
            <Form.Group controlId="bug-input">
                <Form.Control
                    type="text"
                    placeholder="Enter a bug"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="outline-primary" className="shadow" type="submit">Save</Button>
        </Form>
    );
}

export default BugForm;