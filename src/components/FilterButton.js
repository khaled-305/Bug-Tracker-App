import React from 'react';
import { Card, Form, ButtonGroup, Button, Badge, ListGroup } from 'react-bootstrap';

const FilterButton = (props) => {
    return (
        <>
        <ButtonGroup aria-label="filter">
            <Button
                variant="outline-primary"
                className="btn shadow"
                aria-pressed={props.isPressed}
                onClick={() => props.setFilter(props.name)}
            >
                <span>Show </span>
                <span>{props.name}</span>
                <span> bugs</span>
            </Button>
            </ButtonGroup>
        </>
    );
}

export default FilterButton;