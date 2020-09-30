import React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;
export interface SizeContextProps {
  size?: SizeType;
}

const SizeContext = React.createContext<SizeContextProps>(undefined);

export default SizeContext;