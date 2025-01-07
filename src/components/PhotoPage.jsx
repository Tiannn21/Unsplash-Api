import { useParams } from "react-router-dom";
import { getPhoto } from "../service/service";
import { useEffect, useState } from "react";
import './photoPage.css'

import { ResponsiveImage } from "./ResponsiveImage";
import moment from "moment";

export function PhotoPage() {
    const id = useParams().id
    const [photo, setPhoto] = useState()
    const [loading, setLoading] = useState(true)
    const collections = photo?.related_collections.results
    const dateString = photo?.created_at
    const formattedDate = moment(dateString).format("MMMM D, YYYY");

    useEffect(() => {
        const fetchPhoto = async () => {
            const fetchedPhoto = await getPhoto(id)
            setPhoto(fetchedPhoto)
            setLoading(false)
        }

        fetchPhoto()
    }, [id])

    const handleCollections = () => {
        console.log(collections)
    }

    if (loading) return <p>Cargando...</p>
    if (!photo) return <p>No se pudo cargar la foto.</p>

    return (
        <section className="photo-section">
            <div className="photo-image">
                <ResponsiveImage src={photo.urls.regular} alt={photo.title}/>
            </div>
            <article className="photo-description">
                <div className="photo-user">
                    <img src={photo.user.profile_image.small} />
                    <p>{photo.user.name} {photo.user.lastname}</p>
                </div>
                <p className="date-publish">Published on {formattedDate}</p>
                <div className="photo-buttons">
                    <button onClick={handleCollections}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6665 7.33335H8.6665V3.33335C8.6665 3.15654 8.59627 2.98697 8.47124 2.86195C8.34622 2.73693 8.17665 2.66669 7.99984 2.66669C7.82303 2.66669 7.65346 2.73693 7.52843 2.86195C7.40341 2.98697 7.33317 3.15654 7.33317 3.33335V7.33335H3.33317C3.15636 7.33335 2.98679 7.40359 2.86177 7.52862C2.73674 7.65364 2.6665 7.82321 2.6665 8.00002C2.6665 8.17683 2.73674 8.3464 2.86177 8.47142C2.98679 8.59645 3.15636 8.66669 3.33317 8.66669H7.33317V12.6667C7.33317 12.8435 7.40341 13.0131 7.52843 13.1381C7.65346 13.2631 7.82303 13.3334 7.99984 13.3334C8.17665 13.3334 8.34622 13.2631 8.47124 13.1381C8.59627 13.0131 8.6665 12.8435 8.6665 12.6667V8.66669H12.6665C12.8433 8.66669 13.0129 8.59645 13.1379 8.47142C13.2629 8.3464 13.3332 8.17683 13.3332 8.00002C13.3332 7.82321 13.2629 7.65364 13.1379 7.52862C13.0129 7.40359 12.8433 7.33335 12.6665 7.33335Z" fill="#121826" />
                        </svg>Add to Collection
                    </button>
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.52683 10.4733C7.59023 10.534 7.665 10.5816 7.74683 10.6133C7.90914 10.68 8.09119 10.68 8.2535 10.6133C8.33533 10.5816 8.41009 10.534 8.4735 10.4733L10.4735 8.47332C10.599 8.34778 10.6696 8.17752 10.6696 7.99998C10.6696 7.82245 10.599 7.65219 10.4735 7.52665C10.348 7.40111 10.1777 7.33059 10.0002 7.33059C9.82263 7.33059 9.65237 7.40111 9.52683 7.52665L8.66683 8.39332V5.99998C8.66683 5.82317 8.59659 5.6536 8.47157 5.52858C8.34654 5.40355 8.17697 5.33332 8.00016 5.33332C7.82335 5.33332 7.65378 5.40355 7.52876 5.52858C7.40373 5.6536 7.3335 5.82317 7.3335 5.99998V8.39332L6.4735 7.52665C6.41152 7.46416 6.33779 7.41457 6.25655 7.38072C6.17531 7.34688 6.08817 7.32945 6.00016 7.32945C5.91215 7.32945 5.82502 7.34688 5.74378 7.38072C5.66254 7.41457 5.5888 7.46416 5.52683 7.52665C5.46434 7.58862 5.41475 7.66236 5.3809 7.7436C5.34706 7.82484 5.32963 7.91198 5.32963 7.99998C5.32963 8.08799 5.34706 8.17513 5.3809 8.25637C5.41475 8.33761 5.46434 8.41134 5.52683 8.47332L7.52683 10.4733ZM8.00016 14.6666C9.31871 14.6666 10.6076 14.2757 11.704 13.5431C12.8003 12.8106 13.6548 11.7694 14.1594 10.5512C14.6639 9.33303 14.796 7.99259 14.5387 6.69938C14.2815 5.40617 13.6466 4.21829 12.7142 3.28594C11.7819 2.35359 10.594 1.71865 9.30076 1.46141C8.00756 1.20418 6.66711 1.3362 5.44894 1.84079C4.23077 2.34537 3.18957 3.19985 2.45703 4.29618C1.72449 5.39251 1.3335 6.68144 1.3335 7.99998C1.3335 9.76809 2.03588 11.4638 3.28612 12.714C3.90517 13.3331 4.6401 13.8241 5.44894 14.1592C6.25778 14.4942 7.12468 14.6666 8.00016 14.6666V14.6666ZM8.00016 2.66665C9.055 2.66665 10.0861 2.97944 10.9632 3.56548C11.8403 4.15151 12.5239 4.98447 12.9275 5.959C13.3312 6.93354 13.4368 8.0059 13.231 9.04046C13.0252 10.075 12.5173 11.0253 11.7714 11.7712C11.0255 12.5171 10.0752 13.0251 9.04064 13.2308C8.00608 13.4366 6.93372 13.331 5.95918 12.9273C4.98465 12.5237 4.15169 11.8401 3.56566 10.963C2.97962 10.086 2.66683 9.05482 2.66683 7.99998C2.66683 6.58549 3.22873 5.22894 4.22893 4.22875C5.22912 3.22855 6.58567 2.66665 8.00016 2.66665V2.66665Z" fill="#121826" />
                        </svg>Download
                    </button>
                </div>
                <h3>Collections</h3>
                <ul>
                    {
                        collections.map((collection) =>
                            <li key={collection.id} className="item-collection">
                                <img src={collection.preview_photos[0].urls.thumb} alt={collection.preview_photos[0].slug} />
                                <div className="item-texts">
                                    <h5>{collection.title}</h5>
                                    <p>{collection.total_photos} photos</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </article>
        </section>
    )
}