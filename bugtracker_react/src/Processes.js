
import React, { useEffect, useState} from 'react';
const api = axios.create({
    baseURL: 'https://w3iyzol7mi.execute-api.us-east-1.amazonaws.com'
  
  })
export default function Processes() {

    React.useEffect(() => {
      api.get('/Dev/bugtracker').then((response) => {
      console.log(response.data.attributes)
      setBugs(response.data)  
      });
    }, []);

    const [Bugs,setBugs] = useState([])
    const [currentBug,setcurrentBug] = useState([])
   
  }