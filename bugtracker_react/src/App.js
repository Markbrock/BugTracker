import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);
const api = axios.create({
  baseURL: 'https://w3iyzol7mi.execute-api.us-east-1.amazonaws.com'

})
export default function App() {

  const [Bugs,setBugs] = useState([])
  const [currentBug,setcurrentBug] = useState([])
  React.useEffect(() => {
    api.get('/Dev/bugtracker').then((response) => {
    console.log(response.data.attributes)
    setBugs(response.data)  
    });
  }, []);
  
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          
          <h1>Hello {user.attributes.preferred_username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}