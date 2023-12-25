import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {


    const { category } = useParams()

    const productos = [
        { id: 1, categoria: "remeras", titulo: "Remera Nike Azul", precio: 7000, imagenUrl: "https://i.postimg.cc/2Sg5Cdcq/remera-Nike-Azul.jpg", alt: "Remera Nike Azul" },
        { id: 2, categoria: "remeras", titulo: "Musculosa Nike Naranja", precio: 7000, imagenUrl: "https://i.postimg.cc/C1TdsCby/musculosa-Nike-Naranja.jpg", alt: "Musculosa Nike Naranja" },
        { id: 3, categoria: "remeras", titulo: "Remera Adidas Gris", precio: 7000, imagenUrl: "https://i.postimg.cc/q7nvqtS1/remera-Adidas-Gris.jpg", alt: "Remera Adidas Gris" },
        { id: 4, categoria: "pantalones", titulo: "Babucha Irun", precio: 12000, imagenUrl: "https://i.postimg.cc/NjnK5vMj/babucha-Irun.jpg", alt: "Babucha" },
        { id: 5, categoria: "pantalones", titulo: "Short Irun Azul", precio: 10000, imagenUrl: "https://i.postimg.cc/Y9z2N5pg/short-Azul.jpg", alt: "Short" },
        { id: 6, categoria: "pantalones", titulo: "Short Irun Negro", precio: 10000, imagenUrl: "https://i.postimg.cc/rmkFrVLM/short-Negro.jpg", alt: "Short" },
        { id: 7, categoria: "abrigos", titulo: "Campera Rompevientos Nike Azul", precio: 7000, imagenUrl: "https://i.postimg.cc/6pq7WpBP/rompevientos-Nike-Azul.jpg", alt: "Rompeviento" },
        { id: 8, categoria: "abrigos", titulo: "Campera Rompevientos Nike Azul y Roja", precio: 7000, imagenUrl: "https://i.postimg.cc/3rZW2vR6/rompevientos-Nike-Rojo-Azul.jpg", alt: "Rompeviento" },
        { id: 9, categoria: "abrigos", titulo: "Campera Rompevientos Under Armour Negra", precio: 7000, imagenUrl: "https://i.postimg.cc/DyjZM31P/rompevientos-Under-Armour.jpg", alt: "Rompeviento" },
        { id: 10, categoria: "calzas", titulo: "Calza Adidas Negra", precio: 3500, imagenUrl: "https://i.postimg.cc/q7CzKDhX/calza-Gris.jpg", alt: "Calza" },
        { id: 11, categoria: "calzas", titulo: "Calza Push Up Azul", precio: 13000, imagenUrl: "https://i.postimg.cc/1XytL9WJ/calza-Push-Up-Azul.jpg", alt: "Calza" },
        { id: 12, categoria: "calzas", titulo: "Calza Push Up Morada", precio: 13000, imagenUrl: "https://i.postimg.cc/Hssnzk8L/calza-Push-Up-Morada.jpg", alt: "Calza" }
    ]

    const productosFiltrados = productos.filter((producto) => producto.categoria == category)



    return (
        <div>

            {
                category ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />
            }

        </div>
    )
}

export default ItemListContainer