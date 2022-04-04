import ViewBugs from './Components/ViewBugs'
import BugReport from './Components/BugReport'
import CreateBugForm from './Components/CreateBug'
import UpdateBugForm from './Components/UpdateBug'
import { Routes, Route, Link } from "react-router-dom";


export function View(props) {
    console.log("view")
    console.log(JSON.stringify(props.Bugs))
    console.log(JSON.stringify(props.user))
    return (
        <div>
      <Routes>
        <Route path="/" element={<ViewBugs Bugs={props.Bugs} getDate={props.getDate} getTime={props.getTime}/>} />
        <Route path={"/BugReport/:id"} element={<BugReport Bugs={props.Bugs} getDate={props.getDate} getTime={props.getTime}/>} />
        <Route path="/CreateBugReport"  element={<CreateBugForm user={props.user} CreateBug={props.CreateBug} setrefreshData={props.setrefreshData}/>} />
        <Route path="/UpdateBugReport/:id"  element={<UpdateBugForm user={props.user} UpdateBug={props.UpdateBug} Bugs={props.Bugs} setrefreshData={props.setrefreshData} getDate={props.getDate} getTime={props.getTime}/>} />

      </Routes>
        
        </div>)
}