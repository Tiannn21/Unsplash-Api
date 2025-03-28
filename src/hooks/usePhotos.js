import { useEffect, useState } from "react";
import { getCollectionPhotos, getPhotos } from "../service/service";

export function usePhotos({ search, collectionId }) {
  const [photos, setPhotos] = useState([]);
  const [lastSearch, setLastSearch] = useState("");
  const [page, setPage] = useState(1);
  const [collectionPhotos, setCollectionPhotos] = useState([]);

  useEffect(() => {
    if (!search) return;
    if (search != lastSearch) setPhotos([]);
    const fetchData = async () => {
      const newPhotos = await getPhotos(search, page);
      if (page === 1) {
        setPhotos(newPhotos);
        return;
      }
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    };

    fetchData();
    setLastSearch(search);
  }, [search, page]);

  useEffect(() => {
    if (!collectionId) return;
    const fetchData = async () => {
      const newCollectionPhotos = await getCollectionPhotos(collectionId, page);
      if (!newCollectionPhotos) return;
      if (page === 1) {
        setCollectionPhotos(newCollectionPhotos);
        return;
      }
      setCollectionPhotos((prevPhotos) => [
        ...prevPhotos,
        ...newCollectionPhotos,
      ]);
    };

    fetchData();
  }, [collectionId, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return { photos, loadMore, collectionPhotos };
}
