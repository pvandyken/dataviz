import type { NextPage } from 'next'
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

const Home: NextPage = () => {
    return (
      <div className="app">
        <DimensionManager categories={exampleProps} />
      </div>
    )
}




export default Home
