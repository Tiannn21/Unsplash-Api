
const CLIENT_ID = 'tpbKYv-xJTtzFjPzOV5_RrHp_lJwjwK7-TI8rDsBEE0'

export const getPhotos = async (query) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${CLIENT_ID}`)
    const data = await response.json()
    return data.results
}

export const getPhoto = async (id) => {
    const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${CLIENT_ID}`)
    const data = await response.json()
    return data
}

export const getCollections = async (query) => {
    const response = await fetch(`https://api.unsplash.com/search/collections?query=${query}&per_page=5&client_id=${CLIENT_ID}`)
    const data = await response.json()
    return data.results
}