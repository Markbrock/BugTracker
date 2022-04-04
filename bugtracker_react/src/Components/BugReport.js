import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default function BugReport(props) {
    const { id } = useParams();
    
    const selectedBug = props.Bugs
                        .find(Bugs => Bugs.BugID === id);
    console.log(props.Bugs)
    function BugInfo() {
        return (
        <Grid  justifyContent='center' container spacing={1}>
        <Grid  item xs={10} md={10} >
        <div className="FullBugReport">
        <h3>BugID: {selectedBug.BugID}</h3>
        <h5>Type: {selectedBug.BugType}</h5>
        <h5>Status: {selectedBug.BugStatus}</h5>
        <h5>Priority: {selectedBug.Priority}</h5>
        <p>Description: {selectedBug.Description}</p>
        <p>Log: {selectedBug.log}</p>
        
        
        <Link to={"/UpdateBugReport/"  + id}><button>Update</button></Link>
        <div>
        
            {/* {selectedBug.log.map((log) => (
                <div key={log}>{log}</div>
            ))} */}
        </div>
        </div>
        </Grid>
        </Grid>)
        }
    
    return (
        <BugInfo/>
    )
}