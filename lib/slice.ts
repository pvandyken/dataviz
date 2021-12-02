import { DimensionTypes } from "../interfaces/dimensions";

export class Slice<T extends DimensionTypes> {
    /**
    * Should receive values or ranges of values in the case of integers
    * For instance: 
    *   ["right"]
    *   ["right", "left"]
    *   1-4, 5-20, 31-100
    *   all
    * 
    * This will be used to define values within Dimension. It will be a child of
    * Dimension, so Dimension should not be an argument in the constructor
    */

    constructor() {

    }
}