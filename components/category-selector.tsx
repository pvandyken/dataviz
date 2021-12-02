import { Category } from "../interfaces/dimensions"
import React from "react"

interface CategorySelectorProps {
    categories: Category[];
}

interface CategoryOptionProps {
    category: Category;
    parent: CategorySelector;
}

class CategoryOption extends React.Component {
    constructor(props: CategoryOptionProps) {
        super(props);
        this.state = {active: false};
    }

    render() {
        return (
            <li className="nav-item">
                <a className={"nav-link " + (this.state.active ? "active" : "")} href="#" onClick={(e) => this.props.parent.changeActive(this, e)}>
                    {this.props.category.name}
                </a>
            </li>
        );
    }
}

class CategorySelector extends React.Component {
    constructor(props: CategorySelectorProps) {
        super(props);
        this.state = {activeCategory: null};
    }

    changeActive(categoryOption: CategoryOption) {
        if (this.state.activeCategory) {
            this.state.activeCategory.setState({active: false});
        }
        categoryOption.setState({active: true});
        this.setState({activeCategory: categoryOption});
    }

    render() {
        const categoryItems = this.props.categories.map((category) =>
            <CategoryOption category={category} parent={this} />
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
