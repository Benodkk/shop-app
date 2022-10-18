import welcome1 from '../../Assets/welcome1.jpg'
import welcome2 from '../../Assets/welcome2.jpg'
import welcome3 from '../../Assets/welcome3.jpg'
import { useEffect, useState } from 'react'

const images = [welcome1, welcome2, welcome3]

function WelcomeComponent(){

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(index===images.length-1){
                setIndex(0)
            }
            else{
                setIndex(index+1)
            }
        }, 5000);
        return () => clearInterval(interval)

    },[index])


    return(
        <section className='welcomeSection'>
            <div className='welcomeSectionContainer'>
                <img alt='Welcome' src={images[index]}/>
                <div>
                    Only top class products
                </div>
            </div>
        </section>
    )
}
export default WelcomeComponent