import { PropsWithChildren, useEffect, useState } from 'react';
import DimensionsContext from './context';



function DimensionsProvider({ children }: PropsWithChildren<{}>) {
    const value = {
        state: {  },
        actions: {  }
    };
    return (
        <DimensionsContext.Provider value={value}>
            {children}
        </DimensionsContext.Provider>
    )
}


export default DimensionsProvider