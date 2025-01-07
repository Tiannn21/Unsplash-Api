import { useParams } from "react-router-dom";
import { getPhoto } from "../service/service";
import { useEffect, useState } from "react";
import './photo.css'

export function Photo(){
    const id = useParams().id
    const [photo, setPhoto] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhoto = async () => {
          const fetchedPhoto = await getPhoto(id)
          setPhoto(fetchedPhoto)
          setLoading(false);
        };
    
        fetchPhoto();
    }, [id])

    if (loading) return <p>Cargando...</p>;
    if (!photo) return <p>No se pudo cargar la foto.</p>;

    return(
        <section className="photo-section">
            <div>
                <img src={photo.urls.small}/>
            </div>
            <article>
                <img src={photo.user.profile_image.small}/>
                <p>{photo.user.name} {photo.user.lastname}</p>
            </article>
        </section>
    )
}