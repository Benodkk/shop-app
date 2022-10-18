import React, {useState} from "react"

const CurrencyContext = React.createContext()

function CurrencyContextProvider (props) {

    const [currency, setCurrency] = useState('$')

    const change = (e) => { 
        setCurrency(e.target.value)
    }

    return (
        <CurrencyContext.Provider value={{currency, change}}>
            {props.children}
        </CurrencyContext.Provider>

    )
}

export {CurrencyContextProvider, CurrencyContext}