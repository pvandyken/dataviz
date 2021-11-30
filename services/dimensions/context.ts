import { createContext, Dispatch, SetStateAction } from 'react';

export interface DimensionsProviderType {
    state: {
    }
    actions: {
    }
}

export type DimensionsContextType = DimensionsProviderType | undefined

const DimensionsContext = createContext<DimensionsContextType>(undefined);

export default DimensionsContext