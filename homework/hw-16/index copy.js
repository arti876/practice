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

function renderPosts(...idPosts) {
  // const abc = idPosts.replace(/[^0-9]/g,[])
  // console.log(abc)
  // const idArr = Array.from(abc)
  const idArr = idPosts.flat(10);

  postNumbers.textContent = `Номера запрошенных постов: ${idArr.join(', ')}`;

  if (idArr.some((id) => typeof id !== 'number')) {
    const incorrectDataResult = idArr.filter(el => typeof el !== 'number').join(', ');
    incorrectData.textContent = `Не все посты отобразились, проверьте введенные данные: ${incorrectDataResult}`;
  }

  Promise.allSettled(fetchPosts(idArr))
    .then(response => response.forEach(el => printPots(el.value)))
    .catch((e) => alert(e))
};

let promise = new Promise(function(resolve, reject) {
  
});

promise.then()

renderPosts('15, 23, 7, 3')
// renderPosts([17, false, true, false])
// renderPosts(1,2,3,4,5,6)
// renderPosts(1,2)
// renderPosts([1,2,3,4,5,6])
// renderPosts([1,2])
// renderPosts({})
// renderPosts(true, false)
// renderPosts(null)
// renderPosts(['dfgdfg'])

//------------------------------------------------

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  console.log(h + ":" + m + ":" + s)
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };
  return i;
}

startTime()

//------------------------------------------------