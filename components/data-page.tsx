import { ActiveDimension, DimensionTypes } from "../interfaces/dimensions"
import Image from "next/image"
import { getSlicedDimensions } from "../lib/slice"

interface Data<T extends object> {
    type: string;
    dimensions: {
        [key: string]: string | null;
    }
    properties: T
}

interface Img {
    path: string;
    height: number;
    width: number;
}


interface DataPageProps {
    activeDimensions: ActiveDimension<DimensionTypes>[]
    data: Data<any>[];
}


export const DataPage = ({activeDimensions, data}: DataPageProps) => {
    const activeItems = data.filter(item => {
        for (let dim of activeDimensions) {
            const itemDimValue = item.dimensions[dim.name]
            if (!itemDimValue) {
                return false;
            } else if (dim.value.contains(itemDimValue)) {
                return true;
            }
        }
        return false;
    })

    const slicedDimensions = getSlicedDimensions(activeDimensions);
    
    const markup = activeItems.map(item => {
        if (item.type !== "img") {
            return null;
        }
        const labels = slicedDimensions.map(dimension => {
            return item.dimensions[dimension]
        })
        return (
            <Image src={(item as Data<Img>).properties.path}/>
        )

    })

    
}


