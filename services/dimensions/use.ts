import { useContext } from 'react';
import DimensionsContext, { DimensionsContextType, DimensionsProviderType } from './context';

function isProviderType(value: DimensionsContextType): value is DimensionsProviderType {
  return value !== undefined
}

function useDimensions() {
  const value = useContext(DimensionsContext);
  if (!isProviderType(value)) throw new Error("Components must be wrapped in DimensionsProvider");
  return value;
}

export default useDimensions
