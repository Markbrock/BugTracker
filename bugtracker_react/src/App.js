
import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { View } from './View';
import { useLocation } from 'react-router-dom';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
const api = axios.create({
  baseURL: 'https://w3iyzol7mi.execute-api.us-east-1.amazonaws.com'

})

function UpdateBug(BugID,Date,Type,Priority,Status){
  console.log(BugID)
  console.log(Date)
  console.log(Type)
  console.log(Priority)
  console.log(Status)
  api.patch('/Dev/bugtracker',{
    "BugID": BugID,
    "Date": Date,
    "Type": Type,
    "Priority": Priority,
    "Description": "A Medium Priority UI BUG",
    "Status": Status
  }).then((response) => {
  console.log(JSON.stringify(response))
  });
  
  }
function getDate(seconds){
  const time = seconds * 1000
  let date = new Date(time)
  return (date)
}
function getTime(seconds){
  const date = getDate(seconds)
  let time = date.toLocaleString('en-US', {
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
})
  return (time)
}

function CreateBug(user,Type,Priority,Description){
  console.log(user)
  console.log(Description)
  console.log(Type)
  console.log(Priority)
  console.log(Description)
  api.post('/Dev/bugtracker',{
    "User": user,
    "Type": Type,
    "Priority": Priority,
    "Description":Description,
    "Status": "active"
  }).then((response) => {
  console.log(JSON.stringify(response))
  });
  }
export default function App() {
  const [Bugs,setBugs] = useState([])
  const [currentBug,setcurrentBug] = useState([])
  const [refreshData,setrefreshData] = useState('False')

  

  React.useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await api.get('/Dev/bugtracker')
        setBugs(response.data)
        setrefreshData('False')  
        console.log(JSON.stringify(Bugs))
          
      } catch (error) {
        console.log("error", error)
      }
    }
    fetchData()
      }, [refreshData]);
  
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h2>{user.attributes.preferred_username}</h2>
          <div className='SignOut'><button onClick={signOut}>Sign out</button></div>
          
          <View 
          CreateBug={CreateBug} 
          UpdateBug={UpdateBug} 
          user={user.attributes.preferred_username} 
          Bugs={Bugs}
          setrefreshData={setrefreshData}
          getDate={getDate}
          getTime={getTime}/>
          
        </main>
      )}
    </Authenticator>
  );
}