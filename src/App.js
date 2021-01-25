import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { Card, ButtonGroup, Button, Badge, ListGroup } from 'react-bootstrap';
import './App.css';
import Bug from './components/Bug';
import FilterButton from './components/FilterButton';
import BugForm from './components/BugForm';

const FILTER_MAP = {
  All: () => true,
  Active: bug => !bug.resolved,
  Ressolved: bug => bug.resolved
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [bugs, setBugs] = useState(props.bugs);
  const [filter, setFilter] = useState('All')

  const addBug = (name) => {
    const newBug = { id: "bug-" + nanoid(), name: name, resolved: false };
    setBugs([...bugs, newBug]);
  }

  const deleteBug = (id) => {
    const remainingBugs = bugs.filter(bug => id !== bug.id);
    setBugs(remainingBugs);
  }

  const resolved = (id) => {
    const updatedBugs = bugs.map(bug => {
      if (id === bug.id) {
        return { ...bug, resolved: !bug.resolved }
      }
      return bug;
    });
    setBugs(updatedBugs);
  }

  const editBug = (id, newName) => {
    const editedBugList = bugs.map(bug => {
      if (id === bug.id) {
        return { ...bug, name: newName }
      }
      return bug;
    });
    setBugs(editedBugList);
  }

  const bugList = bugs
    .filter(FILTER_MAP[filter])
    .map(bug => (
      <Bug
        key={bug.id}
        id={bug.id}
        name={bug.name}
        resolved={resolved}
        deleteBug={deleteBug}
        editBug={editBug}
      />
    ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));


  const textNoun = bugList.length !== 1 ? 'bugs' : 'bug';
  const numOfUnRessolved = `${bugList.length} ${textNoun} remaining`;

  return (
    <>
      <Card className="card shadow">
        <Card.Body>
          <Card.Header>
            <Card.Title>Bug Tracker App</Card.Title>
          </Card.Header>

          {filterList}

          <BugForm addBug={addBug} />

          <Badge style={{ padding: 10 }} className="badge" pill variant="warning">
            {numOfUnRessolved}
          </Badge>

          {bugList}

        </Card.Body>
      </Card>
    </>
  );
}

export default App;
