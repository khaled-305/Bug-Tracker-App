import React, { useState } from 'react';
import { Card, Form, ButtonGroup, Button, Badge, ListGroup } from 'react-bootstrap';
import '../App.css';

const Bug = (props) => {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editBugs(props.id, newName);
        setNewName('');
        setEditing(false);
    }

    const editingTemplate = (
        <Form className="form" onSubmit={handleSubmit}>
            <Form.Group>
                <label htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <Form.Control
                    type="text"
                    placeholder="Edith bug"
                    name="text"
                    autoComplete="off"
                    id={props.id}
                    value={newName}
                    onChange={handleChange}
                />
                <ButtonGroup>
                    <Button variant="outline-danger" className="shadow" onClick={() => setEditing(false)}>
                        Cancel
              <span> renaming {props.name}</span>
                    </Button>
                    <Button variant="outline-primary" className="shadow">
                        Save
              <span> new name for {props.name}</span>
                    </Button>
                </ButtonGroup>
            </Form.Group>
        </Form>
    );

    const viewTemplate = (
        <div className="container">
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.resolved}
                onChange={() => props.resolved(props.id)}
            />
            <label htmlFor={props.id}>
                {props.name}
            </label>

            <ButtonGroup>
                <Button
                    variant="outline-primary" className="shadow"
                    onClick={() => setEditing(true)}>
                    Edit <span>{props.name}</span>
                </Button>
                <Button
                    variant="outline-danger" className="shadow"
                    onClick={() => props.deleteBug(props.id)}
                >
                    Delete <span>{props.name}</span>
                </Button>
            </ButtonGroup>
        </div>
    );

    return (
        <>
            <ListGroup>
                <ListGroup.Item>{isEditing ? editingTemplate : viewTemplate}</ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default Bug;