import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import './App.css'
import FormCollaborator from './components/Form'
import bdCollaborators from './bd/collaborators.json'
import NavBar from './components/Browser'

function App() {
  const [collaborators, setCollaborators] = useState(bdCollaborators)

  const addNewCollaborator = (newCollaborator) => {
    setCollaborators([...collaborators, newCollaborator])
  }

  return (
    <>
      <div>
      <NavBar collaboratorsList = {collaborators}/>
      </div>
      <FormCollaborator addNewCollaborator = {addNewCollaborator} totalCollaborators = {collaborators.length}/>
    </>
  )
}

export default App
