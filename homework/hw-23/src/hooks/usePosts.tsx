import {useEffect, useState} from 'react'
import {IPost} from '../models'
import axios, {AxiosError} from 'axios'

export default function usePosts() {
  const [posts, setPosts] = useState<IPost>(Object)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchPosts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IPost>('https://studapi.teachmeskills.by/blog/posts/1/')
      setPosts(response.data)
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

  return {posts, loading, error}
};