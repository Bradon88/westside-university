import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
    <HashRouter>
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <link to='/' className='links'>Home</link>
              <link to='/about' className='links'>About</link> 
          </div>
        </nav>
        {routes}
      </div>
    </HashRouter>
    )
  }
}