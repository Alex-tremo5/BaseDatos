import Table from 'react-bootstrap/Table';

const CollaboratorsList = ({ collaboratorsList }) => {
    console.log(collaboratorsList)
    return (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {collaboratorsList.map((collaborator) => (
                    <tr key={collaborator.id} >
                        <td>{collaborator.nombre}</td>
                        <td>{collaborator.correo}</td>
                        <td>{collaborator.edad}</td>
                        <td>{collaborator.cargo}</td>
                        <td>{collaborator.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default CollaboratorsList