import { useState } from "react"
import { ActiveDimension, Category, DimensionTypes } from "../interfaces/dimensions"
import { CategorySelector } from "./category-selector"

type ActiveDimensions = ActiveDimension<DimensionTypes>[] | undefined;


interface DimensionManagerProps {
    categories: Category[];
}


export const DimensionManager = (props: DimensionManagerProps) => {
    const [activeDimensions, setActiveDimensions] = useState<ActiveDimensions>(undefined);

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <CategorySelector className="col-3" categories={props.categories} setActiveDimensions={setActiveDimensions} />
                </div>
                <div className="col-9">
                    <h1 className="display-1">Dataviz</h1>
                    <p>This is the main body of the page.</p>
                    <p>Active dimensions: {activeDimensions ? activeDimensions.map((dimension) => dimension.name).join(", ") : "None yet."}</p>
                </div>
            </div>
        </div>
    )
}
