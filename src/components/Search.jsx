import { useNavigate } from 'react-router-dom'
import './search.css'
import { useState } from 'react'

export function Search() {
    const [firstSearch, setFirstSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (firstSearch.trim()) {
            navigate(`/photos/${firstSearch}`)
        }
    }
    return (
        <section className='search'>
            <h1>Search</h1>
            <p>Search high-resolution images from Unsplash</p>
            <label className="label">
                <span className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="7" stroke="#E5E7EB" strokeWidth="2" />
                        <path d="M20 20L17 17" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </span>
                <form onSubmit={handleSubmit}>
                    <input
                        type="search"
                        className="input"
                        placeholder="Enter your keywords..."
                        autoComplete="off"
                        spellCheck='false'
                        required
                        value={firstSearch}
                        onChange={(event) => setFirstSearch(event.target.value)}
                    />
                </form>
            </label>
        </section>
    )
}