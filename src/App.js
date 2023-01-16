
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProjectForm from './components/ProjectForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectDetails from './components/ProjectDetails.js';
import TaskForm from './components/TaskForm';
import ViewTask from './components/ViewTask';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <Navbar />
          <Route exact path="/">
            <ProjectForm />
          </Route>
          <Route exact path="/ProjectDetails">
            <ProjectDetails />
          </Route>
          <Route exact path="/TaskForm">
            <TaskForm />
          </Route>
          <Route exact path="/ViewTask">
            <ViewTask />
          </Route>
      </div>
    </Router>
  </div>
  );
}

export default App;
