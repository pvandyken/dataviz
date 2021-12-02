export type DimensionTypes = string | number;

export interface Dimension<T extends DimensionTypes> {
    name: string;
    possibleValues: T[];
}

export interface ActiveDimension<T extends DimensionTypes> extends Dimension<T> {
    value: T 
}

export interface Category {
    id: string;
    name: string;
    parent?: string;
    dimensions: Dimension<DimensionTypes>[]
}


