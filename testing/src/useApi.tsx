import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function useApi() {
  const [dataApi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(false);

  const urls = Object.values({
    posts: "https://dummyjson.com/posts",
    imageAatronaut:
      "https://api.unsplash.com/search/photos?page=1&per_page=30&query=astronaut&client_id=za_zdSM8jklgxHd6iw-hJpsSeEzKHsfEE69XmtnaZFA",
  });

  const fetchDataApi = useCallback(async () => {
    setLoading(true);
    const response = await axios.all(urls.map((url) => axios.get(url)));

    // custom api post creation--------------------------------------
    const dataApiPosts = response[0].data.posts;
    const dataApiImages = response[1].data.results;

    const posts = dataApiPosts.map((post) => ({
      id: post.id,
      description: post.body,
      title: post.title,
    }));

    const images = dataApiImages.map((image) => ({
      image: image.urls.small,
    }));

    const postData = posts.map((item, index) => ({
      ...item,
      ...images[index],
    }));
    // custom api post creation--------------------------------------

    setDataApi(postData);

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDataApi();
  }, [fetchDataApi]);

  return { loading, dataApi };
}
