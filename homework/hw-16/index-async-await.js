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

async function fetchPosts(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}

async function renderPosts(...idPosts) {
  const idArr = idPosts.flat(10);

  postNumbers.textContent = `Номера запрошенных постов: ${idArr.join(', ')}`;

  if (idArr.some((id) => typeof id !== 'number')) {
    const incorrectDataResult = idArr.filter(el => typeof el !== 'number').join(', ');
    incorrectData.textContent = `Не все посты отобразились, проверьте введенные данные: ${incorrectDataResult}`;
  }

  try {
    const promisesAllSettled = await Promise.allSettled(idArr.map(fetchPosts))
    promisesAllSettled.forEach(el => printPots(el.value))
  } catch (error) {
    console.log(error);
  }
};


renderPosts(15, 23, 7, 3)
// renderPosts('15, 23, 7, 3')
// renderPosts([17, false, true, false])
// renderPosts(1, 2, 3, 4, 5, 6)
// renderPosts(1,2)
// renderPosts([1,2,3,4,5,6])
// renderPosts([1,2])
// renderPosts({})
// renderPosts(true, false)
// renderPosts(null)
// renderPosts(['dfgdfg'])