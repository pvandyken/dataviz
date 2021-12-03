import { Category } from "../interfaces/dimensions"
import React from "react"

interface CategorySelectorProps {
    categories: Category[];
    setActiveDimensions;
    setActiveCategory;
    activeCategory: Category | undefined;
}

interface CategoryOptionProps {
    category: Category;
    active: boolean;
    setActiveCategory;
}

class CategoryOption extends React.Component<CategoryOptionProps, {}> {
    constructor(props: CategoryOptionProps) {
        super(props);
    }
    render() {
        
        return (
            <li className="nav-item">
                <a className={"nav-link " + (this.props.active ? "active" : "")} href="#" onClick={(e) => this.props.setActiveCategory(this.props.category, e)}>
                    {this.props.category.name}
                </a>
            </li>
        );
    }
}

class CategorySelector extends React.Component<CategorySelectorProps> {
    constructor(props: CategorySelectorProps) {
        super(props);

        this.changeActive = this.changeActive.bind(this)
    }

    changeActive(category) {
        this.props.setActiveCategory(category);
        this.props.setActiveDimensions(category.dimensions.map((dimension) => {return {value: dimension.possibleValues[0], ...dimension}}))
    }

    render() {
        const categoryItems = this.props.categories.map((category, index) =>
            <CategoryOption key={index} category={category} setActiveCategory={this.changeActive} active={category === this.props.activeCategory} />
        );
        return (
            <nav>
                <ul className="nav nav-pills flex-column">
                    <li><span className="navbar-brand">Categories</span></li>
                    {categoryItems}
                </ul>
            </nav>
        );
    }
}

export { CategorySelector }
