import { useState } from "react"
import Grid from '@material-ui/core/Grid';
import { Link  } from "react-router-dom";
export default function CreateBugForm(props) {

    const [Type,setType] = useState('Test')
    const [Priority,setPriority] = useState('Critical')
    const [Description,setDescription] = useState('')
   
    function Validate(){
        console.log(Priority)
        console.log(Description)
        console.log(Type)
        console.log(Priority)
        console.log(Description)
        props.setrefreshData('True')
        props.CreateBug(props.user,Type,Priority,Description)
        
    }
    // "User": "Tom",
    // "Type": "test",
    // "Priority": "med",
    // "Description": "test description ",
    // "Status": "active"
    return (
    <Grid  justifyContent='center' container spacing={1}>
    <Grid  item xs={10} md={10} >
    <div className="Forms">
    <form>
        <label>
         Description:
         <br/>
          <textarea type="Description" value={Description}  onChange={event => setDescription(event.target.value)} />
          
        </label>
        <br/>
        <label>
         Type:
            <select id="Type" name="Type" value={Type} onChange={event => setType(event.target.value)}>
                <option value="Test">Test</option>
                <option value="UI">UI</option>
                <option value="Route">Route</option>
                <option value="Validation">Validation</option>
            </select>
        </label>
        <br/>
        <label>
         Priority:
            <select  id="Priority" name="Priority" value={Priority} onChange={event => setPriority(event.target.value)}>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </label>
        <br/>
        <br/>
        
      </form>
      <Link to={"/"}><button onClick={() => Validate()}>Submit</button></Link>
</div>
</Grid>
    </Grid>)

}