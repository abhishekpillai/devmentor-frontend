import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories');
  require('../src/stories/Note.js');
}

configure(loadStories, module);
