
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

export const addPhotoToCollection = async (collectionId, photoId) => {
    const url = `https://api.unsplash.com/collections/${collectionId}/add`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Client-ID ${CLIENT_ID}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ photo_id: photoId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.errors.join(', ')}`);
      }

      const data = await response.json();
      return data.id
    } catch (error) {
      return "Error al subir foto: "+ error
    }
  }