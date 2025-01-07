import { useEffect, useState } from "react"
import { getPhotos } from "../service/service"


export function usePhotos({search}) {
    const [photos, setPhotos] = useState([])
    
        useEffect(() => {
            if(!search) return
            const fetchData = async ()=>{
                const newPhotos = await getPhotos(search)
                setPhotos(newPhotos)
            }
    
            fetchData()
        }, [search])
    
    return {photos}
}