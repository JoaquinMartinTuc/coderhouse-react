import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {

    const { category } = useParams()
    return (
        <div>Categorias</div>
    )
}

export default Category