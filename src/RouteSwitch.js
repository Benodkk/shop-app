import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainSite from "./Pages/MainSite"
import { CurrencyContextProvider } from "./Components/Features/Currency"
import './style.css'
const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <CurrencyContextProvider>
                <Routes>
                    <Route path="/" element={<MainSite/>}/>
                </Routes>
            </CurrencyContextProvider>
        </BrowserRouter>
        
    )
}
export default RouteSwitch