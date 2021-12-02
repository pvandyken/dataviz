import { Slice } from "../lib/slice";

export type DimensionTypes = string | number;

export interface Dimension<T extends DimensionTypes> {
    name: string;
    possibleValues: T[];
    type: string;
}

export interface ActiveDimension<T extends DimensionTypes> extends Dimension<T> {
    value: Slice<T>
}

export interface Category {
    id: string;
    name: string;
    parent?: string;
    dimensions: Dimension<DimensionTypes>[]
}


