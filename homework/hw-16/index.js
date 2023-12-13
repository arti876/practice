// 'https://jsonplaceholder.typicode.com/idPosts/'

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

const root = document.querySelector('.root');

function printTodos({ userId, id, title, body }) {
  if(!userId || !id || !title || !body) {
    return
  } else {
    const postItem = document.createElement("div");
    postItem.classList.add('post-item');
    root.append(postItem);
    const postTitle = document.createElement("div");
    postTitle.classList.add('post-title');
    postTitle.textContent = `${id} : ${title}`;
    const postBody = document.createElement("div");
    postBody.classList.add('post-body');
    postBody.textContent = `${userId} : ${body}`;
    postItem.append(postTitle, postBody);
  }
};

function fetchPosts(idArr) {
return idArr.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json()))
}

function renderPosts(...idPosts) {
  Promise.allSettled(fetchPosts(idPosts.flat(1)))
    .then(response => response.forEach(el => printTodos(el.value)))
};

renderPosts(['sdfsdf', 23, 7, 3])
// renderPosts(1,2,3,4,5,6)
// renderPosts(1,2)
// renderPosts([1,2,3,4,5,6])
// renderPosts([1,2])
// renderPosts({})
// renderPosts(true, false)