import { CategorySelector } from "../components/category-selector"

const exampleProps = [
    {
        id: "test",
        name: "test",
        dimension: [{name: "dimension1", possibleValues: [1, 2]}]
    },
    {
        id: "test2",
        name: "test2",
        dimension: [{name: "dimension1", possibleValues: [3, 4]}]
    }
]

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <CategorySelector className="col-3" categories={exampleProps}/>
                </div>
                <div className="col-9">
                    <h1 className="display-1">Dataviz</h1>
                    <p>This is the main body of the page.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
