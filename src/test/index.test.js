// https://cerebral.github.io/getting-real/10_testing.html

import React from 'react'
import {render} from 'react-dom';
import {mount} from 'enzyme'
import {Container} from 'cerebral/react'

import App from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
