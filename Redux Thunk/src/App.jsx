import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import CreateTask from "./pages/CreateTask"
import TaskList from "./pages/TaskList"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateTask />} />
        <Route path="/tasklist" element={<TaskList />} />

      </Routes>
    </>
  )
}

export default App
