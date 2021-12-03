export interface Data<T extends object> {
    type: string;
    dimensions: {
        [key: string]: string | null;
    }
    properties: T
}

export interface Img {
    path: string;
    height: number;
    width: number;
}