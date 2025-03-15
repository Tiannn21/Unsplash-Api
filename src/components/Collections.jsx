import "./collections.css";
import { getCollections } from "../service/service";
import { CollectionImage } from "./CollectionImage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Collections() {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const newCollection = await getCollections();
      setCollections(newCollection);
    };

    fetchData();
  }, []);

  const handleClickCollection = (collection) => {
    navigate(
      `/collections/${collection.title}/${collection.id}/${collection.total_photos}`
    );
  };

  return (
    <section className="collections">
      <h1 className="collections-title">Collections</h1>
      <p>
        Explore the world through daily featured collections featuring beautiful
        photography.
      </p>
      <ul className="list-collections">
        {collections.map((collection) => (
          <li key={collection.id} className="collection">
            <div onClick={() => handleClickCollection(collection)}>
              <CollectionImage collection={collection} />
            </div>
            <p>{collection.title}</p>
            <p className="total-photos">{collection.total_photos} photos</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
