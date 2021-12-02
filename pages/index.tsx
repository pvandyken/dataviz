import type { NextPage } from 'next'
import { DimensionManager } from '../components/dimension-manager'

const exampleProps = [
    {
        id: "test",
        name: "test",
        dimensions: [{name: "dimension1", possibleValues: [1, 2]}]
    },
    {
        id: "test2",
        name: "test2",
        dimensions: [{name: "dimension2", possibleValues: [3, 4]},{name: "dimension3", possibleValues: [5, 6]}]
    }
]

const Home: NextPage = () => {
    return (
        <DimensionManager categories={exampleProps} />
    )
}

export default Home
