import React from 'react';
import loadable from '@loadable/component';
import Trading from './Trading';

const SomeLoadable = loadable(() => import('./SomeLoadable'));

const App = () => (
  <div>
    <h1>SSR with Loadable Components</h1>
    <Trading />
    <SomeLoadable />
  </div>
);

export default App; 