import { useState } from 'react'
import './addToCollection.css'
import { getCollections } from '../service/service'
import { ItemCollection } from './ItemCollection'

// eslint-disable-next-line react/prop-types
export function AddToCollection({ closeDialog }) {
    const [searchCollection, setSearchCollection] = useState("")
    const [collections , setCollections] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!searchCollection) return
        const newCollections = await getCollections(searchCollection)
        setCollections(newCollections)

    }

    return (
        <div className='overlay'>
            <dialog className="modal">
                <header className='modal-header'>
                    <h3>Add To Collections </h3>
                    <span onClick={closeDialog} className='close-modal'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
                        </svg>
                    </span>
                </header>
                <label className="modal-label">
                    <span className="modal-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="7" stroke="#E5E7EB" strokeWidth="2" />
                            <path d="M20 20L17 17" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="modal-input"
                            placeholder="Enter your keywords..."
                            autoComplete="off"
                            spellCheck='false'
                            value={searchCollection}
                            onChange={(e) => { setSearchCollection(e.target.value) }}
                            required
                        />
                    </form>
                </label>
                <ul>
                    {collections.map((collection)=>
                    <li key={collection.id} className='item-collection'>
                        <ItemCollection collection={collection} modal='true'/>
                    </li>
                    )}
                </ul>
            </dialog>
        </div>
    )
}