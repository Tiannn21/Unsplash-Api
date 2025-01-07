import './photos.css'
import { useNavigate, useParams } from 'react-router-dom'
import { Searcher } from './Searcher'
import { usePhotos } from '../hooks/usePhotos'


export function Photos() {
    const search = useParams().search
    const { photos } = usePhotos({ search })
    const navigate = useNavigate()

    const handlePhoto = (photo) =>{
        navigate(`/photos/${search}/${photo.id}`)
    }
    
    return (
        <>
            <header className="photos-header">
                <Searcher query={search}></Searcher>
            </header>
            <section className='photos'>
                {
                    photos.map((photo) =>
                        <img key={photo.id} src={photo.urls.small_s3} alt={photo.alt_description} onClick={()=>handlePhoto(photo)}/>
                    )
                }
            </section>
        </>
    )
}