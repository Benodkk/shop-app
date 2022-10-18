import ItemCard from "../ItemCard/ItemCard"
import {datas} from "../../database/data"

function PopularProducts () {

    return(
        <div>
            <h2>Popular Products</h2>
            <ItemCard element={datas[0]}/>
            <ItemCard element={datas[1]}/>
            <ItemCard element={datas[2]}/>
        </div>
    )
}
export default PopularProducts