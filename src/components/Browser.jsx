import { useState } from "react"
import CollaboratorsList from "./List"


const NavBar = ({ collaboratorsList }) => {
  const [search, setSearch] = useState("")

  const searcher = (e) => {
     setSearch(e.target.value)
   }

  const filteredCollab = collaboratorsList.filter(
    collaborator => {
      return (
        collaborator
        .nombre
        .toLowerCase()
        .includes(search.toLowerCase()) 
      );
    }
  );

  function searchList() {
    if (filteredCollab.length === 0) {
      return (
        <div>
           <CollaboratorsList collaboratorsList = {filteredCollab}/> 
          <h4>No collaborator found</h4>
        </div>
      )
    } else {
  	return (
      <CollaboratorsList collaboratorsList = {filteredCollab}/> 
    )
  }
	  }  


return (
    <>
 <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={searcher}/>
    </form>
  </div>
    </nav> 
    {searchList()}
    </>
)

}

export default NavBar
