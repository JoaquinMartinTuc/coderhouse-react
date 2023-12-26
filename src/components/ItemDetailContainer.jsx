import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams()
    console.log(id)

    const productos = [
        { id: 1, categoria: "remeras", titulo: "Remera Nike Azul", precio: 7000, imagenUrl: "https://i.postimg.cc/TPF3H1KW/remera-Nike-Azul.jpg", alt: "Remera Nike Azul" },
        { id: 2, categoria: "remeras", titulo: "Musculosa Nike Naranja", precio: 7000, imagenUrl: "https://i.postimg.cc/QxJVxjyR/musculosa-Nike-Naranja.jpg", alt: "Musculosa Nike Naranja" },
        { id: 3, categoria: "remeras", titulo: "Remera Adidas Gris", precio: 7000, imagenUrl: "https://i.postimg.cc/C5VLS2Hh/remera-Adidas-Gris.jpg", alt: "Remera Adidas Gris" },
        { id: 4, categoria: "pantalones", titulo: "Babucha Irun", precio: 12000, imagenUrl: "https://i.postimg.cc/NGT5S67G/babucha-Irun.jpg", alt: "Babucha" },
        { id: 5, categoria: "pantalones", titulo: "Short Irun Azul", precio: 10000, imagenUrl: "https://i.postimg.cc/Kcn8JZxR/short-Azul.jpg", alt: "Short" },
        { id: 6, categoria: "pantalones", titulo: "Short Irun Negro", precio: 10000, imagenUrl: "https://i.postimg.cc/yxX6dTvF/short-Negro.jpg", alt: "Short" },
        { id: 7, categoria: "abrigos", titulo: "Campera Rompevientos Nike Azul", precio: 7000, imagenUrl: "https://i.postimg.cc/zvnvhNXH/rompevientos-Nike-Azul.jpg", alt: "Rompeviento" },
        { id: 8, categoria: "abrigos", titulo: "Campera Rompevientos Nike Azul y Roja", precio: 7000, imagenUrl: "https://i.postimg.cc/MGvGDVpS/rompevientos-Nike-Rojo-Azul.jpg", alt: "Rompeviento" },
        { id: 9, categoria: "abrigos", titulo: "Campera Rompevientos Under Armour Negra", precio: 7000, imagenUrl: "https://i.postimg.cc/Y9FCc7FD/rompevientos-Under-Armour.jpg", alt: "Rompeviento" },
        { id: 10, categoria: "calzas", titulo: "Calza Adidas Negra", precio: 3500, imagenUrl: "https://i.postimg.cc/pXHpHmqf/calza-Gris.jpg", alt: "Calza" },
        { id: 11, categoria: "calzas", titulo: "Calza Push Up Azul", precio: 13000, imagenUrl: "https://i.postimg.cc/CxM5RWyd/calza-Push-Up-Azul.jpg", alt: "Calza" },
        { id: 12, categoria: "calzas", titulo: "Calza Push Up Morada", precio: 13000, imagenUrl: "https://i.postimg.cc/sgnX7wym/calza-Push-Up-Morada.jpg", alt: "Calza" }
    ]
    
    const productosFiltrado = productos.find((producto) => producto.id == id)


    return (
        <div>

            <ItemDetail
                producto={productosFiltrado}
            />

        </div>
    )
}

export default ItemDetailContainer