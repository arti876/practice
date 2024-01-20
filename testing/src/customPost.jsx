// import useApi from "./useApi";

// export default function customPost() {
//   let { dataApi } = useApi();

//   const dataApiCheck = dataApi.length > 0;
//   let postData = 1;

//   if (dataApiCheck) {
//     const dataApiPosts = dataApi[0].data.posts;
//     const dataApiImages = dataApi[1].data.results;

//     const posts = dataApiPosts.map((post) => ({
//       id: post.id,
//       description: post.body,
//       title: post.title,
//     }));

//     const images = dataApiImages.map((image) => ({
//       image: image.urls.small,
//     }));

//     postData = posts.map((item, index) => ({ ...item, ...images[index] }));
//   }
//   return { postData };
// }
