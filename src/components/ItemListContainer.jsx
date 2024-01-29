import { React, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loader from './Loader'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])

    const { category } = useParams()


    useEffect(() => {

        const db = getFirestore()
    
        const itemsCollection = collection(db, "productos")
    
        getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => doc.data())
          setProducts(docs)
          setLoading(false)
        })
    
      }, [])


    const productosFiltrados = products.filter((producto) => producto.categoria === category)

    if (loading === true) {
        return <Loader />
    } else {



    return (
        <div>

            {
                category ? <ItemList productos={productosFiltrados} /> : <ItemList productos={products} />
            }

        </div>
    )
}
}

export default ItemListContainer