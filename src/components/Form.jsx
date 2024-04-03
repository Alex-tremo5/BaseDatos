import React from 'react'

function FormCollaborator(props) {
    return (
        <form>
            <div className="mb-3">
                <label for="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName"/>
            </div>
            <div className="mb-3">
                <label for="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail"/>
            </div>
            <div className="mb-3">
                <label for="inputAge" className="form-label">Age</label>
                <input type="number" className="form-control" id="inputAge"/>
            </div>
            <div className="mb-3">
                <label for="inputPosition" className="form-label">Position</label>
                <input type="text" className="form-control" id="inputPosition"/>
            </div>
            <div className="mb-3">
                <label for="inputPhone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="inputPhone"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default FormCollaborator