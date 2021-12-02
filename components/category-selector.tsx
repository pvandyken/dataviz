import { Category } from "../interfaces/dimensions"
import React from "react"

interface CategorySelectorProps {
    categories: Category[];
}

interface CategoryOptionProps {
    category: Category;
    active: boolean;
    setActive;
}

class CategoryOption extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a className={"nav-link " + (this.props.active ? "active" : "")} href="#" onClick={(e) => this.props.setActive(this.props.category, e)}>
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

        this.changeActive = this.changeActive.bind(this)
    }

    changeActive(category) {
        this.setState({activeCategory: category});
    }

    render() {
        const categoryItems = this.props.categories.map((category) =>
            <CategoryOption category={category} parent={this} setActive={this.changeActive} active={category === this.state.activeCategory} />
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
