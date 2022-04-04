
import Grid from '@material-ui/core/Grid';
import BugReports from './BugReports'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'


export default function ViewBugs(props){
    if (props.Bugs != false){
  return (
   <div>
 
       <div>
       
                <Grid  justifyContent='space-evenly' container spacing={3}>
                
                <Grid  item xs={12} md={9} ><Link to={"/CreateBugReport"}><button className="CreateBug">CreateBug</button></Link></Grid>
                {props.Bugs.map((Bug) => (
                  
                  <BugReports
                  key={Bug.BugID}
                  Bug={Bug}
                  getDate={props.getDate} 
                  getTime={props.getTime}/>
                  ))}
                  </Grid>
              
       </div>
   </div>
  );} 
  else return (<Grid  justifyContent='space-evenly' container spacing={3}>
                
  <Grid  item xs={12} md={9} ><Link to={"/CreateBugReport"}><button className="CreateBug">CreateBug</button></Link></Grid></Grid>);
}


