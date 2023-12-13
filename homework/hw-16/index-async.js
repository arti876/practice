const root = document.querySelector('.root');
const postNumbers = document.querySelector('.post-numbers');
const incorrectData = document.querySelector('.incorrect-data');


function printPots({ userId, id, title, body }) {
  // if (!userId || !id || !title || !body) {
  //   return
  // } else {
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
  // }
};

function checkIdPosts(value) {
  if (value.constructor === String) {
    const newArr = value.split(',')
    return newArr.map(el => +el).filter(el => el === Number(el))
  }
  return value.filter(el => el === Number(el))
}

async function renderPosts(idPosts) {
  const idArr = idPosts.flat();

  postNumbers.textContent = `Номера запрошенных постов: ${idArr.join(', ')}`;

  if (idArr.some((id) => typeof id !== 'number')) {
    const incorrectDataResult = idArr.filter(el => typeof el !== 'number').join(', ');
    incorrectData.textContent = `Не все посты отобразились, проверьте введенные данные: ${incorrectDataResult}`;
  }

  try {
    const promises = idArr.map(async (id) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return await response.json();
    });
    const settledPromises = await Promise.allSettled(promises)
    settledPromises.forEach(el => printPots(el.value))
  } catch (error) {
    console.log("Error in catch:", error);
  }
}

// renderPosts(checkIdPosts('17, 23 false, 28, true, false'))
renderPosts(checkIdPosts([17, 23, 'false', 28]))