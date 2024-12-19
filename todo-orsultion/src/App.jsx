
import { Tasks } from './components/Tasks'
import { Routes, Route } from "react-router";
import { Task } from './components/Task'
function App() {
  return (
    // <Tasks/>
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/task/:id" element={<Task />} />



    </Routes>
  );
}
export default App;
