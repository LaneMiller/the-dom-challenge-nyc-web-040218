const counter = document.getElementById('counter')
const increase = document.getElementById('+')
const decrease = document.getElementById('-')
const like = document.getElementById('<3')
const likesUl = document.querySelector('.likes')
const pause = document.getElementById('pause')
const commentForm = document.getElementById('comment-form')
const commentsDiv = document.getElementById('list')


let playing = true
const likes = {}
const comments = []


setInterval(function() {
  if (playing) {
    counter.innerText = parseInt(counter.innerText) + 1
  }
}, 1000)


pause.addEventListener('click', () => {
  if (playing) {
    playing = false;
  } else {
    playing = true
  }
})

increase.addEventListener('click', function() {counter.innerText = parseInt(counter.innerText) + 1})
decrease.addEventListener('click', function() {counter.innerText = parseInt(counter.innerText) - 1})

like.addEventListener('click', function () {
  if (likes[counter.innerText]) {
    ++likes[counter.innerText]
  } else {
    likes[counter.innerText] = 1
  }

  for (let key in likes) {
    let wordTimes
    likes[key] === 1 ? wordTimes = "time" : wordTimes = "times"

    if ( document.getElementById(key) ) {
      document.getElementById(key).innerText = `${key} has been liked ${likes[key]} ${wordTimes}`
    } else {
      let likeLi = document.createElement('li')
      likeLi.innerText = `${key} has been liked ${likes[key]} ${wordTimes}`
      likeLi.setAttribute('id', key)
      likesUl.appendChild(likeLi)
    }
  }
})

let commentsUl = document.createElement('ul')
commentsDiv.appendChild(commentsUl)

commentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // let comment = commentForm.firstElementChild.value
  let comment = commentForm['input'].value
  comments.push(comment)

  let commentsLi = document.createElement('li')
  commentsLi.innerText = comments[comments.length - 1]
  commentsUl.appendChild(commentsLi)

  commentForm['input'].value = ""
})
