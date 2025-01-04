import './photos.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CLIENT_ID = 'tpbKYv-xJTtzFjPzOV5_RrHp_lJwjwK7-TI8rDsBEE0'

export function Photos() {
    const firstSearch = useParams().search
    const [search, setSearch] = useState(firstSearch ? firstSearch : "")
    const [allPhotos, setAllPhotos] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newPhotos = await getPhotos(search)
        setAllPhotos(newPhotos)
    }

    const getPhotos = async (query) => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${CLIENT_ID}`)
        const data = await response.json()
        return data.results
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
                            type="text"
                            className="photos-input"
                            placeholder="Enter your keywords..."
                            autoComplete="off"
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