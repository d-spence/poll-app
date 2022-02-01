import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import SelectionsList from './SelectionsList';

const testSelections = [
  {title: 'option 1', id: uuid()},
  {title: 'option 2', id: uuid()},
  {title: 'option 3', id: uuid()}
]

const CreatePoll = () => {
  const [title, setTitle] = useState('New Poll');
  const [selections, setSelections] = useState(testSelections);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(`Submitted new poll '${title}'`);
    // console.log(selections);
  }

  return (
    <div>
      <h1>Create A New Poll</h1>
      <form className="create-poll" onSubmit={onSubmit}>
        <input
          className="create-poll-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <SelectionsList selections={selections} setSelections={setSelections} />
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;
