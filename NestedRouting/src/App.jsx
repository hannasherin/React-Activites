import { Route,Routes } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Profile from "./Components/Profile"
import Report from "./Components/Report"
import Settings from "./Components/Settings"

function App() {

  return (
    <>
    <Routes>
      {/* parent  */}
      <Route path="/dashboard" element={<Dashboard/>}>
      {/* child  */}
      <Route path="profile" element={<Profile/>}/>
      <Route path="report" element={<Report/>}/>
      <Route path="settings" element={<Settings/>}/>
      </Route>
    </Routes>
     
    </>
  )
}

export default App
