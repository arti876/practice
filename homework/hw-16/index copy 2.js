const root = document.querySelector('.root');
const postNumbers = document.querySelector('.post-numbers');
const incorrectData = document.querySelector('.incorrect-data');


function printPots({ userId, id, title, body }) {
  if (!userId || !id || !title || !body) {
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

function render(...idPosts) {
  let prosise = new Promise(function (resolve, reject) {
    const idArr = idPosts.flat(10);

    if (idArr.some((id) => typeof id !== 'number')) {
      reject(console.log('ERROR!!!'))
    } else {
      postNumbers.textContent = `Номера запрошенных постов: ${idArr.join(', ')}`;
      resolve(idArr)
    }
  })

  prosise.then(a => a.forEach(id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(a => printPots(a))
  }))
}

// render([17, false, true, false])
// render('1,2,3')
render([1,2,3,4,5,6])