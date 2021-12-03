import React from 'react'
import { useState } from "react"
import { Data, Img } from "../interfaces/data";
import { ActiveDimension, Category, DimensionTypes } from "../interfaces/dimensions"
import { Slice } from '../lib/slice';
import { CategorySelector } from "./category-selector"
import { DataPage } from "./data-page";

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
        const activeDimensions = value.dimensions.map((dimension) => ({value: new Slice(dimension.possibleValues[0]), ...dimension})) 
        this.setState({
            ...this.state,
            activeCategory: value,
            activeDimensions: activeDimensions
        })
        
        
    }

    render() {
        const values = this.props.categories[0].values;
        const activeItems = values.filter(item => {
            if (this.state.activeDimensions) {
                for (let dim of this.state.activeDimensions) {
                    const itemDimValue = item.dimensions[dim.name]
                    if (!itemDimValue) {
                        return false;
                    } else if (dim.value.contains(itemDimValue)) {
                        return true;
                    }
                }
            }
            return false;
        })

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
                        {
                            this.state.activeDimensions &&
                            <DataPage 
                                activeDimensions={this.state.activeDimensions}
                                activeItems={activeItems}
                            />
                        }
                        <h1 className="display-1">Dataviz</h1>
                        <p>This is the main body of the page.</p>
                        <p>Active dimensions: {this.state.activeDimensions ? this.state.activeDimensions.map((dimension) => dimension.name).join(", ") : "None yet."}</p>
                    </div>
                </div>
            </div>
        )
    }
}
