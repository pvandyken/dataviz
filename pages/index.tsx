import type { NextPage } from 'next'
import type { InferGetStaticPropsType } from 'next'
import path from 'path'
import { promises as promises } from 'fs'
import fs from 'fs'
import { DimensionManager } from '../components/dimension-manager'
import { Category, Dimension } from "../interfaces/dimensions"


export const getStaticProps = async () => {
    const sizeOf = require('image-size');
    const dataFile = path.join(process.cwd(), 'data.json');
    const dataObject = await promises.readFile(dataFile, 'utf-8');
    const data = await JSON.parse(dataObject);
    const fullCategories = data.categories.map((category) => {
        return {
            id: category.id,
            name: category.name,
            values: category.values.map(value => {
                const dimensions = sizeOf(path.join(process.cwd(), "public", value.properties.path))
                return {
                    ...value,
                    properties: {
                        ...value.properties,
                        height: dimensions.height,
                        width: dimensions.width
                    }, 
                }
            }),
            dimensions: category.dimensions.map(
                (dimension) => data.dimensions.filter(
                    (el) => el.name === dimension
                )[0]
            )
        }
    })
    return {
        props: {
            fullCategories: fullCategories
        }
    }
}

const Home: NextPage = ({fullCategories}: InferGetStaticPropsType<typeof getStaticProps>) => {
    
    return (
        <DimensionManager categories={fullCategories} />
    )
}




export default Home
