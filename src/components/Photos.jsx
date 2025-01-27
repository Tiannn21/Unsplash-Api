/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

export function Photos({ photos, search }) {
    const navigate = useNavigate()

    const handlePhoto = (photo) => {
        navigate(`/photos/${search}/${photo.id}`)
    }
    if(!photos) return <p>No found photos</p>
    return (
        <section className='photos' style={search ? {}: {marginTop:'0'}}>
            {
                photos.map((photo) =>
                    <img key={photo.id} src={photo.urls.small_s3} alt={photo.alt_description} onClick={() => handlePhoto(photo)} />
                )
            }
        </section>
    )
}