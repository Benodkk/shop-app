import { useContext, useEffect, useState } from 'react'
import { datas } from '../../database/data'
import { CurrencyContext } from '../Features/Currency'

function ItemCard({element}){

    const context = useContext(CurrencyContext)

    const [index, setIndex] = useState(element.prices.indexOf(element.prices.find(x => x.currency.symbol===context.currency)))

    useEffect(() => {
        setIndex(element.prices.indexOf(element.prices.find(x => x.currency.symbol===context.currency)))
    },[context])

    return(
        <div className='itemCard'>
            <img src={element.gallery[0]} style={{width: "400px"}}/>
            <div className='itemName'>
                {element.name}
            </div>
            <div className='itemPrice'>
                {element.prices[index].amount}
                {element.prices[index].currency.symbol}
            </div>
        </div>
    )
}

export default ItemCard