import React from 'react';

const prefixCls = 'lotus'

export interface ConfigConsumerProps {
  rootPrefixCls?: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  },
});