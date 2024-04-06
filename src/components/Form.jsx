import React, { useState } from 'react'
import Alert from './Alert'

function FormCollaborator({ addNewCollaborator, totalCollaborators }) {

    const [nombre, setName] = useState("")
    const [correo, setEmail] = useState("")
    const [edad, setAge] = useState("")
    const [cargo, setPosition] = useState("")
    const [telefono, setPhone] = useState("")

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendForm = (e) => {
        e.preventDefault()

        const newCollaborator = {
            id: (totalCollaborators + 1).toString(),
            nombre,
            correo,
            edad,
            cargo,
            telefono
        };

        if (newCollaborator.correo === "" ||
            newCollaborator.nombre === "" ||
            newCollaborator.edad === "" ||
            newCollaborator.cargo === "" ||
            newCollaborator.telefono === "") {
            setError(true);
            setSuccess(false);
            return;
        }

        addNewCollaborator(newCollaborator)
        setName('');
        setEmail('');
        setAge('');
        setPosition('');
        setPhone('');

        setError(false);
        setSuccess(true);
    }

    return (
        <>
            <form className='registro' onSubmit={sendForm}>
                <h2>Add collaborator</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={nombre}
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        value={correo}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        min={18}
                        max={100}
                        id="inputAge"
                        value={edad}
                        placeholder='Age'
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="inputPosition"
                        value={cargo}
                        placeholder='Position'
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="inputPhone"
                        value={telefono}
                        max={9999999999}
                        placeholder='Phone number'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label
                        className="form-check-label"
                        for="exampleCheck1">Check me out</label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    id='addButton'>Add</button>

                {error && <Alert isError={true} message="Debe completar todos los campos" />}
                {success && <Alert isError={false} message="Registro exitoso" />}
            </form>
        </>
    )
}

export default FormCollaborator
