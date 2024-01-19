import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'


export default function useApi(...url: string[]) {
  const [dataApi, setDataApi] = useState(Object)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchPosts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get(url)
      // const dataPosts = response.data.posts
      // const newPosts = dataPosts.map(p => ({
      //   id: p.id,
      //   date: getRandomDay(new Date(2023, 0, 1), new Date()),
      //   description: p.body,
      //   title: p.title,
      //   image: "https://source.unsplash.com/collection/11330517",
      // }))

      setDataApi(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {dataApi, loading, error}
};