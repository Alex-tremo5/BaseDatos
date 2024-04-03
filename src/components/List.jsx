import Table from 'react-bootstrap/Table';

const CollaboratorsList = ({ collaboratorsList }) => {
    console.log(collaboratorsList)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
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
    )
}

export default CollaboratorsList