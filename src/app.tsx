import React, { Component } from 'react';
import { PersonCard } from './components/person-card';
import { Greeting } from './components/greeting';

export class App extends Component {
  render() {
    return (
      <div>
        <Greeting />
        <br/>
        <PersonCard />
      </div>
    );
  }
}
