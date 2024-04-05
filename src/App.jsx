import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormCollaborator from './components/Form'
import bdCollaborators from './bd/collaborators.json'
import NavBar from './components/Browser'

function App() {
  return (
    <>
      <NavBar collaboratorsList = {bdCollaborators}/>
      <FormCollaborator/>
    </>
  )
}

export default App
