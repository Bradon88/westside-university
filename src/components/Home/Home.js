import React, { Component } from 'react';
import {link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <link to='classlist/MATH1010'><button className='btn'>Math 1010</button></link>
        <link to='classlist/ENG2010'><button className='btn'>English 2010</button></link>
        <link to='classlist/BIO2020'><button className='btn'>Biology 2020</button></link>
      </div>
    );
  }
}
