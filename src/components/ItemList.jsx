import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <section>

            <article className='card fondo'>



                {
                    productos.map((p) => {
                        return (
                            <Item
                                titulo={p.titulo}
                                descripcion={p.descripcion}
                                precio={p.precio}
                                id={p.id}
                                imagenUrl={p.imagenUrl}
                                alt={p.alt}
                            />
                        )
                    })
                }
            </article>
        </section>
    )
}

export default ItemList