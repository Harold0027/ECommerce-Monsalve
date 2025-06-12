import React, { useState,useEffect } from 'react'
import { GetProducts, getProductsByCategory } from '../mock/AsyncService'
import Item from './Item'
import { useParams } from 'react-router-dom'
import { addDoc, collection,getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'
import { products } from '../mock/AsyncService'
const ItemContainer = () => {
    const [data,setData] = useState([])
    const {category} = useParams()

    //Firebase
    useEffect(()=>{
        //conectarnos con nuestra coleccion
        const productsCollection = category ? query(collection(db, "productos"), where("category","==",category)): collection(db, "productos")
        //pedir documentos
        getDocs(productsCollection)
            .then((res)=>{
                const list = res.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setData(list)
            })
            .catch((error)=>console.log(error))
    },[category])


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //         const response = category 
    //             ? await getProductsByCategory(category)
    //             : await GetProducts()
    //         setData(response)
    //         } catch (error) {
    //         console.error(error)
    //         }
    //     }
    //     fetchData()
    // }, [category])

    //Funcion subir todos los productos
    // const subirData = () =>{
    //     console.log("Subiendo products...")
    //     const prodCollectionToAdd = collection(db, "productos")
    //     products.map(item=>{addDoc(prodCollectionToAdd, item)})    
    // }

  return (
    <div>
        <Item data={data} type={category ? `/${category}` : `/detail`} /> 
    </div>
  )
}

export default ItemContainer
