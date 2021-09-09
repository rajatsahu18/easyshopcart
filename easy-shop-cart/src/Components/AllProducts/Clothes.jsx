import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LoadingIndicator } from '../LoadingIndicator'
import { ClothesCard } from './ClothesCard'

const Clothes = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getProductData()
    }, [])

    const getProductData = () => {
        setIsLoading(true)
        axios.get("https://json-server-olx.herokuapp.com/clothes")
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    return isLoading ? (
        <LoadingIndicator/>
    ) : isError ? (
        <div>something went wrong</div>
    ) : (
        <div>
            {data.map((item) => (
                <ClothesCard {...item} key = {item.id} />
            ))}
            
        </div>
    )
}

export { Clothes }
