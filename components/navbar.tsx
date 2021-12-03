import { useState } from "react"
import { DimSelector } from "./dimensionsSelector"
import { ActiveDimension, DimensionTypes } from "../interfaces/dimensions"

interface NavBarProps {
    activeDimensions:  ActiveDimension<DimensionTypes>[],
    setDimensionSlice
}

export const Navbar = (props: NavBarProps) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid justify-content-end">
                  <ul className="navbar-nav">
                    
                        {props.activeDimensions? props.activeDimensions.map(dim =>{
                            return <DimSelector dimension={dim} setDimensionSlice={props.setDimensionSlice}/>
                        }) : <li>No category selected.</li>}      
                  </ul>
            </div>
        </nav>
    )
    
}
