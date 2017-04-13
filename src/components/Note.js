import React from 'react';

export default function Note({
    note: { id, created, creator, text },
}) {
  return (
    <div>
      <input
        type="text"
        value={text}
        readOnly={true}
      />
    </div>
  );
}
