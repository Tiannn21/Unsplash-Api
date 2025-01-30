/* eslint-disable react/prop-types */
import InfiniteScroll from "react-infinite-scroll-component"

export function Photos({ photos, search, loadMore }) {

    const handlePhoto = (photo) => {
        const url = `/photos/${search}/${photo.id}`
        window.open(url, "_blank")
    }

    return (
        <InfiniteScroll
            dataLength={photos.length}
            next={loadMore}
            hasMore={true}
        >
            <section className='photos' style={search ? {} : { marginTop: '0' }}>
                {
                    photos.map((photo) =>
                        <img className='singular-photo' key={photo.id} src={photo.urls.small_s3} alt={photo.alt_description} onClick={() => handlePhoto(photo)} />
                    )
                }
            </section>
        </InfiniteScroll>
    )
}