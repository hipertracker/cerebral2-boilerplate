import React from 'react';
import {render} from 'react-dom';
import {Controller} from 'cerebral'
import {Container} from 'cerebral/react'
import App from './components/App';
import './index.css';

const controller = Controller({
  options: {
    // Use strict rendering
    strictRender: true,
    // Expose props.signals with all signals in components
    signalsProp: false
  },
  // Defines the top level state
  state: {
    welcome: "Hello Cerebral!"
  },
  // Defines the top level signals
  signals: {},
  // Defines the top level modules
  modules: {}
})

render(
  <Container controller={controller}><App/></Container>,
  document.getElementById('root')
);
