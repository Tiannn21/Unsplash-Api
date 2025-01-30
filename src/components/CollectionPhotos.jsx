import { useParams } from "react-router-dom"
import './collectionPhotos.css'
import { Photos } from "./Photos"
import { usePhotos } from "../hooks/usePhotos"


export function CollectionPhotos() {
    const title = useParams().collectionTitle
    const collectionId = useParams().collectionId
    const numberOfPhotos = useParams().totalPhotos
    const { collectionPhotos, loadMore } = usePhotos({ collectionId })

    return (
        <>
            <header className="collection-photos">
                <h1 className="collections-title">{title}</h1>
                <p>{numberOfPhotos} photos</p>
            </header>

            {
                collectionPhotos.length === 0
                    ? <p style={{ textAlign: 'center' }}>Coleccion No disponible</p>
                    : <Photos photos={collectionPhotos} loadMore={loadMore}/>
            }
        </>
    )
}