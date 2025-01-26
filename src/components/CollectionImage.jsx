/* eslint-disable react/prop-types */
import './collectionImage.css'

export function CollectionImage({collection}){

    const previewPhotos = collection?.preview_photos
    return(
        <div className="collage-image">
            <img className="item1" src={previewPhotos[0].urls.small} alt={previewPhotos[0].slug}/>
            <img className="item2" src={previewPhotos[1].urls.small} alt={previewPhotos[1].slug}/>
            <img className="item3" src={previewPhotos[2].urls.small} alt={previewPhotos[2].slug}/>
        </div>
    )
}