import React from 'react';
import {render} from 'react-dom';
import {Controller} from 'cerebral'
import {Container} from 'cerebral/react'
import controller from './controller'
import App from './components/App'
import './index.css'

render(
  <Container controller={controller}><App/></Container>,
  document.getElementById('root')
);
