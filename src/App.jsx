import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormCollaborator from './components/Form'
import bdCollaborators from './bd/collaborators.json'
import NavBar from './components/Browser'

function App() {
  return (
    <>
      <div>
      <NavBar collaboratorsList = {bdCollaborators}/>
      </div>
      <FormCollaborator/>
    </>
  )
}

export default App
