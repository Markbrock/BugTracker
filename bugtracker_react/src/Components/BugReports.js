import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';



  export default function BugReports(props) {
 

        return (



          
            <Grid  item xs={12} md={9} >
            <Link style={{ textDecoration: 'none' }} to={"/BugReport/" + props.Bug.BugID}>
                <Card>
                  <CardContent className="BugReportCard">


                  <h4>BugID: {props.Bug.BugID}</h4>
                  <h5>Date: {String(props.getDate(props.Bug.Date))}</h5>
                  <h4>Status: {props.Bug.BugStatus}</h4>
                  <h4>Type: {props.Bug.BugType}</h4>
                  <h4>Priority: {props.Bug.Priority}</h4>
                  </CardContent>


                </Card>
                </Link>
            </Grid>
          )}
    

