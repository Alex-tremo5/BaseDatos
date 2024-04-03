import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CollaboratorsList from './components/List'
import FormCollaborator from './components/Form'
import bdCollaborators from './bd/collaborators.json'

function App() {
  return (
    <>
      <CollaboratorsList collaboratorsList = {bdCollaborators}/>
      <FormCollaborator/>
    </>
  )
}

export default App
