import React from 'react'
import { useState } from "react"
import { Data, Img } from "../interfaces/data";
import { ActiveDimension, Category, DimensionTypes } from "../interfaces/dimensions"
import { Slice } from '../lib/slice';
import { CategorySelector } from "./category-selector"
import { Navbar } from "./navbar"
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
        this.setActiveCategory = this.setActiveCategory.bind(this)
        this.setDimensionSlice = this.setDimensionSlice.bind(this)
    }

    setDimensionSlice(dimension, slice) {
        dimension = {...dimension, value: slice};
        this.setState({
            ...this.state,
            activeDimensions: this.state.activeDimensions.map((activeDimension) => activeDimension.name === dimension.name ? dimension : activeDimension)
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
        console.log(this.state.activeDimensions)
        const values = this.props.categories[0].values;
        const activeItems = values.filter(item => {
            if (this.state.activeDimensions) {
                const active = this.state.activeDimensions.map(dim => {
                    const itemDimValue = item.dimensions[dim.name]
                    if (!itemDimValue) {
                        return false;
                    } else if (dim.value.contains(itemDimValue)) {
                        return true;
                    }
                    return false;
                })
                console.log(active.every(item=> item))
                return active.every(item => item)
            }
            return false;
        })

        return (
            <div className="container">
                <div className="row">
                    <Navbar activeDimensions={this.state.activeDimensions} setDimensionSlice={this.setDimensionSlice} />
                </div>
                <div className="row">
                    <div className="col-3">
                        <CategorySelector 
                            categories={this.props.categories} 
                            setActiveCategory={this.setActiveCategory}
                            activeCategory={this.state.activeCategory}
                        />
                    </div>
                    <div className="col-9">
                        <h1 className="display-1">Dataviz</h1>
                        {
                            this.state.activeDimensions &&
                            <DataPage 
                                activeDimensions={this.state.activeDimensions}
                                activeItems={activeItems}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
