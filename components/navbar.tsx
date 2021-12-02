<<<<<<< HEAD
export const Navbar = () => {
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

  </div>
</nav>
}



=======
=======
import { useState } from "react"
import {ActiveDimension, DimensionTypes} from "../interfaces/dimensions"
import {DimSelector} from "./dimensionsSelector"
>>>>>>> 6a2a35f... Prog on NavBar

interface NavBarProps {
    activeDimensions:  ActiveDimension<DimensionTypes>[]

}

export const Navbar = (props: NavBarProps) => {
    const [val, setVal] = useState(props.activeDimensions[0].value)
    const setValue = (e) => {
        setVal(e.target.value)
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid justify-content-end">
          <ul className="navbar-nav">
            
                {props.activeDimensions.map(dim =>{
                    return <DimSelector dimension={dim}/>
                })}      
          </ul>
    </div>
  </nav>
  )
    
}
>>>>>>> 9e5c386... nav bar added
