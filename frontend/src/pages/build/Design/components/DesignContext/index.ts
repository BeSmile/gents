/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-01-20 16:42:11
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-20 16:53:39
 */
import { createContext } from 'react';

interface DesignContextProps {
  handleCreateElement?: (params: any) => void;
}

const DesignContext = createContext<DesignContextProps>({});

export default DesignContext;