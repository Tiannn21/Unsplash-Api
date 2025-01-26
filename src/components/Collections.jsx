import './collections.css'
import collections from '../mocks/collections.json'
import { CollectionImage } from './CollectionImage'

export function Collections() {
    return (
        <section className='collections'>
            <h1 className="collections-title">Collections</h1>
            <p>Explore the world through collections of beautiful photos free to use under the <a>Unsplash License</a>.</p>
            <ul className='list-collections'>
                {
                    collections.map((collection) =>
                        <li key={collection.id} className='collection'>
                            <CollectionImage collection={collection}/>
                            <p>{collection.title}</p>
                            <p className='collection-photos'>{collection.total_photos} photos</p>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}