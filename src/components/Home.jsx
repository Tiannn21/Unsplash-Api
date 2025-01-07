import './home.css'
import { Searcher } from './Searcher'

export function Home() {

    return (
        <section className='home'>
            <h1>Search</h1>
            <p>Search high-resolution images from Unsplash</p>
            <Searcher/>
        </section>
    )
}