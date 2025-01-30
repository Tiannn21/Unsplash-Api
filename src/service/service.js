
const CLIENT_ID = 'tpbKYv-xJTtzFjPzOV5_RrHp_lJwjwK7-TI8rDsBEE0'

export const getPhotos = async (query, page) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=30&client_id=${CLIENT_ID}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getPhoto = async (id) => {
    const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${CLIENT_ID}`)
    const data = await response.json()
    return data
}

export const getCollections = async () => {
    const response = await fetch(`https://api.unsplash.com/collections?page=4&per_page=9&client_id=${CLIENT_ID}`)
    const data = await response.json()
    return data
}

export const getCollectionPhotos = async (collectionId, page) => {
    const response = await fetch(`https://api.unsplash.com/collections/${collectionId}/photos?page=${page}&per_page=30&client_id=${CLIENT_ID}`)
    const data = await response.json()
    return data
}