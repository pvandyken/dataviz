import { useState } from "react"
import { ActiveDimension, DimensionTypes } from "../interfaces/dimensions"

interface DimSelectorProps {
    dimension: ActiveDimension<DimensionTypes>

}

export const DimSelector = (props: DimSelectorProps) => {
    const [val, setVal] = useState(props.dimension.value)
    const setValue = (e) => {
        setVal(e.target.value)
    }

    return (

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.dimension.name}
            </a>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
                <input value={val} onChange={setValue} />
                {
                    props.dimension.possibleValues.map(posibleVal => {

                        return <li key={posibleVal}>
                            <input type="checkbox" className="btn-check" id={String(posibleVal)} autocomplete="off" />
                            <label className ="btn btn-outline-primary" for="btn-check-outlined">{posibleVal}</label>
                        </li>
                    })
                }

            </ul>
        </li>



    )

}