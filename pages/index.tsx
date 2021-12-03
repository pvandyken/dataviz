import type { NextPage } from 'next'
import type { InferGetStaticPropsType } from 'next'
import path from 'path'
import { promises as fs } from 'fs'
import { DimensionManager } from '../components/dimension-manager'
import { Category, Dimension } from "../interfaces/dimensions"

const dimension1: Dimension<number> = {name: "dimension1", possibleValues: [1, 2], type: "idk"} 
const dimension2: Dimension<number> = {name: "dimension2", possibleValues: [3, 4], type: "idk"}
const dimension3: Dimension<number> = {name: "dimension3", possibleValues: [5, 6], type: "idk"}
const category1 : Category = {
    id: "test",
    name: "test",
    dimensions: [dimension1]
}
const category2 : Category = {
    id: "test2",
    name: "test2",
    dimensions: [dimension2, dimension3]
}
const exampleProps = [
    category1,
    category2
]

export const getStaticProps = async () => {
    const dataFile = path.join(process.cwd(), 'data.json');
    const dataObject = await fs.readFile(dataFile, 'utf-8');
    const data = await JSON.parse(dataObject);
    return {
        props: data
    }
}

const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const fullCategories = props.categories.map((category) => {
        return {
            id: category.id,
            name: category.name,
            values: category.values,
            dimensions: category.dimensions.map(
                (dimension) => props.dimensions.filter(
                    (el) => el.name === dimension
                )[0]
            )
        }
    })
    return (
        <DimensionManager categories={fullCategories} />
    )
}

export default Home
