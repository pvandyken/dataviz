import { ActiveDimension, DimensionTypes } from "../interfaces/dimensions"
import Image from "next/image"
import { getSlicedDimensions } from "../lib/slice"
import { Data, Img } from "../interfaces/data"




interface DataPageProps {
    activeDimensions: ActiveDimension<DimensionTypes>[]
    activeItems: Data<any>[];
}


export const DataPage = (props: DataPageProps) => {


    const slicedDimensions = getSlicedDimensions(props.activeDimensions);

    
    const markup = props.activeItems.map((item, i) => {
        if (item.type !== "image") {
            return null;
        }
        const labels = slicedDimensions.map((dimension, i) => {
            return <p key={i}>{item.dimensions[dimension]}</p>
        })
        const properties = (item as Data<Img>).properties;
        return (
            <div key={i} className="col">
                <Image 
                    src={properties.path}
                    height={properties.height}
                    width={properties.width}
                />
                {labels}
            </div>
        )

    })

    return (
        <div className="container">
            <div className="row">{markup}</div>
        </div>
    )

    
}


