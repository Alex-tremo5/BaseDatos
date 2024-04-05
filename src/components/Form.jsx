import React, { useState } from 'react'
import CollaboratorsList from '../bd/collaborators.json'

function FormCollaborator(props) {

    const [nameCollab, setNameCollab] = useState ("")
    const [collabList, setCollabList] = useState ([CollaboratorsList])

    const sendForm = (e) => {
        e.preventDefault()
        setCollabList([...collabList, nameCollab])
        setNameCollab("")
    }

    const capturarInput = (e) => {
        setNameCollab(e.target.value)
 }

    return (
        <>
        <form className='registro' onSubmit = {sendForm}>
            <h2>Add collaborator</h2>
            <div className="mb-3">
                <input type="text" className="form-control" id="inputName" placeholder='Name' onChange = {capturarInput}/>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="inputEmail" placeholder='Email'/>
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" min={18} max={100} id="inputAge" placeholder='Age'/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="inputPosition" placeholder='Position'/>
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" id="inputPhone" max={9999999999} placeholder='Phone number'/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" id='addButton'>Add</button>
        </form>
        </>
    )
}

export default FormCollaborator