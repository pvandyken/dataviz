import { useState } from "react"
import { ActiveDimension, Category, DimensionTypes } from "../interfaces/dimensions"
import { CategorySelector } from "./category-selector"
import { Navbar } from "./navbar"

type ActiveDimensions = ActiveDimension<DimensionTypes>[] | undefined;


interface DimensionManagerProps {
    categories: Category[];
}


export const DimensionManager = (props: DimensionManagerProps) => {
    const [activeDimensions, setActiveDimensions] = useState<ActiveDimensions>(undefined);

    const setDimensionSlice = (dimension, slice) => {
        dimension = {...dimension, value: slice};
        setActiveDimensions(
            activeDimensions.map((activeDimension) => activeDimension.name === dimension.name ? dimension : activeDimension)
        )
    }

    return (
        <div className="container">
            <div className="row">
                <Navbar activeDimensions={activeDimensions} setDimensionSlice={setDimensionSlice} />
            </div>
            <div className="row">
                <div className="col-3">
                    <CategorySelector categories={props.categories} setActiveDimensions={setActiveDimensions} />
                </div>
                <div className="col-9">
                    <h1 className="display-1">Dataviz</h1>
                    <p>This is the main body of the page.</p>
                    <p>Active dimensions: {activeDimensions ? activeDimensions.map((dimension) => dimension.value).join(", ") : "None yet."}</p>
                </div>
            </div>
        </div>
    )
}
