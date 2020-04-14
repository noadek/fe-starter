import React, { PureComponent } from 'react';

import PersonCard from './components/person-card';
import Greeting from './components/greeting';
import User from './components/user';
import Author from './components/author';

class App extends PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <Greeting firstName="Bruce" lastName="Wayne" />
        <br />
        <PersonCard />
        <User />
        <Author />
      </div>
    );
  }
}

export default App;
