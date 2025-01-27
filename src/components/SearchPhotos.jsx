import './searchPhotos.css'
import { useParams } from 'react-router-dom'
import { Searcher } from './Searcher'
import { usePhotos } from '../hooks/usePhotos'
import { Photos } from './Photos'


export function SearchPhotos() {
    const search = useParams().search
    const { photos } = usePhotos({ search })
    
    return (
        <>
            <header className="photos-header">
                <Searcher query={search}></Searcher>
            </header>
            <Photos photos={photos} search={search}/>
        </>
    )
}