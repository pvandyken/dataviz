import { useState } from "react"
import { ActiveDimension, DimensionTypes } from "../interfaces/dimensions"

interface DimSelectorProps {
    dimension: ActiveDimension<DimensionTypes>,
    setDimensionSlice
}

export const DimSelector = (props: DimSelectorProps) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.dimension.name}
            </a>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
                <li key="all">
                    <a className={"dropdown-item " + (props.dimension.value ? "" : "active")} href="#" onClick={(e) => props.setDimensionSlice(props.dimension, null, e)}>All</a>
                </li>
                {
                    props.dimension.possibleValues.map(posibleVal => {
                        return <li key={posibleVal}>
                            <a className={"dropdown-item " + (props.dimension.value === posibleVal ? "active" : "")} href="#" onClick={(e) => props.setDimensionSlice(props.dimension, posibleVal, e)}>{posibleVal}</a>
                        </li>
                    })
                }
            </ul>
        </li>
    )
}
