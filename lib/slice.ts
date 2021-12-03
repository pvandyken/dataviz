import { DimensionTypes, Dimension, ActiveDimension } from "../interfaces/dimensions";

export class Slice<T extends DimensionTypes> {
    /**
    * This will be used to define values within Dimension. It will be a child of
    * Dimension, so Dimension should not be an argument in the constructor
    */

    value?: DimensionTypes

    constructor(values?: T) {
        /**
         * If no value passed to constructor, assume the slice covers all possible values
         */
        this.value = values;
    }

    contains(value: T) {
        /**
         * Test if slice contains value
         */
        if (!this.value) {
            return true
        }
        return value === this.value;
    }

    isSingle() {
        /**
         * Return true if slice is a single value: aka not "all"
         */
        return Boolean(this.value)
    }
}

export const getSlicedDimensions = (dimensions: ActiveDimension<DimensionTypes>[]) => {
    return dimensions.filter(dimension => {
        return dimension.value.isSingle()
    }).map(dimension => {
        return dimension.name
    })
}