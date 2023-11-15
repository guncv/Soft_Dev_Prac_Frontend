'use client'
import { Provider as ReactReduxProvider } from "react-redux"
import { store } from "./store"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

interface Props {
    children:React.ReactNode
}

export default function ReduxProvider({children}: Props){
    let reduxPersistor = persistStore(store);

    return (
        <ReactReduxProvider store={store}>
            <PersistGate loading={null} persistor={reduxPersistor}>
                {children}
            </PersistGate> 
        </ReactReduxProvider>
    )
}