import { useParams,useNavigate, Link  } from "react-router-dom";
import { useState } from "react"
import Grid from '@material-ui/core/Grid';
export default function UpdateBugForm(props) {
    const { id } = useParams();
    console.log(props.Bugs)
    
    const selectedBug = props.Bugs
                        .find(Bugs => Bugs.BugID === id);
    console.log("selectedBug")
    console.log(selectedBug)

    const [BugType,setBugType] = useState(selectedBug.BugType)
    const [Priority,setPriority] = useState(selectedBug.Priority)
    const [Description,setDescription] = useState(selectedBug.Description)
    const [Status,setStatus] = useState(selectedBug.BugStatus)
    console.log("BugType")
    console.log(BugType)
    console.log("Priority")
    console.log(Priority)
    function Validate(){
        console.log(selectedBug.BugID)
        console.log(selectedBug.Date)
        console.log(BugType)
        console.log(Priority)
        props.UpdateBug(selectedBug.BugID,selectedBug.Date,BugType,Priority,Status)
        props.setrefreshData('True')

    }

    return (
    <Grid  justifyContent='center' container spacing={1}>
        <Grid  item xs={10} md={10} >
        <div>
        <h1>Update Bug Report</h1>
        <form className="Forms">
            <label>
            Description:
            <br/>
            <textarea type="Description" value={Description}  onChange={event => setDescription(event.target.value)} />
            
            </label>
            <br/>
            <label>
            Type : 
                <select  id="Type" value={BugType} onChange={event => setBugType(event.target.value)}>
                    <option value="Test">Test</option>
                    <option value="UI">UI</option>
                    <option value="Route">Route</option>
                    <option value="Validation">Validation</option>
                </select>
            </label>
            <br/>
            <label>
            Status : 
                <select  id="Priority" value={Priority} onChange={event => setPriority(event.target.value)}>
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </label>
            <br/>
            <label>
            Status : 
                <select  id="Status" value={Status} onChange={event => setStatus(event.target.value)}>
                    <option value="Active">Active</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>
            </label>
        </form>
        <br/>
        <Link to={"/BugReport/" + selectedBug.BugID}><button onClick={() => Validate()}>Update</button></Link>
        </div>
        </Grid>
    </Grid>)

}