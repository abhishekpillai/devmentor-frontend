import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

const getMentorships = gql`
  query getMentorships{
    mentorships {
      id
      mentor {
        name
      }
      mentee {
        name
      }
      actionItems {
        title
        owner {
          name
        }
      }
    }
  }
`;

const Mentorship = ({mentorship}) => (
  <li>
    {mentorship.mentor.name} + {mentorship.mentee.name}
    <ul>
      <h3>Action Items</h3>
      {
        mentorship.actionItems.map((ai) => {
          return (<li>{ai.title} - {ai.owner.name}</li>);
        })
      }
    </ul>
  </li>
);

class App extends Component {
  render() {
    const { mentorships } = this.props.data;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to DevMentor</h2>
        </div>
        <h2>Mentorships</h2>
        {
          mentorships && mentorships.map((mentorship, index) => {
            return (<Mentorship key={index} mentorship={mentorship} />);
          })
        }
      </div>
    );
  }
}

const AppWithData = graphql(getMentorships)(App);

export default AppWithData;
