import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Note from '../../src/components/Note';

function buildStory(attrs = {}) {
  const note = {
    id: Math.round(Math.random() * 1000000).toString(),
    created: Date.now(),
    creator: 'Abhi Pillai',
    text: 'So much learnings!',
    ...attrs,
  };

  return <Note {...{ note }} />;
}

storiesOf('Note', module)
 .add('default note', () => buildStory());
