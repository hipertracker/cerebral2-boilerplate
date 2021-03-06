import React from 'react';
import {connect} from 'cerebral/react'

import logo from './logo.svg';
import './index.css';

import GithubInfo from './GithubInfo'

export default connect({
    welcome: 'app.welcome'
  },
  function App({welcome}) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>{welcome}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> save to reload. See Cerebral 2 home page for more
          details <a href="https://cerebral.github.io/">https://cerebral.github.io/</a>.
        </p>
        <hr/>
        <GithubInfo title=""/>
      </div>
    )
  }
)
