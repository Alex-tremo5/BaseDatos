import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CollaboratorsList from './components/List'
import FormCollaborator from './components/Form'
import bdCollaborators from './bd/collaborators.json'
import NavBar from './components/Browser'

function App() {
  return (
    <>
      <NavBar collaboratorsList = {bdCollaborators}/>
      {/* <CollaboratorsList collaboratorsList = {bdCollaborators}/> */}
      {/* <FormCollaborator/> */}
    </>
  )
}

export default App
