import { useState } from "react"
import './trafficLight.css'
const TrafficLight = () => {
    const [active, setActive] = useState(null);

    return (
        <div className="semaforo">
            <div className="pole"></div>
            <div className="colors">
                <button className="offRed" onClick={() => setActive('rojo')} id={active === 'rojo' ? active : ''}></button>
                <button className='offOrange' onClick={() => setActive('naranja')} id={active === 'naranja' ? active : ''}></button>
                <button className="offGreen" onClick={() => setActive('verde')} id={active === 'verde' ? active : ''}></button>
            </div>
        </div>
    )
}
export default TrafficLight