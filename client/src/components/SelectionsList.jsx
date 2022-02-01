import React from 'react';
import { v4 as uuid } from 'uuid';
import Selection from './Selection';

const SelectionsList = ({ selections, setSelections }) => {
  const addSelection = () => {
    setSelections([...selections, {id: uuid(), title: 'new'}])
  }

  const deleteSelection = (id) => {
    const newSelections = selections.filter(selection => selection.id !== id);

    setSelections(newSelections);
  }

  const updateSelection = (id, title) => {
    const newSelections = selections.map(selection => {
      if (selection.id === id) {
        return {...selection, title: title};
      } else {
        return selection
      }
    });

    setSelections(newSelections);
  }

  return (
    <div className="selections-list">
      <ul>
        {selections.map((selection, idx) => (
          <Selection
            key={idx}
            data={selection}
            deleteSelection={deleteSelection}
            updateSelection={updateSelection}
          />
        ))}
      </ul>
      <button onClick={() => addSelection()}>Add Selection</button>
    </div>
  );
};

export default SelectionsList;
