// const root = document.querySelector('.root');
// const URL = 'https://jsonplaceholder.typicode.com/posts/';

// function getTodos() {
//   fetch(URL)
//     .then(response => response.json())
//     .then((data) => printTodos(data));
// };

// function printTodos(todos) {
//   todos.forEach(({ userId, id, title, body }) => {
//     const postItem = document.createElement("div");
//     postItem.classList.add('post-item');
//     root.append(postItem);
//     const postTitle = document.createElement("div");
//     postTitle.classList.add('post-title');
//     postTitle.textContent = `${id} : ${title}`;
//     const postBody = document.createElement("div");
//     postBody.classList.add('post-body');
//     postBody.textContent = `${userId} : ${body}`;
//     postItem.append(postTitle, postBody);
//   });
// };

// getTodos();

// // ----------------------------------------------------------

// const root = document.querySelector('.root');

// function fetchPosts (posts) {
// let requests = posts.map(urlPost => fetch(`https://jsonplaceholder.typicode.com/posts/${urlPost}`));
// console.log(requests)
// }

// fetchPosts([1,2,3,4,5,6]);

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------


// 'https://jsonplaceholder.typicode.com/posts/'

// Сначала 15, потом 23, потом 7 и только потом 3

// renderPosts(1,2,3,4,5,6)
// renderPosts(1,2)
// renderPosts([1,2,3,4,5,6])
// renderPosts([1,2])
// renderPosts({})
// renderPosts(true, false)

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------

// const root = document.querySelector('.root');

// function fetchData(idPosts) {
// return fetch(`https://jsonplaceholder.typicode.com/posts/${idPosts}`)

//   // let urlPosts = idPosts.map(idPost => fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`))

//   // let abc = urlPosts.forEach(response => console.log(response))

//   // return abc
// }

// let promiseAll = Promise.race([fetchData(1), fetchData(2)])
// .then((data) => data.json())
// .then((data) => console.log(data))

// // console.log(fetchData([1,2,3]))

// // function getPosts() {
// //   fetch(URL)
// //     .then(response => response.json())
// //     .then((data) => printPosts(data));
// // };




// //   // Преобразуем каждый URL в промис, возвращённый fetch
// // let requests = urlsPosts.map(urlPost => fetch(urlPost));

// // // Promise.all будет ожидать выполнения всех промисов
// // Promise.all(requests)
// //   .then(responses => responses.forEach(response => console.log(`${response.url}: ${response.status}`)
// //   ));



// // function getPosts() {
// //   fetch(URL)
// //     .then(response => response.json())
// //     .then((data) => printPosts(data));
// // };

// // function printPosts(posts) {
// //   posts.forEach(({ userId, id, title, body }) => {
// //     const postItem = document.createElement("div");
// //     postItem.classList.add('post-item');
// //     root.append(postItem);
// //     const postTitle = document.createElement("div");
// //     postTitle.classList.add('post-title');
// //     postTitle.textContent = `${id} : ${title}`;
// //     const postBody = document.createElement("div");
// //     postBody.classList.add('post-body');
// //     postBody.textContent = `${userId} : ${body}`;
// //     postItem.append(postTitle, postBody);
// //   });
// // };

// // getPosts();



// function fetchData(idPost) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
//       .then(response => response.json())
// }

  
// console.log(fetchData(1))


// function getTodos() {
//   fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then(response => response.json())
//     .then((data) => data);
// };

// console.log(getTodos())


function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
}

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/posts/17')
      .then(response => response.json())
}

async function get() {
  const [todos, users] = await Promise.allSettled([getTodos(), getUsers()])
  console.log(todos);
  console.log(users);
}

get()