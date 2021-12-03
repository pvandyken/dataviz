import React from 'react'
import { useState } from "react"
import { ActiveDimension, Category, DimensionTypes } from "../interfaces/dimensions"
import { CategorySelector } from "./category-selector"

type ActiveDimensions = ActiveDimension<DimensionTypes>[] | undefined;


interface DimensionManagerProps {
    categories: Category[];
}

interface DimensionManagerState {
    activeDimensions: ActiveDimensions
    activeCategory: Category | undefined
}

export class DimensionManager extends React.Component<DimensionManagerProps, DimensionManagerState> {
    constructor(props) {
        super(props)
        this.state = {
            activeDimensions: undefined,
            activeCategory: undefined
        }
        this.setActiveDimensions = this.setActiveDimensions.bind(this)
        this.setActiveCategory = this.setActiveCategory.bind(this)
    }

    setActiveDimensions(value: ActiveDimensions) {
        this.setState({
            ...this.state,
            activeDimensions: value
        })
    }

    setActiveCategory(value: Category) {
        this.setState({
            ...this.state,
            activeCategory: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <CategorySelector 
                            categories={this.props.categories} 
                            setActiveDimensions={this.setActiveDimensions} 
                            setActiveCategory={this.setActiveCategory}
                            activeCategory={this.state.activeCategory}
                        />
                    </div>
                    <div className="col-9">
                        <h1 className="display-1">Dataviz</h1>
                        <p>This is the main body of the page.</p>
                        <p>Active dimensions: {this.state.activeDimensions ? this.state.activeDimensions.map((dimension) => dimension.name).join(", ") : "None yet."}</p>
                    </div>
                </div>
            </div>
        )
    }
}
