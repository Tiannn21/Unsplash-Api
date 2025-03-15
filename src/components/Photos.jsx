/* eslint-disable react/prop-types */
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function Photos({ photos, search, loadMore }) {
  const handlePhoto = (photo) => {
    const url = `/photos/${search}/${photo.id}`;
    window.open(url, "_blank");
  };

  return (
    <InfiniteScroll dataLength={photos.length} next={loadMore} hasMore={true}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 700: 3, 900: 4 }}
        className="photos"
      >
        <Masonry>
          {photos.map((photo) => (
            <img
              className="singular-photo"
              key={photo.id}
              src={photo.urls.small_s3}
              alt={photo.alt_description}
              onClick={() => handlePhoto(photo)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </InfiniteScroll>
  );
}
