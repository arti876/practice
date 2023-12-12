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


// function getTodos() {
//   return fetch('https://jsonplaceholder.typicode.com/posts/17')
//       .then(response => response.json())
// }

// async function get() {
//   const [todosResult, usersResult] = await Promise.allSettled([getTodos()])

//   if (todosResult.status === 'rejected') {
//       console.error('Error getting todos:', todosResult.reason)
//   } else {
//       console.log(todosResult.value)
//   }
// }

// get()



function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/posts/17')
    .then(response => response.json())
}

async function get() {
  const [todosResult] = await Promise.allSettled([getTodos()])

  if (todosResult.status === 'rejected') {
    console.error('Error getting todos:', todosResult.reason)
  } else {
    console.log(todosResult.value)
  }
}

get()

// function fetchPosts (posts) {
// return posts.map(urlPost => fetch(`https://jsonplaceholder.typicode.com/posts/${urlPost}`));
// }