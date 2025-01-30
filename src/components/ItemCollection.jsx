/* eslint-disable react/prop-types */


export function ItemCollection({ collection }) {
    
    return (
        <div className="left-item">
            <img src={collection.preview_photos[0].urls.thumb} alt={collection.preview_photos[0].slug} />
            <div className="item-texts">
                <h5>{collection.title}</h5>
                <p>{collection.total_photos} photos</p>
            </div>
        </div>

    )
}