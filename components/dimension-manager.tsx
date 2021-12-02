import { useState } from "react"
import { ActiveDimension, DimensionTypes } from "../interfaces/dimensions"

type ActiveDimensions = ActiveDimension<DimensionTypes>[] | undefined;

export const DimensionManager = () => {
    const [activeDimensions, setActiveDimensions] = useState<ActiveDimensions>(undefined);

    return (
        <div></div>
    )

}