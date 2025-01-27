import { useParams } from "react-router-dom"
import './collectionPhotos.css'
import { useEffect, useState } from "react"
import { getCollectionPhotos } from "../service/service"
import { Photos } from "./Photos"


export function CollectionPhotos() {
    const title = useParams().collectionTitle
    const collectionId = useParams().collectionId
    const [collectionPhotos, setCollectionPhotos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const newCollectionPhotos = await getCollectionPhotos(collectionId)
            setCollectionPhotos(newCollectionPhotos)
        }

        fetchData()
    }, [collectionId])
    
    return (
        <>
            <header className="collection-photos">
                <h1 className="collections-title">{title}</h1>
                <p>X photos</p>
            </header>
            <Photos photos={collectionPhotos} />
        </>
    )
}