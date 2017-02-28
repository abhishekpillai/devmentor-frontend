import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

const getMentorships = gql`
  query getMentorships{
    mentorships {
      text
    }
  }
`;

const Mentorship = ({mentorship}) => (
  <li>{mentorship.mentor.name} + {mentorship.mentee.name}</li>
);

class App extends Component {
  render() {
    // this.props.data.mentorships.map((mentorship) => {
    //     return (<Mentorship mentorship={mentorship} />);
    //   })
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, Abhi</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Mentorships</h2>
      </div>
    );
  }
}

const AppWithData = graphql(getMentorships)(App);

export default AppWithData;
