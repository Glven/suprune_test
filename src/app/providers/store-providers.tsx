import {createContext, ReactNode, useContext} from "react";
import {Store, store} from '../store/root-store.ts';

const StoreContext = createContext(store);

export const StoreProvider = ({children} : {children: ReactNode}) => {
    if (!StoreContext) return;

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>

}

export const useStore = () => useContext(StoreContext);