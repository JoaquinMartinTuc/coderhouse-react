import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const ComponenteEjemplo = () => {


    const { comision, cart, setCart } = useContext(CartContext)
    return (
        <div>

            <button onClick={() => setCart("Nuevo Valor")}>Boton</button>

        </div>
    )
}

export default ComponenteEjemplo