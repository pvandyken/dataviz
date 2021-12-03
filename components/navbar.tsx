import { useState } from "react"
import { DimSelector } from "./dimensionsSelector"
import { ActiveDimension, DimensionTypes } from "../interfaces/dimensions"

interface NavBarProps {
    activeDimensions:  ActiveDimension<DimensionTypes>[]

}

export const Navbar = (props: NavBarProps) => {
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
