import './photos.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPhotos } from './service/service'


export function Photos() {
    const firstSearch = useParams().search
    const [search, setSearch] = useState(firstSearch ? firstSearch : "")
    const [allPhotos, setAllPhotos] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (firstSearch.trim()) {
            navigate(`/photos/${search}`)
        }
    }

    useEffect(() => {
        if(!firstSearch) return
        const fetchData = async ()=>{
            const newPhotos = await getPhotos(firstSearch)
            setAllPhotos(newPhotos)
        }

        fetchData()
      }, [firstSearch])

    return (
        <>
            <header className="photos-header">
                <label className="photos-label">
                    <span className="photos-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="7" stroke="#E5E7EB" strokeWidth="2" />
                            <path d="M20 20L17 17" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="search"
                            className="photos-input"
                            placeholder="Enter your keywords..."
                            autoComplete="off"
                            spellCheck='false'
                            required
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </form>
                </label>
            </header>
            <section className='photos'>
                {
                    allPhotos.map((photo) =>
                        <img key={photo.id} src={photo.urls.small_s3} alt={photo.alt_description} />
                    )
                }
            </section>
        </>
    )
}