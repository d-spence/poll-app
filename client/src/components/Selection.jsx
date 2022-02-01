import React from 'react';

const Selection = ({ data, deleteSelection, updateSelection }) => {
  return (
  <li className="selection-edit">
    {/* <span>{data.id}</span> */}
    <button onClick={() => deleteSelection(data.id)}>Delete</button>
    <input value={data.title} onChange={(e) => updateSelection(data.id, e.target.value)} />
  </li>);
};

export default Selection;
