import getRandomDay from '../utils/getRandomDay'

export default async function customPost() {
  // dataPosts.length = 3;

  const posts = dataPosts.map(p => ({
    id: p.id,
    date: getRandomDay(new Date(2023, 0, 1), new Date()),
    description: p.body,
    title: p.title,
    image: "https://source.unsplash.com/collection/11330517",
  }))

  return posts
}

// const queryPhotos = "astronaut"
// const clientId = "za_zdSM8jklgxHd6iw-hJpsSeEzKHsfEE69XmtnaZFA"
// https://api.unsplash.com/search/photos?page=1&query=${queryPhotos}&client_id={clientId}

// const response = await axios.get<IPost>('https://dummyjson.com/posts')